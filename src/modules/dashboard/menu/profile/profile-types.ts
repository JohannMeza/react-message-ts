export interface ProfileProps {
  cName: string
  cInfo: string
  idProfile: number
}

export interface FormProfileProps {
  name: string
  image?: string
  info?: string
  idProfile: number
}

export interface UploadProfileProps {
  url: string
  path: string
  filename: string
}