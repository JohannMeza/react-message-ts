import { FC, PropsWithChildren } from 'react';
import {
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useHandleChangeGroupView } from '../group-hooks';
import { GroupCurrentViewEnum } from '../group-types';
import { Controls } from '@src/shared/component/Controls';
import { MenuCurrentViewEnum } from '../../menu-types';
import { useHandleChangeMenuView } from '../../menu-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const InformationView: FC<PropsWithChildren> = () => {
  const { handleChangeGroup } = useHandleChangeGroupView();
  const { handleChangeMenu } = useHandleChangeMenuView();
  const handleSubmitGroup = (): void => {
    handleChangeGroup(GroupCurrentViewEnum.MEMBER, true);
    handleChangeMenu(MenuCurrentViewEnum.NEW_GROUP, false);
  };

  return (
    <Box
      display="grid"
      height={1}
      gridTemplateRows="auto auto 1fr"
      gap={2}
      padding="10px"
    >
      <Stack flexDirection="row" alignItems="center" gap={2}>
        <IconButton
          onClick={() => handleChangeGroup(GroupCurrentViewEnum.MEMBER, false)}
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={18} fontWeight={700} color="grey.700">
          Nuevo Grupo
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
            <Button
              variant="contained"
              color="info"
              onClick={handleSubmitGroup}
            >
              Crear grupo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
