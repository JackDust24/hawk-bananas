import { AppState, UserInfo } from '@/types/userTypes';
import { AppActions, SET_USERS } from './actions';

const initialState: AppState = {
  users: [],
  topTen: [],
  searchedUser: null,
  error: null,
};

const reducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    // TODO: Add more cases
    default:
      return state;
  }
};

export default reducer;
