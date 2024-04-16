import { useMutation } from '@tanstack/react-query';
import { api } from 'api/api';
import { PensiyaFieldType } from 'shared/types';

export const useCreatePensiya = () => {
  return useMutation({
    mutationFn: async (data: PensiyaFieldType) => {
      const response = await api.post('/pensiya', data);
      return response.data;
    },
  });
};
