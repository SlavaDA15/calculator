import { useQuery } from '@tanstack/react-query';
import { api } from 'api/api';

type RoutesType = {
  id: string;
  label: string;
  path: string;
  enabled: boolean;
};

type QueryParams = {
  path?: string;
};

const path = '/calculators';

export const useRoutesList = () => {
  return useQuery({
    queryKey: ['routes', 'available-routes'],
    queryFn: async () => {
      const response = await api.get<Omit<RoutesType, 'enabled'>[]>(
        `${path}/routes`
      );
      return response.data;
    },
  });
};

export const useAllRoutes = (queryParams?: QueryParams, retry = true) => {
  return useQuery({
    queryKey: ['routes'],
    queryFn: async () => {
      const response = await api.get<RoutesType[]>(`${path}`, {
        params: queryParams,
      });
      return response.data;
    },
    retry,
  });
};
