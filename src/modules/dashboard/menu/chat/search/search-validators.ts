import * as yup from 'yup';

export const formSearchUsersSchema = yup
  .object()
  .shape({
    username: yup.string().label('username').required('Nombre de usuario es obligatorio.'),
    idUser: yup.number().label('idUser').required('Id del usuario que inicio sesion no se ha enviado')
  });