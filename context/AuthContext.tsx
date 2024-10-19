import { userData } from '@/data/staticData';
import { User } from '@/types';
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  user:User |null;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = !!user;


 
   // دالة تسجيل الدخول
   const login = (email: string, password: string) => {
    // طباعة القيم المدخلة للتحقق
    console.log('Email:', email.trim());
    console.log('Password:', password.trim());

    // البحث عن المستخدم
    const foundUser = userData.find(
      (u) => u.email === email.trim() && u.password === password.trim()
    );

    if (foundUser) {
      setUser(foundUser);
      console.log("User Found:", foundUser);
    } else {
      console.log('User Not Found');
      alert('Invalid email or password');
    }
  };
    // دالة تسجيل الخروج
    const logout = () => {
      setUser(null);
    };

  return (
    <AuthContext.Provider value={{user,isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
