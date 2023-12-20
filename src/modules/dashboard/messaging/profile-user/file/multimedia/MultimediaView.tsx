import { multimediaMockup } from './multimedia-mockup';
import { FC, PropsWithChildren } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export const MultimediaView: FC<PropsWithChildren> = () => (
  <Stack gap={2} marginTop={2}>
    {
      multimediaMockup.map((el, index) => (
        <Box key={index}>
          <Typography fontWeight={600} fontSize={14} color="grey.700" paddingBottom={.5}>{ el.month }</Typography>
          <Box display="grid" gridTemplateColumns="1fr 1fr 1fr" gap={1}>
            {
              el.messages.map((message, index_message) => (
                <Box key={index_message} bgcolor="primary.main" height="110px" flexShrink={1} padding={1} borderRadius="5px">
                  <img src={message.image} alt="Message" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5px' }} />
                </Box>  
              ))
            }
          </Box>
        </Box>
      ))
    }
  </Stack>
);
