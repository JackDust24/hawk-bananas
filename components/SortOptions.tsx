import React, { useState } from 'react';
import {
  Button,
  IndexPath,
  Select,
  SelectItem,
  Text,
} from '@ui-kitten/components';
import { useDispatch } from 'react-redux';
import { SortOrder } from '@/types/userTypes';
import { setSearchedUser, setShowLowest, setSortOrder } from '@/redux/actions';

export function SortBar() {
  const dispatch = useDispatch();

  const handleSort = (sortOption: SortOrder) => {
    switch (sortOption) {
      case 'name':
        dispatch(setSortOrder('name'));
        break;
      case 'rank':
        dispatch(setSortOrder('rank'));
        break;
      default:
        dispatch(setSortOrder('rank'));
        break;
    }
  };

  const handleShowLowest = () => {
    dispatch(setSearchedUser(null));
    dispatch(setShowLowest(true));
  };

  return <SortOptions onSort={handleSort} onShowLowest={handleShowLowest} />;
}

function SortOptions({
  onSort,
  onShowLowest,
}: {
  onSort: (option: SortOrder) => void;
  onShowLowest: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<IndexPath | undefined>(
    undefined
  );

  const handleSelect = (index: IndexPath | IndexPath[]) => {
    if (Array.isArray(index)) {
      return;
    }
    if (index.row === 0) {
      onSort('name');
    } else {
      onSort('rank');
    }
    setSelectedOption(index);
  };

  const valueOptions = ['Sorted by Name', 'Sorted by Rank'];

  return (
    <>
      <Select
        selectedIndex={selectedOption}
        onSelect={handleSelect}
        placeholder='Select Sorting Option'
        style={{ flex: 1 }}
        value={selectedOption ? valueOptions[selectedOption.row] : undefined}
      >
        <SelectItem title='Sort by Name' />
        <SelectItem title='Sort by Rank' />
      </Select>
      <Button
        size='small'
        onPress={() => onShowLowest()}
        style={{
          backgroundColor: '#D1D1D1',
          borderColor: '#A1A1A1',
          borderWidth: 1,
        }}
      >
        {(evaProps) => (
          <Text {...evaProps} style={{ color: '#000' }}>
            Lowest Rankings
          </Text>
        )}
      </Button>
    </>
  );
}
