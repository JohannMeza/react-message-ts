import { FC, PropsWithChildren } from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
  Switch,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useHandleActiveProfileUser } from '../../messaging-hooks';
import {
  ActionsMessagingEnum,
  ActiveProfileUserEnum,
} from '../../messaging-types';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BlockIcon from '@mui/icons-material/Block';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHandleChangeProfileUserView } from '../profile-user-hooks';
import { ProfileUserCurrentView } from '../profile-user-types';
import { ListSettingBox } from '@src/modules/dashboard/component/ContainedBoxView';
import { useHandleChangeModalChatType } from '../../component/modals/chat/chat-hooks';
import { ModalsChatEnum } from '../../component/modals/chat/chat-types';
import { useEvent } from '@cobuildlab/react-simple-state';
import { fetchProfileMessagingEvent } from '../profile-user-events';

export const MainView: FC<PropsWithChildren> = () => {
  const { handleChangeActiveProfileUser } = useHandleActiveProfileUser();
  const { handleChangeProfileUser } = useHandleChangeProfileUserView();
  const { handleChangeModalChat } = useHandleChangeModalChatType();
  const profileMessaging = useEvent(fetchProfileMessagingEvent);
  const theme = useTheme();
  console.log(profileMessaging);
  const handleActionsProfile = (action: ActionsMessagingEnum): void => {
    switch (action) {
      case ActionsMessagingEnum.CLEAR_CHAT:
        handleChangeModalChat(ModalsChatEnum.CLEAR_CHAT);
        break;
      case ActionsMessagingEnum.DELETE_CHAT:
        handleChangeModalChat(ModalsChatEnum.DELETE_CHAT);
        break;
      case ActionsMessagingEnum.LOCKED_CHAT:
        handleChangeModalChat(ModalsChatEnum.LOCKED_CHAT);
        break;
      case ActionsMessagingEnum.REPORT_CHAT:
        handleChangeModalChat(ModalsChatEnum.REPORT_CHAT);
        break;
      default:
        break;
    }
  };

  return (
    <Stack
      alignItems="flex-start"
      sx={{ borderLeft: `1px solid ${theme.palette.grey[300]}` }}
      width={1}
      height={1}
      paddingY={2.7}
      gap={2}
    >
      <Box paddingX={1} width={1}>
        <IconButton
          color="default"
          onClick={() =>
            handleChangeActiveProfileUser(ActiveProfileUserEnum.NONE)
          }
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack width={1} height={1} overflow="auto" gap={2}>
        <Stack paddingX={3} width={1} gap={2}>
          <Stack alignItems="center" width={1}>
            <Avatar sx={{ width: 150, height: 150 }} src={profileMessaging?.pathImage} />
            <Typography fontSize={20} fontWeight={700}>
              {
                profileMessaging?.name
              }
            </Typography>
          </Stack>

          <Box>
            <Typography fontSize={16} fontWeight={500}>
              Información
            </Typography>
            <Typography fontSize={14}>{ profileMessaging?.info }</Typography>
          </Box>

          <Box sx={{ textWrap: 'nowrap' }}>
            <Typography
              fontSize={16}
              fontWeight={500}
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                handleChangeProfileUser(ProfileUserCurrentView.FILE, false)
              }
            >
              Archivos, enlaces y documentos
            </Typography>
            <Grid container spacing={1}>
              {
                profileMessaging?.images?.length ? profileMessaging?.images?.map(() => (
                  <Grid size={4}>
                    <Box
                      bgcolor="primary.main"
                      height="80px"
                      flexShrink={1}
                      padding={1}
                      borderRadius="5px"
                      sx={{ cursor: 'pointer' }}
                      onClick={() =>
                        handleChangeProfileUser(ProfileUserCurrentView.FILE, false)
                      }
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFRNTDL5dojlCM6oZD3HJHWOtzmWvnlQgq8fwMtaca&s"
                        alt="Nuestro Planeta"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '5px',
                        }}
                      />
                    </Box>
                  </Grid>
                )) : <Typography margin={'auto'} marginTop={2}>Aún no se han compartido imágenes.</Typography>
              }
            </Grid>
          </Box>
        </Stack>

        {
          profileMessaging?.typeMessaging === 'CONTACT' && 
          <Box width={1}>
            {
              profileMessaging?.commonGroups?.length &&
              <Typography fontSize={16} fontWeight={500} paddingX={3}>
                { profileMessaging?.commonGroups?.length } grupos en común
              </Typography>
            }

            {profileMessaging?.commonGroups?.map((el, index) => (
              <Stack
                sx={{
                  '&:hover': { backgroundColor: 'background_colors_opacity.60' },
                  cursor: 'pointer',
                }}
                flexDirection="row"
                alignItems="center"
                paddingX={3}
                paddingY={1}
                gap={2}
                key={index}
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
          </Box>
        }

        {
          profileMessaging?.typeMessaging === 'GROUP' && 
          <Box width={1}>
            {
              profileMessaging?.members?.length &&
              <Typography fontSize={16} fontWeight={500} paddingX={3}>
                Integrantes
              </Typography>
            }

            {profileMessaging?.members?.map((el, index) => (
              <Stack
                sx={{
                  '&:hover': { backgroundColor: 'background_colors_opacity.60' },
                  cursor: 'pointer',
                }}
                flexDirection="row"
                alignItems="center"
                paddingX={3}
                paddingY={1}
                gap={2}
                key={index}
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
          </Box>
        }

        <Box width={1}>
          <ListSettingBox
            onClick={() =>
              handleChangeProfileUser(
                ProfileUserCurrentView.DIRECT_MESSAGE,
                false,
              )
            }
          >
            <Stack flexDirection="row" gap={2}>
              <StarIcon color="action" />
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Mensajes destacados
              </Typography>
            </Stack>
            <ChevronRightIcon />
          </ListSettingBox>
          <ListSettingBox>
            <Stack flexDirection="row" gap={2}>
              <NotificationsActiveIcon color="action" />
              <Typography fontSize={16} fontWeight={500} color="grey.700">
                Silenciar notificaciones
              </Typography>
            </Stack>
            <Switch defaultChecked />
          </ListSettingBox>
          
          {
            profileMessaging?.typeMessaging === 'CONTACT' && 
            <>
              <ListSettingBox
                onClick={() =>
                  handleActionsProfile(ActionsMessagingEnum.LOCKED_CHAT)
                }
              >
                <Stack flexDirection="row" gap={2}>
                  <BlockIcon color="error" />
                  <Typography fontSize={16} fontWeight={500} color="red.main">
                    Bloquear a { profileMessaging?.name }
                  </Typography>
                </Stack>
              </ListSettingBox>
              <ListSettingBox
                onClick={() =>
                  handleActionsProfile(ActionsMessagingEnum.REPORT_CHAT)
                }
              >
                <Stack flexDirection="row" gap={2}>
                  <ThumbDownIcon color="error" />
                  <Typography fontSize={16} fontWeight={500} color="red.main">
                    Reportar a { profileMessaging?.name }
                  </Typography>
                </Stack>
              </ListSettingBox>
              <ListSettingBox
                onClick={() =>
                  handleActionsProfile(ActionsMessagingEnum.DELETE_CHAT)
                }
              >
                <Stack flexDirection="row" gap={2}>
                  <DeleteIcon color="error" />
                  <Typography fontSize={16} fontWeight={500} color="red.main">
                    Eliminar contacto
                  </Typography>
                </Stack>
              </ListSettingBox>
            </>
          }

          {
            profileMessaging?.typeMessaging === 'GROUP' && 
            <>
              <ListSettingBox
                onClick={() =>
                  handleActionsProfile(ActionsMessagingEnum.REPORT_CHAT)
                }
              >
                <Stack flexDirection="row" gap={2}>
                  <ThumbDownIcon color="error" />
                  <Typography fontSize={16} fontWeight={500} color="red.main">
                    Reportar a grupo
                  </Typography>
                </Stack>
              </ListSettingBox>
              <ListSettingBox
                onClick={() =>
                  handleActionsProfile(ActionsMessagingEnum.DELETE_CHAT)
                }
              >
                <Stack flexDirection="row" gap={2}>
                  <DeleteIcon color="error" />
                  <Typography fontSize={16} fontWeight={500} color="red.main">
                    Salir del grupo
                  </Typography>
                </Stack>
              </ListSettingBox>
            </>
          }

        </Box>
      </Stack>
    </Stack>
  );
};
