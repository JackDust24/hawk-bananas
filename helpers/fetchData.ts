import sampleData from '@/data/leaderboard.json';
import { UserInfo } from '@/types/userTypes';

function transformedData() {
  return Object.entries(sampleData)
    .map(([id, data]: [string, any]) => ({
      id,
      name: data.name,
      bananas: data.bananas,
      rank: 0,
      match: false,
    }))
    .sort((a, b) => {
      if (b.bananas === a.bananas) {
        return a.name.localeCompare(b.name);
      }
      return b.bananas - a.bananas;
    })
    .map((user, index) => ({ ...user, rank: index + 1 }));
}

export const fetchData = (searchName: string): UserInfo[] | [] => {
  const sortedData = transformedData();

  const searchedUser = sortedData.find(
    (user) => user.name.toLowerCase() == searchName.toLowerCase()
  );

  if (!searchedUser) {
    return [];
  }

  const isInTopTen = sortedData
    .slice(0, 10)
    .some((user) => user.id === searchedUser.id);

  if (isInTopTen) {
    return sortedData.slice(0, 10).map((user) => ({
      ...user,
      match: user.id === searchedUser.id,
    }));
  } else {
    const updatedTopTen = [...sortedData.slice(0, 9), searchedUser];
    return updatedTopTen.map((user) => ({
      ...user,
      match: user.id === searchedUser.id,
    }));
  }
};

export const fuzzySearchData = (searchName: string): UserInfo[] | [] => {
  const sortedData = transformedData();

  const matchedUsers = sortedData.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (matchedUsers.length === 0) {
    return [];
  }

  return matchedUsers.slice(0, 10).map((user) => ({
    ...user,
    match: true,
  }));
};
