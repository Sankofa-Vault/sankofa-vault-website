/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from 'react';
import { useCommonData } from '../hooks/useContentData';

const PreloaderContext = createContext(null);

export const PreloaderProvider = ({ children }) => {
  const { data: commonData, loading: commonLoading, error: commonError } = useCommonData();

  // isAppLoading is true while common data is loading
  // Once data loads (success or error), isAppLoading becomes false
  // Error is treated as "done loading" to prevent infinite loader
  const isAppLoading = commonLoading && !commonError;

  const value = {
    isAppLoading,
    commonData,
    commonError,
  };

  return (
    <PreloaderContext.Provider value={value}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error('usePreloader must be used within PreloaderProvider');
  }
  return context;
};
