import { UserInfo } from '@/types/userTypes';

export const SET_USERS = 'SET_USERS';
export const SET_TOP_TEN = 'SET_TOP_TEN';
export const SET_SEARCHED_USER = 'SET_SEARCHED_USER';
export const SET_ERROR = 'SET_ERROR';

export type SetUsersAction = {
  type: typeof SET_USERS;
  payload: UserInfo[];
};

export type SetTopTenAction = {
  type: typeof SET_TOP_TEN;
  payload: UserInfo[];
};

export type SetSearchedUserAction = {
  type: typeof SET_SEARCHED_USER;
  payload: UserInfo | null;
};

export type SetErrorAction = {
  type: typeof SET_ERROR;
  payload: string;
};

export type AppActions =
  | SetUsersAction
  | SetTopTenAction
  | SetSearchedUserAction
  | SetErrorAction;

export const setUsers = (users: UserInfo[]): SetUsersAction => ({
  type: SET_USERS,
  payload: users,
});

export const setTopTen = (topTen: UserInfo[]): SetTopTenAction => ({
  type: SET_TOP_TEN,
  payload: topTen,
});

export const setSearchedUser = (
  user: UserInfo | null
): SetSearchedUserAction => ({
  type: SET_SEARCHED_USER,
  payload: user,
});

export const setError = (message: string): SetErrorAction => ({
  type: SET_ERROR,
  payload: message,
});
