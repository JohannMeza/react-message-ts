import * as yup from 'yup';

export const formSearchContactSchema = yup
  .object()
  .shape({
    nameContact: yup.string().label('nameContact')
  });