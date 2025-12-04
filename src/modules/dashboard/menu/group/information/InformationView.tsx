import { FC, PropsWithChildren, useRef, useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useHandleChangeGroupView } from '../group-hooks';
import { GroupCurrentViewEnum } from '../group-types';
import { Controls } from '@src/shared/component/Controls';
import { MenuCurrentViewEnum } from '../../menu-types';
import { useHandleChangeMenuView } from '../../menu-hooks';
import { Controller } from 'react-hook-form';
import { useFormInfomationGroup } from './information-hooks';
import { AvatarUpload } from './information-styles';
import { useCallAction, useEvent } from '@cobuildlab/react-simple-state';
import { createGroupAction, uploadImageNewGroup } from './information-actions';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { memberContactSelectEvent } from '../member/member-events';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';

export const InformationView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const { handleChangeGroup } = useHandleChangeGroupView();
  const { handleChangeMenu } = useHandleChangeMenuView();
  const { handleSubmit, control, formState, setValue, watch, reset } = useFormInfomationGroup();
  const { image } = watch();
  const dataMemberSelect = useEvent(memberContactSelectEvent);
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();

  const [callUploadImage] = useCallAction(uploadImageNewGroup, {
    onCompleted() {},
    onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type
      });
    }
  });

  const [callCreateGroup] = useCallAction(createGroupAction, {
    onCompleted(resp) {
      if (file) callUploadImage(file, resp.dataObject.idGroup);
      snackbar.success(resp.message || '');
      memberContactSelectEvent.dispatch([]);
      reset();
    },
    onError(err) {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type
      });
    }
  });
  
  const handleSubmitNewGroup = handleSubmit(
    async (dataForm) => {
      callCreateGroup({
        cDescription: dataForm.info || '',
        cNameGroup: dataForm.name,
        idUserAdmin: user.idUser,
        userIds: Array.from(dataMemberSelect, (el) => el.idUser)
      });
    },
    async (err)=>  {
      console.error(err);
    }
  );

  const handleSubmitGroup = (): void => {
    handleChangeGroup(GroupCurrentViewEnum.MEMBER, true);
    handleChangeMenu(MenuCurrentViewEnum.NEW_GROUP, false);
    handleSubmitNewGroup();
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
          <Avatar sx={{ width: 150, height: 150 }} src={image} />
          <AvatarUpload onClick={() => {
            if (!fileRef.current) return;
            fileRef.current.click();
          }}>Subir imagen</AvatarUpload>
          <input type="file" accept="image/png, image/jpeg" ref={fileRef} style={{ display: 'none' }} onChange={() => {
            if (!fileRef.current) return;
            const files = Array.from(fileRef.current.files || []);
            const [fileUpload] = files;
            const preview = URL.createObjectURL(fileUpload);
            setFile(files[0]);
            setValue('image', preview);
          }} />
        </Stack>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Controller 
              name='name'
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <Controls.InputComponent 
                  variant="primary" 
                  label="Nombre del Grupo"
                  value={value}
                  onChange={onChange}
                  error={!!formState.errors.name?.message}
                  helperText={formState.errors.name?.message}
                  required
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
                  value={value}
                  onChange={onChange}
                  error={!!formState.errors.name?.message}
                  helperText={formState.errors.name?.message}
                  {...rest}
                />
              )}
            /> 
          </Grid>
          <Grid size={12} display="flex" justifyContent="center">
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
