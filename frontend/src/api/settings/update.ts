import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from 'api/api';

type UpdateRoute = {
  id: string;
  value: boolean;
};

export const useUpdateRoute = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, value }: UpdateRoute) => {
      const response = await api.put(`/calculators/${id}`, { value });
      return response.data;
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['routes'] });
    },
  });
};
