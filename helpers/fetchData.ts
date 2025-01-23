import sampleData from '@/data/leaderboard.json';
import { UserInfo } from '@/types/userTypes';

function transformedData(showHighestRank = true): UserInfo[] {
  let currentRank = 0;
  let previousBananas: number | null = null;

  return (
    Object.entries(sampleData)
      .map(([id, data]: [string, any]) => ({
        id,
        name: data.name,
        bananas: data.bananas,
        rank: 0,
        match: false,
      }))
      // Filter out empty names and names and non ascii characters
      .filter(
        (user) => user.name.trim() !== '' && /^[\x00-\x7F]*$/.test(user.name)
      )

      .sort((a, b) => {
        if (b.bananas === a.bananas) {
          return showHighestRank
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
        }
        return b.bananas - a.bananas;
      })
      .map((user, index) => {
        if (user.bananas !== previousBananas) {
          currentRank = index + 1;
          previousBananas = user.bananas;
        }
        return { ...user, rank: currentRank };
      })
  );
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

export const fetchFuzzySearch = (searchName: string): UserInfo[] | [] => {
  const sortedData = transformedData();

  const matchedUsers = sortedData.filter((user) =>
    user.name.toLowerCase().includes(searchName.toLowerCase())
  );

  if (matchedUsers.length === 0) {
    return [];
  }

  return matchedUsers.slice(0, 10).map((user) => ({
    ...user,
    match: false,
  }));
};

export const fetchLowestRank = (): UserInfo[] | [] => {
  return transformedData(false).reverse();
};
