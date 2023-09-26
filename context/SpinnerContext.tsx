import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SpinnerContextType {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
}

export const SpinnerContext = createContext<SpinnerContextType | undefined>(undefined);

interface SpinnerProviderProps {
  children: ReactNode;
}

export function SpinnerProvider({ children }: SpinnerProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const startLoading = () => {
    console.log('>>: start')
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <SpinnerContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
}
