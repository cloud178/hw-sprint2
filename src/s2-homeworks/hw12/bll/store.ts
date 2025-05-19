import {combineReducers, createStore} from "redux"
import {themeReducer} from "./themeReducer"

const rootReducer = combineReducers({
    theme: themeReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
