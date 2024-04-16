import { CreditCalculator } from 'shared/ui';
import { autoCreditsOptions } from './options';
import { useCreateAutocredit } from 'api';

export const AutocreditPage = () => {
  const { mutate } = useCreateAutocredit();

  return (
    <CreditCalculator
      priceLabel="Стоимость автомобиля"
      defaultPrice={1_100_000}
      defaultRate={12}
      defaultTerm={15}
      defaultInitialPayment={0}
      termOptions={autoCreditsOptions}
      handleSubmitProps={mutate}
    />
  );
};
