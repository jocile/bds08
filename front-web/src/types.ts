export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type Store = {
  id: number;
  name: string;
};

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type SalesSummary = {
  sum: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type FilterData = {
  store: Store;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
