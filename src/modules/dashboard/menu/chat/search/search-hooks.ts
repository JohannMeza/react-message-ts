import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form';
import { formSearchUsersSchema } from './search-validators';
import { FormSearchUsersProps, SearchContainEnum, UseHandleContainSearch, UseHandleSearchUsers } from './search-types';
import { useEvent } from '@cobuildlab/react-simple-state';
import { searchUsersEvent } from './search-events';

export const useHandleSearchUsers = (): UseHandleSearchUsers => {
  const users = useEvent(searchUsersEvent);
  const reset = (): void => searchUsersEvent.dispatch({ ...users, dataList: [] });
  
  if (!users) return { users: [], reset };
  
  return {
    users: users.dataList || [],
    reset
  };
};

export const useFormSearchUsers = (props?: UseFormProps<FormSearchUsersProps>):UseFormReturn<FormSearchUsersProps> => useForm<FormSearchUsersProps>({
  resolver: yupResolver(formSearchUsersSchema, { abortEarly: false }),
  ...props
});

export const useHandleContainSearch = ({ users, username, loading }: UseHandleContainSearch): SearchContainEnum => {
  let typeSearch = SearchContainEnum.NOT_FOUND;
  
  if(users.length === 0 && username !== '' && loading) {
    typeSearch = SearchContainEnum.NOT_FOUND;
  } else if(users.length === 0 && username === '') {
    typeSearch = SearchContainEnum.EMPTY;
  } else if(users.length !== 0 && username !== '' ) {
    typeSearch = SearchContainEnum.FOUND;
  }
  
  return typeSearch;
};