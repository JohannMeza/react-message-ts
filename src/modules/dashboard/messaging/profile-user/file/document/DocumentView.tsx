import { Box, Stack, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { MessageItemView } from '../../../component/messages/MessageView';
import { messagesDocumentMockup } from './document-mockups';

export const DocumentView: FC<PropsWithChildren> = () => (
  <Stack gap={2} overflow="auto" height={1}>
    {messagesDocumentMockup.map((item, index) => (
      <Box key={index}>
        <Typography
          fontWeight={600}
          fontSize={14}
          color="grey.700"
          paddingBottom={0.5}
        >
          {item.month}
        </Typography>
        <Box display="grid" gridTemplateColumns="1fr" gap={2}>
          {item.messages.map((message) => (
            <MessageItemView {...message} key={message.idContactMessage} />
          ))}
        </Box>
      </Box>
    ))}
  </Stack>
);
