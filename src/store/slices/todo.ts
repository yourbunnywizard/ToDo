import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';

export interface ITodoitem {
	id: number;
	title: string;
	completed: boolean;
}

export type ITodoList = ITodoitem[];

export const todoSlice = createSlice({
	name: 'todo',
	initialState: [] as ITodoList,
	reducers: {
		createItem: (state, action: PayloadAction<ITodoitem>): ITodoList => {
			state.push(action.payload);
			return state;
		},
		updateItem: (state, action: PayloadAction<ITodoitem>) => {
			return state.map((item) =>
				item.id === action.payload.id ? action.payload : item
			);
		},
		toggleItemStatus: (state, action: PayloadAction<number>) => {
			return state.map((item) =>
				item.id === action.payload
					? { ...item, completed: !item.completed }
					: item
			);
		},
		deleteItem: (state, action: PayloadAction<number>) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { createItem, updateItem, toggleItemStatus, deleteItem } =
	todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo;
