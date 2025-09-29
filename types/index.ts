export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export interface NavItem {
  path: string
  label: string
  icon?: string
}