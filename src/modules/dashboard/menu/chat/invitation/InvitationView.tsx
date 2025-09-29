import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { Controls } from '@src/shared/component/Controls';
import { FC, PropsWithChildren } from 'react';
import { getDateDaysOrMonths } from '../../../dashboard-functions';
import { useCallAction, useFetchAction } from '@cobuildlab/react-simple-state';
import { acceptInvitationAction, listInvitationsAction, rejectInvitationAction } from './invitation-actions';
import useAuthContext from '@src/shared/hook/useAuthContext';
import { LoaderAwait } from '@src/shared/component/ui/loader/Loader';
import { snackbar } from '@src/shared/component/ui/snackbar/Snackbar';

export const RequestView: FC<PropsWithChildren> = () => {
  const { user } = useAuthContext();
  const [invitations, loading, { refetch }] = useFetchAction(listInvitationsAction, [user.idUser]);
  const [callAccept] = useCallAction(acceptInvitationAction, {
    onCompleted: (resp) => {
      snackbar.success(resp.message);
      refetch();
    },
    onError: (err) => {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type,
      });
    }
  });

  const [callReject] = useCallAction(rejectInvitationAction, {
    onCompleted: (resp) => {
      snackbar.success(resp.message);
      refetch();
    },
    onError: (err) => {
      snackbar.any({
        message: err.text,
        title: err.title,
        type: err.type,
      });
    }
  });
  
  return (
    <Box display="grid" gridTemplateRows="auto 1fr" minHeight={1}>
      <Box paddingX={2} paddingY={2}>
        <Controls.InputComponent
          variant="primary"
          placeholder="Buscar solicitudes..."
        />
      </Box>
      <LoaderAwait open={loading} fullPage={true} height={'250px'} style={{ overflow: 'auto' }}>
        <Stack height={1}>
          {invitations.map((el, index) => (
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
                  <Typography fontSize={12} color="grey.700">
                    {getDateDaysOrMonths(el.createdDate)}
                  </Typography>
                </Stack>
                <Stack flexDirection="row" gap={1}>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error"
                    loading={loading}
                    onClick={() => callReject(el.idRequest, user.idUser)}
                  >
                    Rechazar
                  </Button>
                  <Button 
                    size="small" 
                    variant="contained" 
                    loading={loading}
                    color="info"
                    onClick={() => callAccept(el.idRequest, user.idUser)}
                  >
                    Aceptar
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          ))}

          {
            invitations.length === 0 &&
            <Typography margin={'auto'}>Sin resultados</Typography>
          }
        </Stack>
      </LoaderAwait>
    </Box>
  );  
};