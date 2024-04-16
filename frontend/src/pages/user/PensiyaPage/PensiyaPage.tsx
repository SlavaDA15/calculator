import { Flex, Heading, Stack } from '@chakra-ui/react';
import { css } from '@emotion/react';
import { Labeled } from 'shared/ui';
import { useState } from 'react';
import { PensiyaPageFields } from './PensiyaPageFields';
import { PensiyaFieldType } from 'shared/types';
import { PENSIYA_FIELDS_VALUE } from 'consts';
import { useCreatePensiya } from 'api';

export const PensiyaPage = () => {
  const [result, setResult] = useState<string>(
    (
      PENSIYA_FIELDS_VALUE.point * PENSIYA_FIELDS_VALUE.pointValue +
      PENSIYA_FIELDS_VALUE.fixedPayment
    ).toFixed(2)
  );

  const { mutate } = useCreatePensiya();

  const handleSubmit = (fieldsValue: PensiyaFieldType) => {
    mutate(fieldsValue);
    setResult(
      (
        fieldsValue.point * fieldsValue.pointValue +
        fieldsValue.fixedPayment
      ).toFixed(2)
    );
  };

  return (
    <Flex
      css={containerCss}
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      <PensiyaPageFields handleSubmit={handleSubmit} />
      <Stack flex={1} p={5}>
        <Heading size="lg">Результаты расчета</Heading>
        <Labeled label="Страховая пенсия" value={`${result} ₽`} />
      </Stack>
    </Flex>
  );
};

const containerCss = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-shadow: rgba(22, 33, 54, 0.16) 0px 1px 2px;
  border-radius: 8px;
  background: white;
`;
