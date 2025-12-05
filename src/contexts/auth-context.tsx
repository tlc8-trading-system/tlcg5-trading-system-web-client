import { createContext } from 'react';
import type { User, userRoles } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: userRoles) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export default AuthContext;
