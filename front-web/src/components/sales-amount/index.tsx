import { useEffect, useState } from 'react';
import { SalesSummary } from '../../types';
import { formatPrice } from '../../utils/formatters';
import { makeRequest } from '../../utils/request';
import { totalSumSales } from './helpers';
import './styles.css';

type Props = {
  storeId?: number;
};

const SalesAmount = ({ storeId }: Props) => {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    makeRequest
      .get<SalesSummary>(`/sales/summary?storeId=${storeId === undefined ? 0 : storeId}`)
      .then((response) => {
        const newTotalSum = totalSumSales(response.data);
        setTotalSum(newTotalSum);
      })
      .catch(() => {
        console.error('Error to fetch sales summary');
      });
  }, [storeId]);

  return (
    <div className="sales-amount-container">
      <h1 className="sales-amount">{formatPrice(totalSum)}</h1>
      <h3 className="sales-amount-description">Total de vendas</h3>
    </div>
  );
};

export default SalesAmount;
