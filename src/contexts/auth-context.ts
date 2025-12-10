import { createContext } from 'react';
import type { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (user?: User) => Promise<void>; 
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  isLoading: boolean;
  checkAuth: () => Promise<void>; 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;