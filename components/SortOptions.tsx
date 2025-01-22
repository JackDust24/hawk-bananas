import React, { useState } from 'react';
import {
  Button,
  IndexPath,
  Layout,
  Select,
  SelectItem,
} from '@ui-kitten/components';
import { useDispatch } from 'react-redux';

export const SortOptions: React.FC = () => {
  //   const dispatch = useDispatch(); // To be implemented
  const [selectedOption, setSelectedOption] = useState<IndexPath | undefined>(
    undefined
  );

  // TO be implemented
  const handleSelect = (index: IndexPath | IndexPath[]) => {
    if (Array.isArray(index)) {
      return;
    }
    if (index.row === 0) {
      console.log('Sort by Name');
    } else {
      console.log('Sort by Rank');
    }
    setSelectedOption(index);
  };

  return (
    <Layout
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}
    >
      <Select
        selectedIndex={selectedOption}
        onSelect={handleSelect}
        placeholder='Select Sorting Option'
        style={{ flex: 1 }}
      >
        <SelectItem title='Sort by Name' />
        <SelectItem title='Sort by Rank' />
      </Select>
    </Layout>
  );
};
