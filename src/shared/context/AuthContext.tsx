import { useCallAction, useEvent } from '@cobuildlab/react-simple-state';
import { fetchAccessAuth } from '@src/modules/auth/auth-actions';
import { AuthContextProps } from '@src/modules/auth/auth-types';
import { createContext, FC, PropsWithChildren, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_TOKEN_AUTH } from '../constant/envs';
import { accessAuthEvent } from '@src/modules/auth/auth-events';

export const AuthContext = createContext<AuthContextProps>({
  access: () => {},
  logout: () => {},
  user: {
    username: '',
    email: '',
    idUser: 0,
    name: '',
    pathImage: '',
    info: '',
  },
  isAuth: false,
});

export const AuthContextProvider: FC<PropsWithChildren> = ({
  children
}) => {
  const navigate = useNavigate();
  const user = useEvent(accessAuthEvent);
  const [isAuth, setIsAuth] = useState(false);
  
  const logout = useCallback((): void => {
    setIsAuth(false);
    sessionStorage.removeItem(APP_TOKEN_AUTH);
    navigate('/');
  }, [navigate]);

  const [callAccess] = useCallAction(fetchAccessAuth, {
    onCompleted() {
      setIsAuth(true);
      navigate('/messaging');
    },
    onError() {
      setIsAuth(false);
      logout();
    }
  });
  
  const value = useMemo(() => ({
    access: (() => callAccess)(),
    logout: (() => logout)(),
    isAuth: isAuth,
    user: {
      idUser: user?.dataObject.idUser,
      username: user?.dataObject.username,
      info: user?.dataObject.info,
      email: user?.dataObject.email,
      name: user?.dataObject.name,
      pathImage: user?.dataObject.pathImage,
    }
  }), [callAccess, logout, user, isAuth]);
  
  useEffect(() => {
    callAccess();
    return () => {};
  }, [callAccess]);
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};