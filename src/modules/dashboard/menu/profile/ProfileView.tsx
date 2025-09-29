import Grid from '@mui/material/Grid2';
import {
  Box,
  IconButton,
  Typography,
  Stack,
  Avatar,
  Button,
} from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useCallAction, useFetchAction } from '@cobuildlab/react-simple-state';
import { fetchProfileMe, updateProfileMe } from './profile-actions';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { useFormProfile } from './profile-hooks';
import { Controller } from 'react-hook-form';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { SettingCurrentViewEnum } from '../setting/setting-types';
import { useHandleChangeMenuView } from '../menu-hooks';
import { MenuCurrentViewEnum } from '../menu-types';
import { useHandleChangeSettingView } from '../setting/setting-hooks';

export const ProfileView = (): React.ReactElement => {
  const { currentView, handleChangeMenu } = useHandleChangeMenuView();
  const { handleChangeSetting } = useHandleChangeSettingView();
  const { user } = useAuthContext();
  const [callAction, loading] = useCallAction(updateProfileMe, {
    onCompleted(resp) {
      snackbar.success(resp.message);
    },
    onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type
      });
    }
  });
  const { handleSubmit, control, formState, reset } = useFormProfile();
  
  const handleBackProfile = (): void => {
    if (currentView === MenuCurrentViewEnum.SETTING ) {
      handleChangeSetting(SettingCurrentViewEnum.MAIN, false);
    } else {
      handleChangeMenu(MenuCurrentViewEnum.PROFILE, false);
    }
  };

  const handleSubmitProfile = handleSubmit(
    async (dataForm) => {
      callAction(dataForm);
    },
    async (err)=>  {
      console.log(err);
    }
  );
  
  useFetchAction(fetchProfileMe, [user.idUser], {
    onCompleted(value) {
      reset({
        name: value.cName,
        info: value.cInfo,
        idProfile: value.idProfile
      });
    },
  });

  return (
    <Box padding="10px" height={1}>
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <IconButton color="default" onClick={handleBackProfile}>
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
          <Grid size={12}>
            <Controller 
              name='name'
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Controls.InputComponent
                  variant="primary"
                  label="Tu Nombre"
                  error={!!formState.errors.name?.message}
                  helperText={formState.errors.name?.message}
                  onChange={onChange}
                  value={value}
                  fullWidth
                  {...rest}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller 
              name='info'
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Controls.InputComponent
                  variant="primary" 
                  label="Info" 
                  fullWidth 
                  error={!!formState.errors.info?.message}
                  helperText={formState.errors.info?.message}
                  onChange={onChange}
                  value={value}
                  {...rest}
                />
              )}
            />
          </Grid>
          <Grid size={12} display="flex" justifyContent="center">
            <Button 
              variant="contained" 
              color="info"
              loading={loading}
              onClick={handleSubmitProfile}
            >
              Editar
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};