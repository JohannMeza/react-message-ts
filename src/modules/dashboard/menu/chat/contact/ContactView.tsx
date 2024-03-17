import { FC, PropsWithChildren } from 'react';
import { contactsMockup } from './contact-mockup';
import { ChatItemView } from '../component/ChatItemView';
import { Box, Stack } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';

export const ContactView: FC<PropsWithChildren> = () => (
  <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
    <Box paddingX={2} paddingY={2}>
      <Controls.InputComponent
        variant="primary"
        placeholder="Buscar contacto..."
      />
    </Box>
    <Stack overflow="auto">
      {contactsMockup.map((el, index) => (
        <ChatItemView
          key={index}
          avatar={el.avatar}
          message={el.message}
          state={el.state}
          name={el.name}
          createdAt={el.createdAt}
          id={el.id}
        />
      ))}
    </Stack>
  </Box>
);
