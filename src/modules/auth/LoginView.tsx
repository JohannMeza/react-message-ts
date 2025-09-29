import { Box, Paper, Typography, Button } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { Controls } from '@src/shared/component/Controls';
import { useFormSignIn } from './auth-hooks';
import { Controller } from 'react-hook-form';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { signInAction } from './auth-actions';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { APP_TOKEN_AUTH } from '@src/shared/constant/envs';
import Grid from '@mui/material/Grid2';
import ImageLogotipo from '@src/assets/logo.svg';
import useAuthContext from '@src/shared/hook/useAuthContext';

export const LoginView: FC<PropsWithChildren> = () => {
  const { access } = useAuthContext();

  const { handleSubmit, control, formState }  = useFormSignIn();
  const [callSignIn, loading] = useCallAction(signInAction, {
    async onCompleted(res) {
      snackbar.success(res?.message || '');
      sessionStorage.setItem(APP_TOKEN_AUTH, `Bearer ${res.dataObject.token}`);
      access();
    },
    async onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title || 'Error',
        type: err.type || 'error'
      });
    },
  });

  const submitFormLogin = handleSubmit(
    async (dataForm) => {
      callSignIn(dataForm);
    }
  );

  return (
    <Box height={1} display="flex" justifyContent="center" alignItems="center">
      <Paper
        sx={{
          backgroundColor: 'background_colors_opacity.50',
          padding: 5,
          maxWidth: '450px',
          height: { xs: '100%', sm: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box display="flex" justifyContent="center">
          <img src={ImageLogotipo} alt="Logotipo pipedrive" />
        </Box>
        <Grid container spacing={3} component="form" onSubmit={submitFormLogin}>
          <Grid size={12}>
            <Controller 
              name='username'
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Controls.InputComponent 
                  variant="rounded" 
                  label="Usuario" 
                  value={value}
                  onChange={onChange}
                  error={!!formState.errors.username?.message}
                  helperText={formState.errors.username?.message}
                  required
                  {...rest}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Controller 
              name='password'
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Controls.InputComponent 
                  type='password'
                  variant="rounded"
                  label="Contraseña" 
                  value={value}
                  onChange={onChange}
                  error={!!formState.errors.password?.message}
                  helperText={formState.errors.password?.message}
                  required
                  {...rest}
                />
              )}
            />
          </Grid>
          <Grid size={12}>
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              gap={1}
            >
              <Button
                type="submit" 
                variant="outlined" 
                loading={loading}
                onClick={submitFormLogin}
              >
                Iniciar Sesión
              </Button>
              <Typography
                variant="body2"
                component="span"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                ¿No tienes una cuenta? <br />
                <Link to="/register" style={{ textDecoration: 'underline' }}>
                  Registrate aquí
                </Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
