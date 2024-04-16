import { Button, Heading, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const ForbiddenPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" flex={1}>
      <Heading size="4xl" textAlign="center" maxWidth={930}>
        У вас нет прав для просмотра этой страницы
      </Heading>
      <Button size="lg" mt="32px" as={Link} to="/">
        Вернуться на главную
      </Button>
    </Stack>
  );
};
