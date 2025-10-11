import Parser from 'rss-parser'

export default defineEventHandler(async () => {
  const parser = new Parser()
  const feedUrl = 'https://medium.com/feed/@rianw'
  
  try {
    const feed = await parser.parseURL(feedUrl)
    
    const posts = feed.items.map(item => ({
      title: item.title || '',
      link: item.link || '',
      pubDate: item.pubDate || '',
      contentSnippet: item.contentSnippet || '',
      categories: item.categories || [],
      creator: item.creator || ''
    }))
    
    return {
      success: true,
      posts
    }
  } catch (error) {
    console.error('Error fetching RSS feed:', error)
    return {
      success: false,
      error: 'Failed to fetch blog posts',
      posts: []
    }
  }
})