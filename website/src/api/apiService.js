/**
 * API Service Layer
 * Central service for fetching all content data
 * Supports both mock data (development) and real CMS (production)
 */

const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK !== 'false';

// Fallback logic: If we're in production (USE_MOCK_DATA=false) and VITE_API_URL is not set,
// use the Koyeb API URL instead of relative '/api'
const API_BASE_URL = import.meta.env.VITE_API_URL ||
    (USE_MOCK_DATA ? '/api' : 'https://crude-roze-sankofa-vault-dd15f85c.koyeb.app/api');

// Debug logging - remove after fixing
console.log('[API Service] Configuration:', {
    API_BASE_URL,
    USE_MOCK_DATA,
    VITE_API_URL: import.meta.env.VITE_API_URL,
    VITE_USE_MOCK: import.meta.env.VITE_USE_MOCK
});

/**
 * Simulates network delay for realistic mock API behavior
 */
const simulateDelay = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

export const apiService = {
    /**
     * Fetch page-specific content
     * @param {string} pageName - Name of the page (e.g., 'home', 'about')
     * @returns {Promise<Object>} Page content data
     */
    async getPageContent(pageName) {
        if (USE_MOCK_DATA) {
            await simulateDelay(); // Simulate network latency
            try {
                const mockData = await import(`./mockData/${pageName}.json`);
                return mockData.default;
            } catch (error) {
                console.error(`Failed to load mock data for page: ${pageName}`, error);
                throw new Error(`Content not found for page: ${pageName}`);
            }
        }

        // Fetch from real CMS API
        const response = await fetch(`${API_BASE_URL}/pages/${pageName}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${pageName} content: ${response.statusText}`);
        }
        return response.json();
    },

    /**
     * Fetch common content shared across all pages
     * (Header, Footer, Sponsors, etc.)
     * @returns {Promise<Object>} Common content data
     */
    async getCommonContent() {
        if (USE_MOCK_DATA) {
            await simulateDelay();
            try {
                const mockData = await import('./mockData/common.json');
                return mockData.default;
            } catch (error) {
                console.error('Failed to load common mock data', error);
                throw new Error('Common content not found');
            }
        }

        // Fetch from real CMS API
        const response = await fetch(`${API_BASE_URL}/common`);
        if (!response.ok) {
            throw new Error(`Failed to fetch common content: ${response.statusText}`);
        }
        return response.json();
    },
};
