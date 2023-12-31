import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import questReducer from './slices/questSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        quest: questReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})
export default store
export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;