import Header from 'components/header';
import Filter from 'components/filter';
import { FilterData } from 'types';
import { useState } from 'react';
import './App.css';

function App() {
  const [, setFilterData] = useState<FilterData>({ store: { id: 0, name: '' } });

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
      </div>
    </>
  );
}

export default App;
