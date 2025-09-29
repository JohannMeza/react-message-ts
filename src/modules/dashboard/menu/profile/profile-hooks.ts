import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormProfileProps } from './profile-types';
import { formProfileSchema } from './profile-validators';

export const useFormProfile = (props?: UseFormProps<FormProfileProps>): UseFormReturn<FormProfileProps> => useForm<FormProfileProps>({
  resolver: yupResolver(formProfileSchema, { abortEarly: false }),
  ...props
});