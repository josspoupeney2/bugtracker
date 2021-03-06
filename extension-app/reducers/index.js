import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './users';
import notifications from './notifications';
import instances from './instances';
import toast from './toast';
import bugs from  './bugs';

const rootReducer = combineReducers({
  user: usersReducer,
  instances,
  notifications,
  toast,
  bugs,
});

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  );
}
