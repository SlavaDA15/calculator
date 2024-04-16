import { Heading, Stack } from '@chakra-ui/react';
import { Labeled } from 'shared/ui/Labeled/Labeled';

type MortgageResultProps = {
  sum: number;
  monthlyPayment: number;
  totalPayout: number;
  overpayment: number;
};

export const CreditResults = ({
  sum,
  monthlyPayment,
  overpayment,
  totalPayout,
}: MortgageResultProps) => {
  return (
    <Stack p={5} flex="1">
      <Heading size="lg">Результаты расчета</Heading>
      <Stack mt="20px" gap="16px">
        <Labeled label="Сумма кредита" value={`${sum.toLocaleString()} ₽`} />
        <Labeled
          label="Ежемесячный платеж"
          value={`${(+monthlyPayment.toFixed(2)).toLocaleString()} ₽`}
        />
        <Labeled
          label="Переплата по кредиту"
          value={`${(+overpayment.toFixed(2)).toLocaleString()} ₽`}
        />
        <Labeled
          label="Общая выплата"
          value={`${(+totalPayout.toFixed(2)).toLocaleString()} ₽`}
        />
      </Stack>
    </Stack>
  );
};
