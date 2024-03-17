import { FC, PropsWithChildren } from 'react';
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { useHandleActivePicturesViewer } from './pictures-viewer-hooks';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';

export const PicturesViewer: FC<PropsWithChildren> = () => {
  const { isActive, handleChangeImageViewer } = useHandleActivePicturesViewer();

  const PicturesViewerStyles = {
    visibility: isActive ? 'visible' : 'hidden',
    transition: 'opacity .5s ease, visibility .5s ease',
    bgcolor: 'background_colors_opacity.600',
    opacity: isActive ? '1' : '0',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    position: 'fixed',
    zIndex: 10000,
    height: 1,
    width: 1,
    left: 0,
    top: 0,
  };

  return (
    <Box sx={PicturesViewerStyles}>
      <Stack flexDirection="row" justifyContent="space-between" padding={2}>
        <Stack flexDirection="row" alignItems="center" gap={2}>
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <IconButton
              size="small"
              color="default"
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Avatar />
          </Stack>
          <Box>
            <Typography fontWeight={700} color="white.main" fontSize={20}>
              Esther Ramos
            </Typography>
            <Typography color="white.main" fontSize={14}>
              hoy a la(s) 9:04 p.m.
            </Typography>
          </Box>
        </Stack>
        <Stack flexDirection="row" gap={2} alignItems="center">
          <IconButton color="white">
            <ShareIcon />
          </IconButton>
          <IconButton color="white">
            <StarIcon />
          </IconButton>
          <IconButton color="white">
            <DownloadIcon />
          </IconButton>
          <IconButton color="white">
            <StarIcon />
          </IconButton>
          <IconButton color="white">
            <MoreVertIcon />
          </IconButton>
          <IconButton
            color="white"
            onClick={() => handleChangeImageViewer(false)}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Box width={1} height={1}></Box>

      <Box></Box>
    </Box>
  );
};
