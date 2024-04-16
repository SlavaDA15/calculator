import { useMutation } from '@tanstack/react-query';
import { api } from 'api/api';
import { CreditFieldsType } from 'shared/types';

export const useCreateIpoteka = () => {
  return useMutation({
    mutationFn: async (data: CreditFieldsType) => {
      const response = await api.post('/ipoteka', data);
      return response.data;
    },
  });
};
