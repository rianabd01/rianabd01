import Parser from 'rss-parser'

const calculateReadingTime = (textOrHtml: string): number => {
  if (!textOrHtml) return 1
  const cleanText = textOrHtml.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  const wordCount = cleanText ? cleanText.split(' ').length : 0
  return Math.max(1, Math.ceil(wordCount / 200))
}

const createSnippet = (htmlOrText: string, maxLength: number = 220): string => {
  if (!htmlOrText) return ''
  const clean = htmlOrText
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
  
  if (!clean) return ''
  if (clean.length <= maxLength) return clean
  return clean.substring(0, maxLength).trim() + '...'
}

export default defineEventHandler(async () => {
  const parser = new Parser()
  const feedUrl = 'https://medium.com/feed/@rianw'
  
  try {
    const feed = await parser.parseURL(feedUrl)
    
    const posts = feed.items.map(item => {
      const content = (item as any)['content:encoded'] || item.content || item.contentSnippet || ''
      const snippet = createSnippet(content) || item.contentSnippet || ''
      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        contentSnippet: snippet,
        categories: item.categories || [],
        creator: item.creator || '',
        readingTime: calculateReadingTime(content)
      }
    })
    
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