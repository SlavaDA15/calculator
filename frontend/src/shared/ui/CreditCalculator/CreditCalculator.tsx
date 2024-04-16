import { Flex } from '@chakra-ui/react';
import { CreditResults } from './components';
import { css } from '@emotion/react';
import { useState } from 'react';
import { getMonthlyPayment, getOverpayment, getTotalPayout } from 'helpers';
import { CreditFields } from './components';
import { CreditFieldsType, OptionType } from 'shared/types';

type CreditCalculatorProps = {
  priceLabel?: string;
  defaultPrice?: number;
  defaultInitialPayment?: number;
  defaultTerm?: number;
  defaultRate?: number;
  termOptions: OptionType[];
  handleSubmitProps?: (fieldsValue: CreditFieldsType) => void;
};

export const CreditCalculator = ({
  priceLabel = 'Стоимость недвижимости',
  defaultPrice = 4_000_000,
  defaultInitialPayment = 2_500_000,
  defaultTerm = 20,
  defaultRate = 9.6,
  termOptions,
  handleSubmitProps,
}: CreditCalculatorProps) => {
  const [fieldsValue, setFieldsValue] = useState<CreditFieldsType>({
    price: defaultPrice,
    initialPayment: defaultInitialPayment,
    term: defaultTerm,
    rate: defaultRate,
  });

  const [results, setResults] = useState({
    sum: fieldsValue.price - fieldsValue.initialPayment,
    monthlyPayment: getMonthlyPayment(fieldsValue),
    overpayment: getOverpayment(fieldsValue),
    totalPayout: getTotalPayout(fieldsValue),
  });

  const handleSubmit = () => {
    setResults({
      sum: fieldsValue.price - fieldsValue.initialPayment,
      monthlyPayment: getMonthlyPayment(fieldsValue),
      overpayment: getOverpayment(fieldsValue),
      totalPayout: getTotalPayout(fieldsValue),
    });
    handleSubmitProps && handleSubmitProps(fieldsValue);
  };

  return (
    <Flex
      css={containerCss}
      flexDirection={{
        base: 'column',
        md: 'row',
      }}
    >
      <CreditFields
        fieldsValue={fieldsValue}
        setFieldsValue={setFieldsValue}
        handleSubmit={handleSubmit}
        priceLabel={priceLabel}
        termOptions={termOptions}
      />
      <CreditResults
        sum={results.sum}
        monthlyPayment={results.monthlyPayment}
        overpayment={results.overpayment}
        totalPayout={results.totalPayout}
      />
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
