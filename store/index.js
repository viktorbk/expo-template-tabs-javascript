import { createStore, combineReducers } from "redux";

import projectReducer from "./project/Reducer"
import alertReducer from "./alerts/Reducer"

const rootReducer = combineReducers({ 
  project: projectReducer,
  alert: alertReducer
})

const store = createStore(rootReducer)
export default store;