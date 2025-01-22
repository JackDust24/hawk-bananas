import React from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import { UserInfo } from '@/types/userTypes';
import { View } from 'react-native';

type UserListProps = {
  users: UserInfo[] | [];
  highlightedUser?: string | null;
};

export function UserList({ users, highlightedUser }: UserListProps) {
  if (!users) {
    return null;
  }
  const renderItem = ({ item }: { item: (typeof users)[0] }) => (
    <ListItem
      style={{
        backgroundColor: item.match ? '#f9c2ff' : 'transparent',
      }}
    >
      <View style={{ flex: 3 }}>
        <Text>{item.name}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text>{item.rank}</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text>{item.bananas}</Text>
      </View>
    </ListItem>
  );

  return (
    <View>
      <Layout style={{ flexDirection: 'row', marginBottom: 8 }}>
        <Text style={{ flex: 3 }}>Name</Text>
        <Text style={{ flex: 1 }}>Rank</Text>
        <Text style={{ flex: 2 }}>Bananas</Text>
      </Layout>
      <List data={users} renderItem={renderItem} />
    </View>
  );
}
