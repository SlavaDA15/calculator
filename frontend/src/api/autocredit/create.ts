import { useMutation } from '@tanstack/react-query';
import { api } from 'api/api';
import { CreditFieldsType } from 'shared/types';

export const useCreateAutocredit = () => {
  return useMutation({
    mutationFn: async (data: CreditFieldsType) => {
      const response = await api.post('/autocredit', data);
      return response.data;
    },
  });
};
