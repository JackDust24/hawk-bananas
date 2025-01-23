import { AppState, UserInfo } from '@/types/userTypes';
import {
  AppActions,
  SET_USERS,
  SET_SORT_ORDER,
  SET_SHOW_LOWEST,
  SET_SEARCHED_USER,
} from './actions';

const initialState: AppState = {
  users: [],
  sortOrder: 'rank',
  showLowest: false,
  searchedUser: null,
  error: null, //To be implemented
};

const reducer = (state = initialState, action: AppActions): AppState => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    case SET_SHOW_LOWEST:
      return { ...state, showLowest: action.payload };
    case SET_SEARCHED_USER:
      return { ...state, searchedUser: action.payload };
    default:
      return state;
  }
};

export default reducer;
