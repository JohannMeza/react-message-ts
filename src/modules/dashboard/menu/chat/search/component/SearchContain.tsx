import { ReactElement, ReactNode } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';
import NotFoundGif from '@src/assets/notFound.gif';
import NotSearchGif from '@src/assets/notSearch.gif';
import { SearchContainEmptyType, SearchContainEnum, SearchContainFoundType, SearchContainItemType, SearchContainNotFoundType, SearchContainTypes } from '../search-types';
import { useHandleContainSearch } from '../search-hooks';

const NotFoundUsers = <T extends SearchContainNotFoundType>(props: T): ReactElement => (
  <LoaderAwait open={props.loading} centered minHeight={'250px'} height={1}>
    <img src={NotFoundGif} alt="Logotipo pipedrive" width={'100%'} />
  </LoaderAwait>
);

const NotSearchUsers = <T extends SearchContainEmptyType>(props: T): ReactElement => (
  <LoaderAwait open={props.loading} centered minHeight={'250px'} height={1}>
    <img src={NotSearchGif} alt="Logotipo pipedrive" width={'100%'} />
  </LoaderAwait>
);

const UsersFound = <T extends SearchContainFoundType>(props: T): ReactElement => (
  <LoaderAwait open={props.loading} timer={1} centered minHeight={'250px'} height={1} >
    {props.users?.map((el, index) => (
      <Stack
        sx={{
          '&:hover': { backgroundColor: 'tertiary.main' },
          cursor: 'pointer',
        }}
        flexDirection="row"
        alignItems="center"
        paddingX={2}
        paddingY={1}
        gap={2}
        onClick={() => props.callViewUserData(props.idUser, el.idUserContact)}
        key={index}
      >
        <Avatar src={el.pathImage ?? ''} />
        <Stack gap={0.3} width={1}>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width={1}
          >
            <Typography fontSize={16} fontWeight={700} color="grey.700">
              {el.name}
            </Typography>
          </Stack>
          <Typography fontSize={15}>{el.info}</Typography>
        </Stack>
      </Stack>
    ))}
  </LoaderAwait>
);

export const SearchContain = <T extends SearchContainItemType>(
  props: T,
): ReactNode => {
  const typeSearch: SearchContainEnum = useHandleContainSearch({
    loading: props.loading,
    username: props.username,
    users: props.users,
  });

  const typesContainSearch: SearchContainTypes = {
    [SearchContainEnum.EMPTY]: NotSearchUsers,
    [SearchContainEnum.FOUND]: UsersFound,
    [SearchContainEnum.NOT_FOUND]: NotFoundUsers,
  };

  const ComponentTest = typesContainSearch[typeSearch];
  
  return <ComponentTest {...props} />;
};
