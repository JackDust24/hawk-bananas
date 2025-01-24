import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { setShowLowest, setUsers } from '@/redux/actions';
import { RootState } from '@/redux/store';
import { SearchBar } from '@/components/SearchBar';
import { UserList } from '@/components/UserList';
import { SortBar } from '@/components/SortOptions';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { fetchLowestRank } from '@/helpers/fetchData';

function HomeScreen() {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.app.users || []);
  const sortOrder = useSelector((state: RootState) => state.app.sortOrder);
  const showLowest = useSelector((state: RootState) => state.app.showLowest);

  useEffect(() => {
    let sortedUsers = [...users];

    if (sortOrder === 'name') {
      sortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'rank') {
      sortedUsers.sort((a, b) => a.rank - b.rank);
    }

    dispatch(setUsers(sortedUsers));
  }, [sortOrder]);

  useEffect(() => {
    if (showLowest) {
      const lowestRankUsers = fetchLowestRank();
      const sortedUsers = lowestRankUsers.slice(0, 10);
      dispatch(setUsers(sortedUsers));
      dispatch(setShowLowest(false));
    }
  }, [showLowest]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Layout
        style={{
          flex: 1,
          paddingHorizontal: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Layout style={{ width: '100%', marginBottom: 20 }}>
          <SearchBar />
        </Layout>
        <Layout
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            gap: 20,
            marginBottom: 20,
          }}
        >
          <SortBar />
        </Layout>
        <Layout style={{ width: '100%' }}>
          <UserList users={users} highlightedUser={null} />
        </Layout>
      </Layout>
    </TouchableWithoutFeedback>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
