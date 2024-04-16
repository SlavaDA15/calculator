import { Stack, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { PENSIYA_FIELDS_VALUE } from 'consts';
import { useState } from 'react';
import { PensiyaFieldType } from 'shared/types';

type PensiyaPageFieldsProps = {
  handleSubmit: (fieldsValue: PensiyaFieldType) => void;
};

export const PensiyaPageFields = ({ handleSubmit }: PensiyaPageFieldsProps) => {
  const [fieldsValue, setFieldsValue] = useState<PensiyaFieldType>({
    point: PENSIYA_FIELDS_VALUE.point,
    pointValue: PENSIYA_FIELDS_VALUE.pointValue,
    fixedPayment: PENSIYA_FIELDS_VALUE.fixedPayment,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof PensiyaFieldType
  ) => {
    setFieldsValue((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
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
        <FormLabel>Пенсионные баллы</FormLabel>
        <Input
          type="number"
          value={fieldsValue.point}
          onChange={(e) => handleChange(e, 'point')}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Стоимость балла</FormLabel>
        <Input
          type="number"
          value={fieldsValue.pointValue}
          onChange={(e) => handleChange(e, 'pointValue')}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Фиксированная выплата</FormLabel>
        <Input
          type="number"
          value={fieldsValue.fixedPayment}
          onChange={(e) => handleChange(e, 'fixedPayment')}
        />
      </FormControl>
      <Button
        colorScheme="blue"
        maxW={{ base: undefined, md: 200 }}
        onClick={() => handleSubmit(fieldsValue)}
      >
        Рассчитать
      </Button>
    </Stack>
  );
};
