
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={__BASE_PATH__}>
        <AuthProvider>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 3000,
              style: {
                background: '#1F2937',
                color: '#F3F4F6',
                border: '1px solid #374151',
              },
              success: {
                iconTheme: {
                  primary: '#D97706',
                  secondary: '#1F2937',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#1F2937',
                },
              },
            }}
          />
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen bg-gray-950">
                <div className="text-center">
                  <i className="ri-loader-4-line text-5xl text-amber-500 animate-spin"></i>
                  <p className="text-gray-400 mt-4 text-lg">Loading...</p>
                </div>
              </div>
            }
          >
            <AppRoutes />
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
