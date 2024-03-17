import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { FC, PropsWithChildren } from 'react';
import { getDateDaysOrMonths } from '../../../dashboard-functions';
import { invitationMockup } from './invitation-mockup';

export const RequestView: FC<PropsWithChildren> = () => (
  <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
    <Box paddingX={2} paddingY={2}>
      <Controls.InputComponent
        variant="primary"
        placeholder="Buscar solicitudes..."
      />
    </Box>
    <Stack overflow="auto">
      {invitationMockup.map((el, index) => (
        <Stack
          sx={{
            '&:hover': { backgroundColor: 'tertiary.main' },
            cursor: 'pointer',
          }}
          flexDirection="row"
          alignItems="center"
          paddingX={2}
          paddingY={1}
          gap={2}
          key={index}
        >
          <Avatar src={el.avatar ?? ''} />
          <Stack gap={0.3} width={1}>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              width={1}
            >
              <Typography fontSize={16} fontWeight={700} color="grey.700">
                {el.name}
              </Typography>
              <Typography fontSize={12} color="grey.700">
                {getDateDaysOrMonths(el.createdAt)}
              </Typography>
            </Stack>
            <Stack flexDirection="row" gap={1}>
              <Button size="small" variant="contained" color="error">
                Rechazar
              </Button>
              <Button size="small" variant="contained" color="info">
                Aceptar
              </Button>
            </Stack>
          </Stack>
        </Stack>
      ))}
    </Stack>
  </Box>
);
