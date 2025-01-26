export type UserInfo = {
  id: string;
  name: string;
  bananas: number;
  rank: number;
  match: boolean;
};

export type UserInfoState = {
  users: UserInfo[];
  sortOrder: SortOrder;
  showLowest: boolean;
  searchedUser: UserInfo | null;
  error: string | null;
};

export type SortOrder = 'name' | 'rank';
