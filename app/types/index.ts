export interface GitHubProject {
  id: number
  name: string
  description: string
  topics: string[]
  html_url: string
  homepage: string
  stargazers_count: number
  language: string
  updated_at?: string
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
  readingTime?: number
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

export interface SkillCategory {
  title: string
  items: string | string[]
}

export interface CtaLink {
  text: string
  link: string
}

export interface SocialLink {
  name: string
  url: string
  icon?: string
}

export interface HeroData {
  greeting: string
  name: string
  role: string
  description: string
  socials?: SocialLink[]
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
}

export interface TimelineItemData {
  role: string
  period: string
  company: string
  details: string[]
}
