import { FC, PropsWithChildren } from 'react';
import {
  IconButton,
  Typography,
  Stack,
  Chip,
  Avatar,
  Box,
  Button,
} from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { GroupCurrentViewEnum } from '../group-types';
import { useHandleChangeGroupView } from '../group-hooks';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useHandleChangeMenuView } from '../../menu-hooks';
import { MenuCurrentViewEnum } from '../../menu-types';
import { useEvent, useFetchAction } from '@cobuildlab/react-simple-state';
import { ListContactsAddedGroupAction } from './member-actions';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { memberContactSelectEvent } from './member-events';

export const MemberView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const { handleChangeMenu } = useHandleChangeMenuView();
  const { handleChangeGroup } = useHandleChangeGroupView();
  const contactsSelect = useEvent(memberContactSelectEvent);
  const [data] = useFetchAction(ListContactsAddedGroupAction, [user.idUser], {
    onCompleted() {}
  });

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
          onClick={() => handleChangeMenu(MenuCurrentViewEnum.NEW_GROUP, false)}
          color="default"
        >
          <NavigateBeforeIcon />
        </IconButton>
        <Typography fontSize={18} fontWeight={700} color="grey.700">
          Añade integrantes del grupo
        </Typography>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="flex-start"
        gap={1}
        flexWrap="wrap"
        maxHeight={120}
        overflow="auto"
      >
        {contactsSelect?.map((el, index) => (
          <Chip
            key={index}
            avatar={<Avatar alt={el.name} src={el.pathImage} />}
            label={el.name}
            onDelete={() => {
              const dataFilter = contactsSelect.filter((it) => it.idUser !== el.idUser);
              memberContactSelectEvent.dispatch(dataFilter);
            }}
          />
        ))}
      </Stack>
      <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1} gap={2}>
        <Controls.InputComponent
          variant="primary"
          placeholder="Buscar Contactos..."
        />
        <Stack overflow="auto">
          {data?.map((el, index) => (
            <Stack
              sx={{
                '&:hover': { backgroundColor: 'tertiary.main' },
                cursor: 'pointer',
              }}
              flexDirection="row"
              alignItems="center"
              paddingX={2}
              paddingY={1}
              gap={2}
              key={index}
              onClick={() => {
                const find = contactsSelect.find((it) => it.idUser === el.idUser);
                if (!find) {
                  memberContactSelectEvent.dispatch([
                    ...contactsSelect,
                    {
                      idUser: el.idUser,
                      name: el.name,
                      pathImage: el.pathImage
                    }
                  ]);
                }
              }}
            >
              <Avatar src={el.pathImage ?? ''} />
              <Stack gap={0.3} width={1}>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={1}
                >
                  <Typography fontSize={16} fontWeight={700} color="grey.700">
                    {el.name}
                  </Typography>
                </Stack>
                <Typography fontSize={15}>{el.info}</Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Button
        variant="contained"
        color="info"
        onClick={() =>
          handleChangeGroup(GroupCurrentViewEnum.INFORMATION, false)
        }
      >
        Siguiente...
      </Button>
    </Box>
  );
};
