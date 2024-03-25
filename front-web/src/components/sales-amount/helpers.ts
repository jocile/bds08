import { SalesSummary } from '../../types';

export const totalSumSales = (salesSummary: SalesSummary) => {
  return salesSummary.sum;
};
