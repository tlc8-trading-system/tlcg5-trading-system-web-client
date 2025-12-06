import { createContext } from 'react';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (user: User, accessToken: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;