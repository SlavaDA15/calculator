import { LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Heading, Stack, Flex, Box, Text, IconButton } from '@chakra-ui/react';
import { useAllRoutes, useUpdateRoute } from 'api';

export const SettingsRoute = () => {
  const { data } = useAllRoutes();

  const { mutate } = useUpdateRoute();

  if (!data) return null;

  return (
    <Box p={5} boxShadow="base" bg="white" flex={1}>
      <Heading size="lg">Отображение</Heading>
      <Stack mt="32px">
        {(data || []).map((item) => (
          <Flex
            alignItems="center"
            key={item.id}
            justifyContent="space-between"
          >
            <Text width={200}>{item.label}</Text>
            <IconButton
              aria-label="control"
              colorScheme="blue"
              icon={item.enabled ? <UnlockIcon /> : <LockIcon />}
              onClick={() => mutate({ id: item.id, value: !item.enabled })}
            />
          </Flex>
        ))}
      </Stack>
    </Box>
  );
};
