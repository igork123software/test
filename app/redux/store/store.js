import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'remote-redux-devtools';

const middleware = [thunk, logger];
const store = createStore(rootReducer,compose(composeWithDevTools(applyMiddleware(...middleware))));
export default store;


// import { createStore, combineReducers } from 'redux';
// import reducerUser from './src/reducerUser';

// const rootReducer = combineReducers({
//   places: reducerUser
// });

// const store = () => {
//   return createStore(rootReducer);
// }

// // state = store.getState()

// export default store;