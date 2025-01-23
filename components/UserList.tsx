import React from 'react';
import { Layout, List, ListItem, Text } from '@ui-kitten/components';
import { View, StyleSheet } from 'react-native';
import { UserInfo } from '@/types/userTypes';

type UserListProps = {
  users: UserInfo[] | [];
  highlightedUser?: string | null;
};

export function UserList({ users, highlightedUser }: UserListProps) {
  if (!users) {
    return null;
  }

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof users)[0];
    index: number;
  }) => (
    <ListItem
      style={[
        styles.row,
        item.match
          ? {
              backgroundColor: '#f9c2ff',
            }
          : {
              backgroundColor: index % 2 === 0 ? '#ffffff' : '#eaf2d3',
            },
      ]}
    >
      <View style={[styles.cell, styles.name]}>
        <Text>{item.name}</Text>
      </View>
      <View style={[styles.cell, styles.rank]}>
        <Text>{item.rank}</Text>
      </View>
      <View style={[styles.cell, styles.bananas]}>
        <Text>{item.bananas}</Text>
      </View>
    </ListItem>
  );

  return (
    <View>
      <Layout style={styles.headerRow}>
        <Text style={[styles.cell, styles.name, { textAlign: 'center' }]}>
          Name
        </Text>
        <Text style={[styles.cell, styles.rank, { textAlign: 'center' }]}>
          Rank
        </Text>
        <Text style={[styles.cell, styles.bananas, { textAlign: 'center' }]}>
          Bananas
        </Text>
      </Layout>
      <List data={users} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: '#a7c943',
    borderBottomWidth: 1,
    borderBottomColor: '#b2cf59',
  },
  row: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#b2cf59',
  },
  cell: {
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  name: {
    flex: 3,
  },
  rank: {
    flex: 1,
  },
  bananas: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
