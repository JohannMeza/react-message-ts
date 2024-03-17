import { FC } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Grid,
  Button,
} from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

interface ProfileType {
  handleClickBack: () => void;
}

export const ProfileView: FC<ProfileType> = ({ handleClickBack }) => (
  <Box padding="10px" height={1}>
    <Stack flexDirection="row" alignItems="center" gap={2}>
      <IconButton color="default" onClick={handleClickBack}>
        <NavigateBeforeIcon />
      </IconButton>
      <Typography fontSize={20} fontWeight={700} color="grey.700">
        Mi Perfil
      </Typography>
    </Stack>

    <Box marginTop={3}>
      <Stack flexDirection="row" justifyContent="center">
        <Avatar sx={{ width: 150, height: 150 }} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controls.InputComponent
            variant="primary"
            label="Tu Nombre"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.InputComponent variant="primary" label="Info" fullWidth />
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Button variant="contained" color="info">
            Editar
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
);
