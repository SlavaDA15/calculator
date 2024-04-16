import { Flex } from '@chakra-ui/react';
import { SettingsReport } from './components/SettingsReport';
import { SettingsRoute } from './components/SettingsRoutes';

export const SettingsPage = () => {
  return (
    <Flex
      p={5}
      gap="32px"
      flexDirection={{ base: 'column', lg: 'row' }}
      maxWidth={900}
      mx="auto"
    >
      <SettingsReport />
      <SettingsRoute />
    </Flex>
  );
};
