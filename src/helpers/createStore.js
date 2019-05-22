import { createStore, applymiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../client/reducers';


export default () => {
  const store = createStore(reducers, {}, applymiddleware);

  return store;
}
