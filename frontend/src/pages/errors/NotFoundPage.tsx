import { Stack, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Stack justifyContent="center" alignItems="center" flex={1}>
      <Heading size="4xl" textAlign="center" maxWidth={930}>
        Этой страницы не существует
      </Heading>
      <Button size="lg" mt="32px" as={Link} to="/">
        Вернуться на главную
      </Button>
    </Stack>
  );
};
