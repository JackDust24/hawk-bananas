import { legacy_createStore as createStore, combineReducers } from 'redux';
import reducer from './reducer/reducer';

const rootReducer = combineReducers({
  app: reducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
