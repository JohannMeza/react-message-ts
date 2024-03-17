import { multimediaMockup } from './multimedia-mockup';
import { FC, PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { MessageItemView } from '../../../component/messages/MessageView';

export const MultimediaView: FC<PropsWithChildren> = () => (
  <Stack gap={2} marginTop={2}>
    {multimediaMockup.map((el, index) => (
      <Box key={index}>
        <Typography
          fontWeight={600}
          fontSize={14}
          color="grey.700"
          paddingBottom={0.5}
        >
          {el.month}
        </Typography>
        <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
          {el.messages.map((message, index_message) => (
            <MessageItemView key={index_message} {...message} />
          ))}
        </Box>
      </Box>
    ))}
  </Stack>
);
