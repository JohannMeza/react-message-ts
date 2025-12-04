import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AvatarUpload = styled(Box)(({ theme }) => ({
    width: 150, 
    height: 150,
    borderRadius: '150px',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background .5s ease, opacity .5s ease',
    fontWeight: 'bold',
    userSelect: 'none',
    opacity: 0,
    background: theme.palette.background_colors_opacity[60],
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
    }
  }),
);