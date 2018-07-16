import { createStore } from 'redux';
import rootReducer from './reducers';
import { getState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const configureStore = () => {
  const persistedState = getState();
  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState(store.getState())
  }, 1000));

  return store;
};

export default configureStore;
