import { applyMiddleware, createStore } from "redux";

import { schoolReducer } from "./reducer";
import thunk from "redux-thunk";

const store = createStore(schoolReducer, applyMiddleware(thunk));

export default store;