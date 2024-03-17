import { FC, PropsWithChildren } from 'react';
import { messagesLinksMockup } from './link-mockups';
import { Box, Stack, Typography } from '@mui/material';
import { MessageItemView } from '../../../component/messages/MessageView';

export const LinkView: FC<PropsWithChildren> = () => (
  <Stack gap={2} overflow="auto" height={1}>
    {messagesLinksMockup.map((item, index) => (
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
            <MessageItemView {...message} key={message.id} />
          ))}
        </Box>
      </Box>
    ))}
  </Stack>
);
