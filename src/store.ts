import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension/index";

//--reducers
import RootReducer from './reducers';

//--middleware
export const middlewares = [ReduxThunk];

//--store
export const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

export type RootState = ReturnType<typeof RootReducer>

export const store = createStoreWithMiddleware(RootReducer);

