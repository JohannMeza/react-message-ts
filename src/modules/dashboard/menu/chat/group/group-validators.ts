import * as yup from 'yup';

export const formSearchGroupSchema = yup
  .object()
  .shape({
    nameGroup: yup.string().label('nameGroup')
  });