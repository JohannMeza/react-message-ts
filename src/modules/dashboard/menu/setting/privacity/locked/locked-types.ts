import { ContactProps } from '../../../chat/contact/contact-types';

export interface ContactsViewLockedProps extends Omit<ContactProps, 'lastMessage' | 'createdDate'> {
  description: string
}