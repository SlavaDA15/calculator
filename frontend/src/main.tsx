import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from 'router/config.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthContextProvider } from 'app/AuthContextProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
