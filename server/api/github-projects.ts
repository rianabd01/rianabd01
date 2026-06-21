export default defineEventHandler(async (event) => {
  // Set cache control headers to prevent caching
  event.node.res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  event.node.res.setHeader('Pragma', 'no-cache')
  event.node.res.setHeader('Expires', '0')
  event.node.res.setHeader('Surrogate-Control', 'no-store')
  
  try {
    // Add a timestamp to the request to bust any possible caching
    const timestamp = new Date().getTime()
    const url = `https://api.github.com/users/rianabd01/repos?sort=pushed&direction=desc&per_page=100&timestamp=${timestamp}`
    
    // Fetch repositories from GitHub API with cache busting
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'portfolio-website',
        'Accept': 'application/vnd.github.v3+json'
      }
    })
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }
    
    const repos = await response.json()
    
    // Filter repositories that have "portofolio" in their topics
    const portfolioRepos = repos
      .filter((repo: any) => {
        return repo.topics && Array.isArray(repo.topics) && repo.topics.includes('portofolio')
      })
      .sort((a: any, b: any) => {
        const latestA = new Date(a.pushed_at || a.updated_at || a.created_at || 0).getTime()
        const latestB = new Date(b.pushed_at || b.updated_at || b.created_at || 0).getTime()

        return latestB - latestA
      })
    
    // Map to the format we want to use in the frontend
    const projects = portfolioRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      topics: repo.topics || [],
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      created_at: repo.created_at,
      updated_at: repo.updated_at,
      pushed_at: repo.pushed_at
    }))
    
    return {
      success: true,
      projects,
      timestamp: new Date().toISOString(),
      fetchedAt: Date.now()
    }
  } catch (error: any) {
    console.error('Error fetching GitHub repositories:', error)
    return {
      success: false,
      error: error.message || 'Failed to fetch projects',
      projects: [],
      timestamp: new Date().toISOString(),
      fetchedAt: Date.now()
    }
  }
})
