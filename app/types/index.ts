export interface GitHubProject {
  id: number
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
}

export interface GitHubApiResponse {
  success: boolean
  projects?: GitHubProject[]
  error?: string
  timestamp?: string
  fetchedAt?: number
}

export interface BlogPost {
  title: string
  link: string
  pubDate: string
  contentSnippet?: string
  content?: string
  categories: string[]
  creator: string
  id?: string
}

export interface BlogPostsApiResponse {
  success: boolean
  posts?: BlogPost[]
  error?: string
}

export interface BlogPostApiResponse {
  success: boolean
  post?: BlogPost
  error?: string
}
