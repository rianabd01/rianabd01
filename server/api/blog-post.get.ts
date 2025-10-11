export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)
  
  if (!id) {
    return {
      success: false,
      error: 'Missing post ID'
    }
  }
  
  const Parser = await import('rss-parser')
  const parser = new Parser.default()
  const feedUrl = 'https://medium.com/feed/@rianw'
  
  try {
    const feed = await parser.parseURL(feedUrl)
    
    // Find the post with the matching ID
    const post = feed.items.find(item => {
      if (item.guid) {
        // Extract ID from guid (Medium's guid format: https://medium.com/p/8ea1dadc563e)
        const guidParts = item.guid.split('/')
        const postId = guidParts[guidParts.length - 1]
        return postId === id
      }
      return false
    })
    
    if (!post) {
      // Also try to match with the link if guid matching failed
      const matchedPost = feed.items.find(item => {
        if (item.link) {
          // Extract ID from link (Medium's link format: https://medium.com/@rianw/title-8ea1dadc563e)
          const linkParts = item.link.split('-')
          const linkId = linkParts[linkParts.length - 1].split('?')[0] // Remove query parameters
          return linkId === id
        }
        return false
      })
      
      if (matchedPost) {
        return {
          success: true,
          post: {
            title: matchedPost.title || '',
            link: matchedPost.link || '',
            pubDate: matchedPost.pubDate || '',
            content: matchedPost['content:encoded'] || matchedPost.content || '',
            categories: matchedPost.categories || [],
            creator: matchedPost.creator || ''
          }
        }
      }
      
      return {
        success: false,
        error: 'Post not found'
      }
    }
    
    return {
      success: true,
      post: {
        title: post.title || '',
        link: post.link || '',
        pubDate: post.pubDate || '',
        content: post['content:encoded'] || post.content || '',
        categories: post.categories || [],
        creator: post.creator || ''
      }
    }
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return {
      success: false,
      error: 'Failed to fetch blog post'
    }
  }
})