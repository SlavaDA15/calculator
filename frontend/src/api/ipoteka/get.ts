import { useQuery } from '@tanstack/react-query';
import { api } from 'api/api';
import { saveFile } from 'helpers/file';

export const useIpotekaReport = () => {
  return useQuery({
    queryKey: ['report', 'ipoteka'],
    queryFn: async () => {
      const response = await api.get(`/ipoteka/report`);
      saveFile(response.data, 'Отчет ипотека');
    },
    retry: false,
    enabled: false,
  });
};
