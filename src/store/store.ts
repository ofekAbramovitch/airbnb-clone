import { combineReducers, legacy_createStore as createStore } from 'redux'

import { appReducer } from './app/app.reducer'
import { stayReducer } from './stay/stay.reducer'

const rootReducer = combineReducers({
    appModule: appReducer,
    stayModule: stayReducer
})

export const store = createStore(rootReducer)