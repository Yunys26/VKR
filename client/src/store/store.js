import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import sliceRegistration from './sliceStore/sliceRegistration';


const rootReducer = combineReducers({
    registration: sliceRegistration,
})

const middleWare = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
})

export const store = configureStore({
    reducer: rootReducer,
    middleWare,
});
