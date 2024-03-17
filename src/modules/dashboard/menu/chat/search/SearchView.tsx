import { FC, PropsWithChildren, useRef, useEffect } from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { usersMockup } from './search-mockup';

export const SearchView: FC<PropsWithChildren> = () => {
  const inputSearchRef = useRef<HTMLInputElement>(null);
  useEffect(
    () => inputSearchRef.current?.querySelector('input')?.focus(),
    [inputSearchRef],
  );

  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
      <Box paddingX={2} paddingY={2} ref={inputSearchRef}>
        <Controls.InputComponent
          variant="primary"
          placeholder="Buscar solicitudes..."
        />
      </Box>
      <Stack overflow="auto">
        {usersMockup.map((el, index) => (
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
              </Stack>
              <Typography fontSize={15}>{el.description}</Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
