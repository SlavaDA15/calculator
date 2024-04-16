import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from 'api/api';

export const useSignIn = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await api.post('/auth/signin');
      return response.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['auth'] });
    },
  });
};

export const useSignOut = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await api.post('/auth/signout');
      return response.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['auth'] });
    },
  });
};
