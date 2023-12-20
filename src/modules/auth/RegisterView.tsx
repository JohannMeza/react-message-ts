import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import { FC, PropsWithChildren } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controls } from '@src/shared/component/Controls';
import ImageLogotipo from '@src/assets/logo.svg';

export const RegisterView: FC<PropsWithChildren> = () => {
  const navigate = useNavigate();

  const submitFormLogin = (): void => navigate('/messaging');

  return (
    <Box height={1} display="flex" justifyContent="center" alignItems="center">
      <Paper sx={{ backgroundColor: 'background_colors_opacity.50', padding: 5, maxWidth: '450px' }}>
        <Box display="flex" justifyContent="center">
          <img src={ImageLogotipo} alt='Logotipo pipedrive' />
        </Box>
        <Grid container spacing={3} component="form" onSubmit={submitFormLogin}>
          <Grid item xs={12}>
            <Controls.InputComponent variant='rounded' label='Email' />
          </Grid>
          <Grid item xs={12}>
            <Controls.InputComponent variant='rounded' label='Contraseña' />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
              <Button type="submit" variant="outlined">Registrarse</Button>
              <Typography variant="body2" component="span" display="flex" flexDirection="column" alignItems="center">
                ¿Ya tienes una cuenta? <br />
                <Link to="/login" style={{ textDecoration: 'underline' }}>Inicia Sesión aquí</Link>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};