export interface Project {
  projectName: string
  description: string
  team: string
  mainTechnology: string
  styling: string
  otherTechnologies?: string[]
  img: string
  tags: Tag[]
}

export interface Tag {
  label: string
  full: string
  link: string
}