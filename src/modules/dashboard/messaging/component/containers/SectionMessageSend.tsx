import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { BoxSendingProps, BoxUpdateProps, SectionSendMessageTypes, SendMessageContactProps } from '../../messaging-types';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { paddingResponsive } from '../../messaging-styles';
import { ContactStateType } from '@src/shared/types/base/contact/contact-types';
import { useFormMessagingSend } from '../../messaging-hooks';
import { Controller } from 'react-hook-form';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { messageEditEvent } from '../messages/message-events';

export const SectionMessageContact: FC<SendMessageContactProps> = ({ onSendMessage }) => {
  const { handleSubmit, control, setValue } = useFormMessagingSend();
  
  const handleMessageSend = handleSubmit(
    async (dataForm) => {
      onSendMessage(dataForm.message);
      setValue('message', '');
    }
  );

  return (
    <Box paddingY={1} paddingX={paddingResponsive}>
      <Stack flexDirection="row" alignItems="flex-end" bgcolor="white.main">
        <IconButton aria-label="Folder">
          <DriveFolderUploadIcon />
        </IconButton>
        <Controller 
          name='message'
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <Controls.InputComponent
              multiline
              value={value}
              onChange={onChange}
              variant="primary"
              size="large"
              sx={{
                maxHeight: '120px',
                minHeight: '40px',
                height: 'auto',
                overflow: 'auto',
              }}
              {...rest}
            />
          )}
        />
        <IconButton 
          aria-label="Send Message" 
          onClick={handleMessageSend}
        >
          <SendIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export const SectionBlockedContact: FC<PropsWithChildren> = () => {
  const theme = useTheme();

  return (
    <Box paddingY={1} paddingX={paddingResponsive}>
      <Stack alignItems="center" gap={1}>
        <Typography component='b' fontWeight={'600'} color={theme.palette.red.main}>Haz sido bloqueado.</Typography>
      </Stack>
    </Box>
  );
};

export const SectionDeletedContact: FC<PropsWithChildren> = () => <></>;

export const BoxSending = <T extends BoxSendingProps>(props: T): ReactElement => {
  const SectionSending: SectionSendMessageTypes = {
    [ContactStateType.BLOCKED]: SectionBlockedContact,
    [ContactStateType.CONTACT]: SectionMessageContact,
    [ContactStateType.DELETED]: SectionDeletedContact,
  };

  const ComponentTest = SectionSending[props.stateContact];

  return <ComponentTest { ...props } />;
};

export const BoxUpdate = <T extends BoxUpdateProps>(props: T): ReactElement => {
  const { handleSubmit, control, setValue } = useFormMessagingSend({
    defaultValues: {
      message: props.message
    }
  });
  
  const closeMessageEditing = ():void => {
    messageEditEvent.dispatch(null);
  };

  const handleMessageUpdate = handleSubmit(
    async (dataForm) => {
      props.onUpdateMessage(dataForm.message, props.batchMessage);
      setValue('message', '');
    }
  );
  
  return (
    <Box paddingY={1} paddingX={paddingResponsive}>
      <Stack flexDirection="row" alignItems="flex-end" bgcolor="white.main">
        <IconButton aria-label="Folder">
          <DriveFolderUploadIcon />
        </IconButton>
        <Controller 
          name='message'
          control={control}
          render={({ field: { onChange, value, ...rest } }) => (
            <Controls.InputComponent
              multiline
              value={value}
              onChange={onChange}
              variant="primary"
              size="large"
              sx={{
                maxHeight: '120px',
                minHeight: '40px',
                height: 'auto',
                overflow: 'auto',
              }}
              {...rest}
            />
          )}
        />
        <IconButton 
          aria-label="Close Message" 
          onClick={closeMessageEditing}
        >
          <CloseIcon />
        </IconButton>
        <IconButton 
          aria-label="Edit Message" 
          onClick={handleMessageUpdate}
        >
          <CheckIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};