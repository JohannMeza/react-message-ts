import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { Controls } from '@src/shared/component/Controls';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { fetchUsersAll } from './search-actions';
import { useFormSearchUsers, useHandleSearchUsers } from './search-hooks';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/material';
import debounce from 'lodash.debounce';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { SearchContain } from './component/SearchContain';
import { fetchUserDataNotAdded } from '@src/modules/dashboard/dashboard-actions';

export const SearchView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const { users, reset } = useHandleSearchUsers();
  const inputSearchRef = useRef<HTMLInputElement>(null);
  const [callAction, loading] = useCallAction(fetchUsersAll);
  const { handleSubmit, control, watch } = useFormSearchUsers({ 
    defaultValues: { 
      idUser: user.idUser,
      username: ''
    } 
  });

  const { username } = watch();

  const handleFetchUsers = debounce(() => {
    const submit = handleSubmit(
      async (dataForm) => {
        callAction(dataForm);
      },
      async () => {
        reset();
      }
    );

    submit();
  }, 1000);

  const [callViewUserData] = useCallAction(fetchUserDataNotAdded);

  useEffect(() => {
    reset();
    inputSearchRef.current?.querySelector('input')?.focus();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearchRef]);

  useEffect(() => {
    if (username !== '') {
      handleFetchUsers();
    }
    return () => handleFetchUsers.cancel();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  
  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
      <Box paddingX={2} paddingY={2} ref={inputSearchRef}>
        <Controller 
          name='username'
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <Controls.InputComponent
              variant="primary"
              placeholder="Buscar usuarios..."
              onChange={onChange}
              value={value}
              {...rest}
            />
          )}
        />
      </Box>
        <SearchContain 
          loading={loading} 
          username={username}
          users={users}
          idUser={user.idUser}
          callViewUserData={callViewUserData}
        />
    </Box>
  );
};
