import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormInfoNewGroupProps } from './information-types';
import { formInfoNewGroupSchema } from './information-validators';

export const useFormInfomationGroup = (props?: UseFormProps<FormInfoNewGroupProps>): UseFormReturn<FormInfoNewGroupProps> => useForm<FormInfoNewGroupProps>({
  resolver: yupResolver(formInfoNewGroupSchema, { abortEarly: false }),
  ...props
});