import * as yup from 'yup';

export const formInfoNewGroupSchema = yup
  .object()
  .shape({
    name: yup.string().label('name').min(3).required('Nombre del grupo es obligatorio.'),
    info: yup.string().label('info'),
    image: yup.string().label('image'),
  });