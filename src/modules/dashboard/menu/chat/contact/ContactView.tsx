import { FC, PropsWithChildren } from 'react';
import { ChatItemView } from '../component/ChatItemView';
import { Box, Stack, Typography } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { useFetchAction } from '@cobuildlab/react-simple-state';
import { listContactsAddedAction } from './contact-actions';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';
import { useFormSearchContact, useHandleSearchContact } from './contact-hooks';
import { Controller } from 'react-hook-form';

export const ContactView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const [, loading] = useFetchAction(listContactsAddedAction, [user.idUser]);
  const { control, watch } = useFormSearchContact();
  const { nameContact } = watch();
  const contacts = useHandleSearchContact(nameContact || '');
  
  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
      <Box paddingX={2} paddingY={2}>
        <Controller
          name='nameContact'
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <Controls.InputComponent
              variant="primary"
              placeholder="Buscar contacto..."
              value={value}
              onChange={onChange}
              {...rest}
            />
          )}
        />
      </Box>
      <LoaderAwait open={loading} fullPage={true} height={'250px'} style={{ overflow: 'auto' }}>
        <Stack height={1}>
          {contacts.map((el, index) => (
            <ChatItemView
              key={index}
              avatar={el.pathImagen}
              messagesUnread={el.messagesUnread}
              message={el.lastMessage}
              idTypeComunication={el.idTypeComunication}
              idContactMessageState={el.idContactMessageState}
              sendDateTime={el.dSendDateTime}
              name={el.name}
              idContact={el.idContact}
            />
          ))}

          {
            contacts.length === 0 &&
            <Typography margin={'auto'}>Sin resultados</Typography>
          }
        </Stack>
      </LoaderAwait>
    </Box>
  );
};