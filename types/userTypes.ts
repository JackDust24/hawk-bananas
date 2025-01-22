export type UserInfo = {
  id: string;
  name: string;
  bananas: number;
  rank: number;
  match: boolean;
};

export type AppState = {
  users: UserInfo[];
  topTen: UserInfo[] | null;
  searchedUser: UserInfo | null;
  error: string | null;
};
