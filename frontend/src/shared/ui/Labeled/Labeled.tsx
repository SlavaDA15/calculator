import { Flex, Text } from '@chakra-ui/react';

type LabeledProps = {
  label: string;
  value: string;
};

export const Labeled = ({ label, value }: LabeledProps) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text color="gray.600">{label}</Text>
      <Text fontWeight={800}>{value}</Text>
    </Flex>
  );
};
