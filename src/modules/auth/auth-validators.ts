import * as yup from 'yup';

export const formSignInSchema = yup
  .object()
  .shape({
    username: yup.string().label('username').required('Nombre de usuario es obligatorio.'),
    password: yup.string().label('password').required('Contraseña es obligatorio.')
  })
  .required();

export const formRegisterSchema = yup
  .object()
  .shape({
    email: yup.string().email().label('email').required('El email es obligatorio.'),
    username: yup.string().label('username').required('Nombre de usuario es requerido.'),
    password: yup
      .string()
      .label('password')
      .required('Contraseña es obligatoria.')
      .test('valid-password', 'La contraseña no es válida', (password) => {
        if (
          /[A-Z]/.test(password) &&
          /[a-z]/.test(password) &&
          /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(password) &&
          password.length >= 12
        ) {
          return true;
        }
        return false;
      }),
    passwordRepeat: yup
      .string()
      .label('password_repeat')
      .required('Las contraseñas no coinciden.')
      .test('passwords-match', 'Las contraseñas no coinciden.', (value, context) => {
        const values = context.parent as { [key: string]: string };
        return values.password === value;
      }),
  });