import { SortOrder, UserInfo } from '@/types/userTypes';

export const SET_USERS = 'SET_USERS';
export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const SET_SHOW_LOWEST = 'SET_SHOW_LOWEST';
export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';

export const SET_ERROR = 'SET_ERROR';

export type SetUsersAction = {
  type: typeof SET_USERS;
  payload: UserInfo[];
};

export type SetSortOrder = {
  type: typeof SET_SORT_ORDER;
  payload: SortOrder;
};

export type SetShowLowest = {
  type: typeof SET_SHOW_LOWEST;
  payload: boolean;
};

export type SetSearchedUser = {
  type: typeof SET_SEARCHED_USER;
  payload: UserInfo | null;
};

export type SetErrorAction = {
  type: typeof SET_ERROR;
  payload: string;
};

export type AppActions =
  | SetUsersAction
  | SetSortOrder
  | SetShowLowest
  | SetSearchedUser
  | SetErrorAction;

export const setUsers = (users: UserInfo[]): SetUsersAction => ({
  type: SET_USERS,
  payload: users,
});

export const setSortOrder = (sortOrder: SortOrder): SetSortOrder => ({
  type: SET_SORT_ORDER,
  payload: sortOrder,
});

export const setShowLowest = (showLowest: boolean): SetShowLowest => ({
  type: SET_SHOW_LOWEST,
  payload: showLowest,
});

export const setSearchedUser = (
  searchedUser: UserInfo | null
): SetSearchedUser => ({
  type: SET_SEARCHED_USER,
  payload: searchedUser,
});

export const setError = (message: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: message,
});
