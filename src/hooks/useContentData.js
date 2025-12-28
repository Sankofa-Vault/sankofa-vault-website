import { useState, useEffect } from 'react';
import { apiService } from '../api/apiService';

/**
 * Custom hook for fetching page content
 * Provides loading, error, and data states
 * 
 * @param {string} pageName - Name of the page to fetch content for
 * @returns {Object} { data, loading, error, refetch }
 * 
 * @example
 * const { data, loading, error } = useContentData('home');
 * 
 * if (loading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage error={error} />;
 * return <div>{data.hero.title}</div>;
 */
export const useContentData = (pageName) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const content = await apiService.getPageContent(pageName);
            setData(content);
        } catch (err) {
            console.error(`Error fetching content for ${pageName}:`, err);
            setError(err.message || 'Failed to load content');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [pageName]);

    return {
        data,
        loading,
        error,
        refetch: fetchData // Allow manual refetch if needed
    };
};

/**
 * Custom hook for fetching common content (Header, Footer, etc.)
 * Uses the same pattern as useContentData
 * 
 * @returns {Object} { data, loading, error, refetch }
 */
export const useCommonData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const content = await apiService.getCommonContent();
            setData(content);
        } catch (err) {
            console.error('Error fetching common content:', err);
            setError(err.message || 'Failed to load common content');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        loading,
        error,
        refetch: fetchData
    };
};
