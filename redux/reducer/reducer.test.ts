import reducer from './reducer';
import {
  SET_USERS,
  SET_SORT_ORDER,
  AppActions,
  SET_SHOW_LOWEST,
} from '../actions/actions';
import { UserInfoState } from '@/types/userTypes';

describe('Redux Reducer', () => {
  const initialState: UserInfoState = {
    users: [],
    sortOrder: 'rank',
    showLowest: false,
    searchedUser: null,
    error: null,
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AppActions)).toEqual(initialState);
  });

  it('should handle SET_USERS', () => {
    const users = [
      { id: '1', name: 'John', bananas: 100, rank: 1, match: false },
    ];
    const action: AppActions = { type: SET_USERS, payload: users };
    const expectedState = { ...initialState, users };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SORT_ORDER', () => {
    const sortOrder = 'name';

    const action: AppActions = { type: SET_SORT_ORDER, payload: sortOrder };
    const expectedState = { ...initialState, sortOrder };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SHOW_LOWEST', () => {
    const showLowest = true;

    const action: AppActions = { type: SET_SHOW_LOWEST, payload: showLowest };
    const expectedState = { ...initialState, showLowest };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle Search User', () => {
    const searchedUser = {
      id: '1',
      name: 'John',
      bananas: 100,
      rank: 1,
      match: false,
    };

    const action: AppActions = {
      type: 'SET_SEARCHED_USER',
      payload: searchedUser,
    };
    const expectedState = { ...initialState, searchedUser };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
