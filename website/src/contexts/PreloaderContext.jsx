/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useCommonData } from '../hooks/useContentData';
import { apiService } from '../api/apiService';

const PreloaderContext = createContext(null);

// List of all pages to prefetch
const PAGE_NAMES = ['home', 'about', 'contact', 'mission', 'portfolio', 'service', 'team'];

export const PreloaderProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const { data: commonData, loading: commonLoading, error: commonError } = useCommonData();

  // Prefetch all page content when common data loads
  useEffect(() => {
    if (commonData) {
      // Start prefetching after common data loads
      PAGE_NAMES.forEach(pageName => {
        queryClient.prefetchQuery({
          queryKey: ['content', pageName],
          queryFn: () => apiService.getPageContent(pageName),
          staleTime: 1000 * 60 * 60, // 1 hour (matches existing config)
        });
      });
    }
  }, [commonData, queryClient]);

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
