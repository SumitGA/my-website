import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { crashReporter } from 'redux-reporter'
import rootReducer from "../reducers"

const loggerMiddleware = createLogger()

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,loggerMiddleware, crashReporter))

export default store

