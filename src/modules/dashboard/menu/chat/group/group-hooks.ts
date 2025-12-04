import { yupResolver } from '@hookform/resolvers/yup';
import { formSearchGroupSchema } from './group-validators';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { FormSearchGroup, GroupProps } from './group-types';
import { useEvent } from '@cobuildlab/react-simple-state';
import { listGroupsAddedEvent } from './group-events';

export const useFormSearchGroup = (props?: UseFormProps<FormSearchGroup>): UseFormReturn<FormSearchGroup> => useForm<FormSearchGroup>({
  resolver: yupResolver(formSearchGroupSchema, { abortEarly: true }),
  ...props
});

export const useHandleSearchGroup = (nameGroup: string): GroupProps[] => {
  const groups = useEvent(listGroupsAddedEvent);
  if (nameGroup === '') return groups;
  return groups.filter((el) => el.name.toLowerCase().includes(nameGroup.toLowerCase()));
};