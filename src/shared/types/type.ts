import { AlertColor } from "@mui/material"
import { SweetAlertIcon } from "sweetalert2"

export interface Response<
  T extends {
    dataList?: any[]
    dataObject?: object
    error?: object
    params?: object
  },
> {
  dataList: T['dataList']
  dataObject: T['dataObject']
  message?: string
}

export interface ResponseSuccess {
  dataList: any[]
  dataObject: any
  message: string
}

export interface ResponseError {
  text: string
  title: string
  type: AlertColor
  statusCode: number
  stack: string
}