import { useContext } from 'react';
// import { AuthProps } from '../types/type';
import { AuthContext } from '../context/AuthContext';
import { AuthContextProps } from '@src/modules/auth/auth-types';

/**
 * Hooks to handle auth usuario.
 * @returns Datos de sesion.
 */
export default function useAuthContext(): AuthContextProps {
  return useContext(AuthContext);
}
