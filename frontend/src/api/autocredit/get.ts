import { useQuery } from '@tanstack/react-query';
import { api } from 'api/api';
import { saveFile } from 'helpers/file';

export const useAutocreditReport = () => {
  return useQuery({
    queryKey: ['report', 'autocredit'],
    queryFn: async () => {
      const response = await api.get(`/autocredit/report`);
      saveFile(response.data, 'Отчет автокредит');
    },
    retry: false,
    enabled: false,
  });
};
