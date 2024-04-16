import { CreditCalculator } from 'shared/ui';
import { options } from './options';
import { useCreateIpoteka } from 'api';

export const IpotekaPage = () => {
  const { mutate } = useCreateIpoteka();

  return <CreditCalculator termOptions={options} handleSubmitProps={mutate} />;
};
