import { Stack, Heading } from '@chakra-ui/react';
import { useRoutesList } from 'api';
import { Navigate } from 'react-router-dom';

export const MainPage = () => {
  const { data } = useRoutesList();

  if (!data) return null;

  if (!data[0]?.path) {
    return (
      <Stack justifyContent="center" alignItems="center" flex={1}>
        <Heading size="4xl" textAlign="center" maxWidth={930}>
          Нет доступных калькуляторов
        </Heading>
      </Stack>
    );
  }

  return <Navigate to={data[0].path} />;
};
