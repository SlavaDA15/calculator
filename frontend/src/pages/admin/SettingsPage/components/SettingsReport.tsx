import { Heading, Stack, Button, Box } from '@chakra-ui/react';
import { useIpotekaReport, useAutocreditReport, usePensiyaReport } from 'api';

export const SettingsReport = () => {
  const { refetch: downloadReportIpoteka } = useIpotekaReport();
  const { refetch: downloadReportAutoCredit } = useAutocreditReport();
  const { refetch: downloadReportPensiya } = usePensiyaReport();
  return (
    <Box p={5} boxShadow="base" bg="white" flex={1}>
      <Heading size="lg">Выгрузка</Heading>
      <Stack mt="32px">
        <Stack gap="12px">
          <Button colorScheme="green" onClick={() => downloadReportIpoteka()}>
            Ипотека
          </Button>
          <Button
            colorScheme="green"
            onClick={() => downloadReportAutoCredit()}
          >
            Автокредит
          </Button>
          <Button colorScheme="green" onClick={() => downloadReportPensiya()}>
            Пенсионные начисления
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
