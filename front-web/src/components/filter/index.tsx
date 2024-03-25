import { useEffect, useState } from 'react';
import Select from 'react-select';
import { FilterData, Store } from '../../types';
import { makeRequest } from '../../utils/request';
import './styles.css';

type Props = {
  onFilterChange: (filter: FilterData) => void;
};

const Filter = ({ onFilterChange }: Props) => {
  const [stores, setStory] = useState<Store[]>([]);

  useEffect(() => {
    makeRequest
      .get<Store[]>('/stores')
      .then((response) => {
        setStory(response.data);
      })
      .catch(() => {
        console.error('Error to fetch store');
      });
  }, []);

  const handleChangeStore = (value: Store) => {
    if (value === null) {
      value = { id: 0, name: '' };
      onFilterChange({ store: value });
    }
    onFilterChange({ store: value });
  };

  return (
    <form className="base-card filter-container">
      <Select
        options={stores}
        classNamePrefix="filter-input"
        isClearable
        placeholder="Selecione uma cidade"
        getOptionLabel={(store: Store) => store.name}
        getOptionValue={(store: Store) => String(store.id)}
        onChange={(value) => handleChangeStore(value as Store)}
      />
    </form>
  );
};

export default Filter;
