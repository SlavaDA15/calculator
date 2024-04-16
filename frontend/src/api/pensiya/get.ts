import { useQuery } from '@tanstack/react-query';
import { api } from 'api/api';
import { saveFile } from 'helpers/file';

export const usePensiyaReport = () => {
  return useQuery({
    queryKey: ['report', 'pensiya'],
    queryFn: async () => {
      const response = await api.get(`/pensiya/report`);
      saveFile(response.data, 'Отчет пенсионные начисления');
    },
    retry: false,
    enabled: false,
  });
};
