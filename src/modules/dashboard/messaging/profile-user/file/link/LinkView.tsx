import { FC, PropsWithChildren } from 'react';
import { MessagesLinksMockup } from './link-mockups';
import { Box, Stack, Typography } from '@mui/material';
// import { MessageItemView } from '../../../component/message/MessageView';
// import { MessagesTypesEnum } from '../../../messaging-types';

export const LinkView: FC<PropsWithChildren> = () => (
  <Stack gap={2} marginTop={2}>
    {
      MessagesLinksMockup.map((item, index) => (
        <Box key={index}>
          <Typography fontWeight={600} fontSize={14} color="grey.700" paddingBottom={.5}>{ item.month }</Typography>
          {/* <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
            {
              item.messages.map((message) => 
                <MessageItemView
                  key={message.id} 
                  {...message}
                />
              )
            }
          </Box> */}
        </Box>
      ))
    }
  </Stack>
);