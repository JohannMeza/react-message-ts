import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormRegisterProps, SignInTypes } from './auth-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { formRegisterSchema, formSignInSchema } from './auth-validators';

export const useFormSignIn = (props?: UseFormProps<SignInTypes>): UseFormReturn<SignInTypes> => useForm<SignInTypes>({
  resolver: yupResolver(formSignInSchema, { abortEarly: false }),
  ...props
});

export const useFormRegister = (props?: UseFormProps<FormRegisterProps>): UseFormReturn<FormRegisterProps> => useForm<FormRegisterProps>({
  resolver: yupResolver(formRegisterSchema, { abortEarly: false }),
  ...props
});