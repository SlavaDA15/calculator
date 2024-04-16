import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';
import { CreditFieldsType, OptionType } from 'shared/types';

type CreditFields = {
  fieldsValue: CreditFieldsType;
  setFieldsValue: (value: CreditFieldsType) => void;
  handleSubmit: () => void;
  priceLabel?: string;
  termOptions: OptionType[];
};

export const CreditFields = ({
  fieldsValue,
  setFieldsValue,
  handleSubmit,
  termOptions,
  priceLabel = 'Стоимость недвижимости',
}: CreditFields) => {
  const handleChangeValue = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    field: keyof CreditFieldsType
  ) => {
    setFieldsValue({
      ...fieldsValue,
      [field]: +e.target.value,
    });
  };

  return (
    <Stack
      gap="16px"
      borderRight={{ base: 'initial', md: '1px solid rgb(236, 239, 241)' }}
      borderBottom={{ base: '1px solid rgb(236, 239, 241)', md: 'initial' }}
      flex={1}
      p={5}
    >
      <FormControl>
        <FormLabel>{priceLabel}</FormLabel>
        <Input
          type="number"
          value={fieldsValue.price}
          onChange={(e) => handleChangeValue(e, 'price')}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Первоначальный взнос, ₽</FormLabel>
        <Input
          type="number"
          value={fieldsValue.initialPayment}
          onChange={(e) => handleChangeValue(e, 'initialPayment')}
        />
      </FormControl>
      <Flex gap="16px">
        <FormControl>
          <FormLabel>Срок</FormLabel>
          <Select
            onChange={(e) => handleChangeValue(e, 'term')}
            value={fieldsValue.term.toString()}
          >
            {termOptions.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Ставка, %</FormLabel>
          <Input
            type="number"
            value={fieldsValue.rate}
            onChange={(e) => handleChangeValue(e, 'rate')}
          />
        </FormControl>
      </Flex>
      <Button
        colorScheme="blue"
        maxW={{ base: undefined, md: 200 }}
        onClick={handleSubmit}
      >
        Рассчитать
      </Button>
    </Stack>
  );
};
