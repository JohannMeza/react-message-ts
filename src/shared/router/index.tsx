import { LoginView } from '@src/modules/auth/LoginView';
import { RegisterView } from '@src/modules/auth/RegisterView';
import { MessagingView } from '@src/modules/dashboard/MessagingView';
import { FC, PropsWithChildren } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const IndexRouter: FC<PropsWithChildren> = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/register" element={<RegisterView />} />
      <Route path="/messaging" element={<MessagingView />} />
      <Route path="/perfil" element={<>Auth</>} />
      <Route path="*" element={<>404</>} />
    </Routes>
  </Router>
);
