import { FC, PropsWithChildren } from 'react';
import { Stack, IconButton, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { PrivacityCurrentViewEnum } from '../privacity-types';
import { useHandleChangePrivacityView } from '../privacity-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export const GroupView: FC<PropsWithChildren> = () => {
  const { handleChangePrivacity } = useHandleChangePrivacityView();

  return (
    <>
      <Stack flexDirection="row" alignItems="center" gap={2} padding="10px">
        <IconButton 
          onClick={() => handleChangePrivacity(PrivacityCurrentViewEnum.MAIN, false)}
          color='default'
        >
          <NavigateBeforeIcon />
        </IconButton> 
        <Typography fontSize={20} fontWeight={700} color="grey.700">Grupos</Typography>
      </Stack>
      <Stack paddingX="20px" paddingY="10px" gap={1}>
        <Typography fontSize={16} fontWeight={600}>Quien puede añadirme a los grupos</Typography>
        <FormControl>
          <RadioGroup
            defaultValue="todos"
            name="information"
          >
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="mis_contactos" control={<Radio />} label="Mis contactos" />
            <FormControlLabel value="mis_contactos_excepto" control={<Radio />} label="Mis contactos, excepto" />
            <FormControlLabel value="nadie" control={<Radio />} label="Nadie" />
          </RadioGroup>
        </FormControl>
        <Typography fontSize={14} color="grey.700">Los admin. que no te puedan añadir a un grupo tendrán la opción de invitarte por mensaje privado.</Typography>
        <Typography fontSize={14} color="grey.700">No se aplica esta configuración a los grupos de avisos de las comunidades, ya que, si te añaden a una comunidad, siempre se te añadirá a su grupo de avisos.</Typography>
      </Stack>
    </>
  );
};