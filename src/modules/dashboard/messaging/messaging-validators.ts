import * as yup from 'yup';

export const formMessagingSend = yup
  .object()
  .shape({
    message: yup.string().label('message').trim().required()
  });
