import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
