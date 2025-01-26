import {
  setUsers,
  setSortOrder,
  setShowLowest,
  SET_USERS,
  SET_SORT_ORDER,
  SET_SHOW_LOWEST,
} from '@/redux/actions/actions';

describe('Redux Actions', () => {
  it('should create an action to set users', () => {
    const users = [
      { id: '1', name: 'John', bananas: 100, rank: 1, match: false },
      { id: '2', name: 'Jane', bananas: 200, rank: 2, match: false },
    ];

    const expectedAction = { type: SET_USERS, payload: users };
    expect(setUsers(users)).toEqual(expectedAction);
  });

  it('should create an action to sort order', () => {
    const sortOrder = 'rank';

    const expectedAction = { type: SET_SORT_ORDER, payload: sortOrder };

    expect(setSortOrder(sortOrder)).toEqual(expectedAction);
  });

  it('should create an action to show the lowest ranked users', () => {
    const showLowest = true;
    const expectedAction = { type: SET_SHOW_LOWEST, payload: showLowest };

    expect(setShowLowest(showLowest)).toEqual(expectedAction);
  });
});
