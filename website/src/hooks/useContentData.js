import { useQuery } from '@tanstack/react-query';
import { apiService } from '../api/apiService';

/**
 * Custom hook for fetching page content with caching
 * 
 * @param {string} pageName - Name of the page to fetch content for
 * @returns {Object} { data, loading, error, refetch }
 */
export const useContentData = (pageName) => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['content', pageName],
        queryFn: () => apiService.getPageContent(pageName),
        staleTime: 1000 * 60 * 60, // 1 Hour
        gcTime: 1000 * 60 * 60 * 24, // 24 Hours
    });

    return {
        data,
        loading: isLoading,
        error: error ? (error.message || 'Failed to load content') : null,
        refetch
    };
};

/**
 * Custom hook for fetching common content (Header, Footer, etc.)
 * 
 * @returns {Object} { data, loading, error, refetch }
 */
export const useCommonData = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['content', 'common'],
        queryFn: () => apiService.getCommonContent(),
        staleTime: 1000 * 60 * 60, // 1 Hour
        gcTime: 1000 * 60 * 60 * 24, // 24 Hours
    });

    return {
        data,
        loading: isLoading,
        error: error ? (error.message || 'Failed to load common content') : null,
        refetch
    };
};
