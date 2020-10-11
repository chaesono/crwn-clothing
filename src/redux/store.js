import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // 디버깅할때 좋은 redux code이다.

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
