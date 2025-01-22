import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '@/redux/actions';
import { RootState } from '@/redux/store';
import { SearchBar } from '@/components/SearchBar';
import { UserInfo } from '@/types/userTypes';
import { UserList } from '@/components/UserList';
import { SortOptions } from '@/components/SortOptions';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { fetchData } from '@/helpers/fetchData';

function HomeScreen() {
  // const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.app.users || []);

  // useEffect(() => {
  //   const users = fetchData();

  //   dispatch(setUsers(users));
  // }, [dispatch]);

  return (
    <Layout style={{ flex: 1, padding: 16 }}>
      <SearchBar />
      <SortOptions />
      <UserList users={users} highlightedUser={null} />
    </Layout>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
