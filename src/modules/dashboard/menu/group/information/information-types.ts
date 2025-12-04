export interface MembersGroupProps {
  idUser: number
}

export interface FormInfoNewGroupProps {
  name: string
  info?: string
  image?: string
}

export interface CreateNewGroupProps {
  cNameGroup: string
  cDescription: string
  idUserAdmin: number
  userIds: number[]
}

export interface UploadGroupProps {
  url: string
  path: string
  filename: string
}