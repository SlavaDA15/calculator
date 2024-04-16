import { CreditFieldsType } from 'shared/types';

/** Рассчитать ежемесячный платеж */
export const getMonthlyPayment = (fieldsValue: CreditFieldsType) => {
  const monthlyRate = fieldsValue.rate / 12 / 100;
  const totalRate = Math.pow(1 + monthlyRate, fieldsValue.term * 12);

  return (
    ((fieldsValue.price - fieldsValue.initialPayment) *
      monthlyRate *
      totalRate) /
    (totalRate - 1)
  );
};

/** Рассчитать общую выплату */
export const getTotalPayout = (fieldsValue: CreditFieldsType) => {
  const monthPayment = getMonthlyPayment(fieldsValue);

  return 12 * fieldsValue.term * monthPayment;
};

/** Рассчитать переплату по кредиту */
export const getOverpayment = (fieldsValue: CreditFieldsType) => {
  return (
    getTotalPayout(fieldsValue) -
    (fieldsValue.price - fieldsValue.initialPayment)
  );
};
