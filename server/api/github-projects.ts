export default defineEventHandler(async () => {
  try {
    // Fetch repositories from GitHub API
    const response = await fetch('https://api.github.com/users/rianabd01/repos')
    
    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }
    
    const repos = await response.json()
    
    // Filter repositories that have "portofolio" in their topics
    const portfolioRepos = repos.filter((repo: any) => {
      return repo.topics && repo.topics.includes('portofolio')
    })
    
    // Map to the format we want to use in the frontend
    const projects = portfolioRepos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      topics: repo.topics,
      html_url: repo.html_url,
      homepage: repo.homepage,
      stargazers_count: repo.stargazers_count,
      language: repo.language
    }))
    
    return {
      success: true,
      projects
    }
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error)
    return {
      success: false,
      error: 'Failed to fetch projects',
      projects: []
    }
  }
})