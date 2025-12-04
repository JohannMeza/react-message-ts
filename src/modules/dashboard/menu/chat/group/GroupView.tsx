import { Box, Stack, Typography } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { FC, PropsWithChildren } from 'react';
import { ChatItemView } from '../component/ChatItemView';
import { MessageStateEnum } from '@src/modules/dashboard/dashboard-types';
import { useFetchAction } from '@cobuildlab/react-simple-state';
import { listGroupsAddedAction } from './group-actions';
import { Controller } from 'react-hook-form';
import { useFormSearchGroup, useHandleSearchGroup } from './group-hooks';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';
import { MessagingContainer } from '@src/modules/dashboard/messaging/messaging-types';

export const GroupView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const [, loading] = useFetchAction(listGroupsAddedAction, [user.idUser]);
  const { control, watch } = useFormSearchGroup();
  const { nameGroup } = watch();
  const groups = useHandleSearchGroup(nameGroup || '');
  
  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
      <Box paddingX={2} paddingY={2}>
        <Controller 
          name='nameGroup'
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <Controls.InputComponent
              variant='primary'
              placeholder='Buscar grupo...'
              value={value}
              onChange={onChange}
              {...rest}
            />
          )}
        />
      </Box>
      <LoaderAwait open={loading} fullPage={true} height={'250px'} style={{ overflow: 'auto' }}>
        <Stack height={1}>
          {groups.map((el, index) => (
            <ChatItemView
              key={index}
              avatar={el.avatar || ''}
              contactStatus={MessagingContainer.GROUP}
              message={el.message}
              name={el.name}
              messagesUnread={''}
              idContact={el.id}
              idTypeComunication={el.idTypeComunication}
              idContactMessageState={MessageStateEnum.SENT}
              sendDateTime={el.dSendDateTime}/>
          ))}

          {
            groups.length === 0 &&
            <Typography margin={'auto'}>Sin resultados</Typography>
          }
        </Stack>
      </LoaderAwait>
    </Box>
  );
};