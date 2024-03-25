import Header from 'components/header';
import Filter from 'components/filter';
import { FilterData } from 'types';
import { useState } from 'react';
import './App.css';
import SalesAmount from 'components/sales-amount';

function App() {
  const [filterData, setFilterData] = useState<FilterData>({ store: { id: 0, name: '' } });

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="base-card app-sales-amount-container">
          <SalesAmount storeId={filterData?.store.id} />
        </div>
      </div>
    </>
  );
}

export default App;
