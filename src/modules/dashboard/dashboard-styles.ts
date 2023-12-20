import { SxProps, Theme } from '@mui/material';

export const MenuViewDisplay = (chatOpen: string | null): SxProps<Theme> | undefined => ({ display: { xs: chatOpen ? 'none' : 'block', lg: 'block' } });
export const MessageViewDisplay = (chatOpen: string | null): SxProps<Theme> | undefined => ({ display: { xs: chatOpen ? 'flex' : 'none', lg: 'flex' }, bgcolor: { xs: 'none', md: 'background_colors_opacity.50' } });