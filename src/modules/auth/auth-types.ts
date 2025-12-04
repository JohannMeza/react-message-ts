export interface SignInTypes {
  username: string
  password: string
}

export interface ResponseSignInProps {
  email: string
  token: string
  username: string
}

export interface AccessAuthProps {
  idUser: number
  email: string
  username: string
  name: string
  pathImage: string
  info: string
}

export interface FormRegisterProps {
  username: string
  email: string
  password: string
  passwordRepeat: string
}

export interface AuthContextProps {
  access: () => void
  logout: () => void
  user: AccessAuthProps
  isAuth: boolean
}