import { Box, IconButton, InputAdornment, Paper, Typography } from '@mui/material';
import { FC, PropsWithChildren, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controls } from '@src/shared/component/Controls';
import { useFormRegister } from './auth-hooks';
import { Controller } from 'react-hook-form';
import { useCallAction } from '@cobuildlab/react-simple-state';
import { LoadingButton as Button } from '@mui/lab';
import { registerUserAction } from './auth-actions';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';
import Grid from '@mui/material/Grid2';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
} from '@mui/icons-material';
import { IsValidPassword } from '@src/shared/component/ui/components/IsValidPassword';
import ImageLogotipo from '@src/assets/logo.svg';

export const RegisterView: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();
  const submitFormLogin = (): void => navigate('/messaging');
  const { handleSubmit, control, formState, watch } = useFormRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);
  const [callRegisterAction, load] = useCallAction(registerUserAction, {
    onCompleted(resp) {
      snackbar.success(resp.message);
      navigate('/');
    },
    onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type,
      });
    }
  });

  const handleSubmitRegister = handleSubmit(
    async (dataForm) => {
      if (isValidForm) callRegisterAction(dataForm);
    },
  );

  const PasswordVisibility = (): React.ReactElement => (
    <InputAdornment position="end">
      <IconButton 
        size="small" 
        onClick={() => setShowPassword((value) => !value)}
      >
        { showPassword 
          ? <VisibilityIcon color='primary' /> 
          : <VisibilityOffIcon color='primary' /> 
        }
      </IconButton>
    </InputAdornment>
  );

  const {
    password,
    passwordRepeat,
  } = watch();

  return (
    <Box height={1} display="flex" justifyContent="center" alignItems="center">
      <LoaderAwait timer={1} centered minHeight="40vh">
        <Paper
          sx={{
            backgroundColor: 'background_colors_opacity.50',
            padding: 5,
            maxWidth: '450px',
          }}
        >
          <Box display="flex" justifyContent="center">
            <img src={ImageLogotipo} alt="Logotipo pipedrive" />
          </Box>
          <Grid container spacing={2} component="form" onSubmit={submitFormLogin}>
            <Grid size={12}>
              <Controller 
                name='email'
                control={control}
                render={({ field: { onChange, value, ...rest } }) => (
                  <Controls.InputComponent 
                    variant="rounded" 
                    label="Email" 
                    value={value}
                    onChange={onChange}
                    error={!!formState.errors.email?.message}
                    helperText={formState.errors.email?.message}
                    required
                    {...rest}
                  />
                )}
              />  
            </Grid>
            <Grid size={12}>
              <Controller 
                name='username'
                control={control}
                render={({ field: { onChange, value, ...rest } }) => (
                  <Controls.InputComponent 
                    variant="rounded" 
                    label="Nombre de usuario" 
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
                    type={ showPassword ? 'text' : 'password' }
                    variant="rounded" 
                    label="Contraseña" 
                    value={value}
                    onChange={onChange}
                    error={!!formState.errors.password?.message}
                    helperText={formState.errors.password?.message}
                    endAdornment={<PasswordVisibility />}
                    required
                    {...rest}
                  />
                )}
              />
            </Grid>
            <Grid size={12}>
              <Controller 
                name='passwordRepeat'
                control={control}
                render={({ field: { onChange, value, ...rest } }) => (
                  <Controls.InputComponent 
                    type={ showPassword ? 'text' : 'password' }
                    variant="rounded" 
                    label="Repite la Contraseña" 
                    value={value}
                    onChange={onChange}
                    endAdornment={<PasswordVisibility />}
                    required
                    {...rest}
                  />
                )}
              />
            </Grid>
            <Grid size={12}>
              <IsValidPassword 
                password={password}
                passwordRepeat={passwordRepeat}
                watchValidator={(isValid) => setIsValidForm(isValid)}
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
                  loading={load}
                  onClick={handleSubmitRegister}
                >
                  Registrarse
                </Button>
                <Typography
                  variant="body2"
                  component="span"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  ¿Ya tienes una cuenta? <br />
                  <Link to="/login" style={{ textDecoration: 'underline' }}>
                    Inicia Sesión aquí
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </LoaderAwait>
    </Box>
  );
};
