import { Box, ListItemButton, styled } from '@mui/material';

export const ContainedView = styled(Box)<{ moveposition: string }>(
  ({ moveposition }) => ({
    position: 'absolute',
    left: moveposition,
    width: '100%',
    height: '100%',
    bgcolor: 'red.main',
    transition: 'left .2s ease',
    backdropFilter: 'blur(8px)',
    top: 0,
  }),
);

export const ListSettingBox = styled(ListItemButton)(({ theme }) => ({
  padding: '16px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  userSelect: 'none',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  '&:hover': {
    backgroundColor: theme.palette.background_colors_opacity[50],
  },
}));
