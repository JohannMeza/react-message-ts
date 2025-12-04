import * as yup from 'yup';

export const formProfileSchema = yup
  .object()
  .shape({
    name: yup.string().label('name').min(3).required('Tu nombre es obligatorio.'),
    info: yup.string().label('name'),
    image: yup.string().label('image'),
    idProfile: yup.number().label('name').required(),
  });