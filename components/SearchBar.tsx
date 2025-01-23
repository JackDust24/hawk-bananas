import React, { useState, useEffect } from 'react';
import { Alert, ImageProps } from 'react-native';
import { Input, Button, Layout, IconElement } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { setSearchedUser, setUsers } from '@/redux/actions';
import { fetchData, fetchFuzzySearch } from '@/helpers/fetchData';
import { RootState } from '@/redux/store';

export function SearchBar() {
  const [searchName, setSearchName] = useState('');
  const dispatch = useDispatch();
  const searchedUser = useSelector(
    (state: RootState) => state.app.searchedUser
  );

  const handleSearch = () => {
    if (searchName.trim() === '') {
      // Clear results if search is empty
      dispatch(setUsers([]));
      return;
    }

    const users = fetchData(searchName);

    if (users.length === 0) {
      setTimeout(() => {
        Alert.alert(
          'User Not Found',
          'This username does not exist! Please specify an existing username.'
        );
      }, 0);
    }
    const matchedUser = users.find((user) => user.match);
    if (matchedUser) {
      dispatch(setSearchedUser(matchedUser));
    }
    dispatch(setUsers(users));
  };

  const handleSearchText = (text: string) => {
    setSearchName(text);
    if (text.trim() === '') {
      dispatch(setUsers([]));
      return;
    }

    const users = fetchFuzzySearch(text);

    dispatch(setUsers(users));
  };

  useEffect(() => {
    if (!searchedUser) {
      setSearchName('');
    }
  }, [searchedUser]);

  return (
    <Layout
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      }}
    >
      <Input
        placeholder='Enter username'
        value={searchName}
        onChangeText={handleSearchText}
        style={{ flex: 1, marginRight: 8 }}
        accessoryLeft={() => <Icon name='search' size={20} color='#000' />}
      />

      <Button onPress={handleSearch}>Search</Button>
    </Layout>
  );
}
