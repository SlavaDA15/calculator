import { useQuery } from '@tanstack/react-query';
import { api } from 'api/api';

type AuthType = {
  isAdmin: boolean;
};

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      const response = await api.get<AuthType>(`/auth`);
      return response.data.isAdmin;
    },
  });
};
