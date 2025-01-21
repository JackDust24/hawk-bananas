import React, { useState } from 'react';
import { SearchBar } from '@/components/SearchBar';
import { UserInfo } from '@/types/userTypes';
import { UserList } from '@/components/UserList';
import { SortOptions } from '@/components/SortOptions';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

// Mock placeholder data:
const tempUser = 'John Doe';
const topUsers: UserInfo[] = [
  { rank: 1, name: 'Jack Doe', bananas: 100 },
  { rank: 2, name: 'July Doe', bananas: 90 },
  { rank: 3, name: 'Jane', bananas: 80 },
  { rank: 4, name: 'Martin', bananas: 70 },
  { rank: 5, name: 'Colin', bananas: 60 },
];

function HomeScreen() {
  return (
    <Layout style={{ flex: 1, padding: 16 }}>
      <SearchBar />
      <SortOptions />
      <UserList users={topUsers} highlightedUser={tempUser} />
    </Layout>
  );
}

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <HomeScreen />
  </ApplicationProvider>
);
