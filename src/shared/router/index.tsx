import { LoginView } from '@src/modules/auth/LoginView';
import { RegisterView } from '@src/modules/auth/RegisterView';
import { DashboardView } from '@src/modules/dashboard/DashboardView';
import { FC, PropsWithChildren } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, styled } from '@mui/material';
import useAuthContext from '../hook/useAuthContext';

const mainMessaging = {
  height: '100vh'
};

const mainAuth = {
  minHeight: '100vh',
  padding: '50px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Main = styled(Box)(({ isMessaging }: { isMessaging: boolean }) => ({
  ...(isMessaging ? mainMessaging : mainAuth)
}));

export const IndexRouter: FC<PropsWithChildren> = () => {
  const pathname = window.location.pathname;
  const { isAuth } = useAuthContext();
  
  return (
    <Main
      isMessaging={(isAuth || pathname === '/messaging') ? true : false}
    >
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/messaging" element={<DashboardView />} />
        <Route path="/perfil" element={<>Auth</>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </Main>
  );
};