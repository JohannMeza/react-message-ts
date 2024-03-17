import { Box, Stack } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { FC, PropsWithChildren } from 'react';
import { groupsMockup } from './group-mockup';
import { ChatItemView } from '../component/ChatItemView';

export const GroupView: FC<PropsWithChildren> = () => (
  <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
    <Box paddingX={2} paddingY={2}>
      <Controls.InputComponent
        variant="primary"
        placeholder="Buscar grupo..."
      />
    </Box>
    <Stack overflow="auto">
      {groupsMockup.map((el, index) => (
        <ChatItemView
          key={index}
          avatar={el.avatar}
          message={el.message}
          state={el.state}
          name={el.name}
          handleClickChat={() => {}}
          createdAt={el.createdAt}
          id="123"
        />
      ))}
    </Stack>
  </Box>
);
