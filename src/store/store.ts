import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { todoSlice } from './slices/todo';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
	key: 'root',
	version: 1,
	storage,
	whitelist: ['todo'],
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		todo: todoSlice.reducer,
	})
);

const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: false,
	}),
});

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
