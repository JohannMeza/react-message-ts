import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { formSearchContactSchema } from './contact-validators';
import { ContactProps, FormSearchContact } from './contact-types';
import { useEvent } from '@cobuildlab/react-simple-state';
import { listContactsAddedEvent } from './contact-events';

export const useFormSearchContact = (props?: UseFormProps<FormSearchContact>): UseFormReturn<FormSearchContact> => useForm<FormSearchContact>({
  resolver: yupResolver(formSearchContactSchema, { abortEarly: true }),
  ...props
});

export const useHandleSearchContact = (nameContact: string): ContactProps[] => {
  const contacts = useEvent(listContactsAddedEvent);
  if (nameContact === '') return contacts;
  return contacts.filter((el) => el.name.toLowerCase().includes(nameContact.toLowerCase()));
};