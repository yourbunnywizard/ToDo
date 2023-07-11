import { Box, List, TextField, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import {
	createItem,
	deleteItem,
	selectTodos,
	toggleItemStatus,
} from 'store/slices/todo';
import { useAppDispatch, useAppSelector } from 'store/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckCircle } from '@phosphor-icons/react';
import { useState } from 'react';
import { TodoButton } from './TodoButton';
import { useDebounce } from 'hooks/useDebounce';

const newItemSchema = Yup.object().shape({
	title: Yup.string()
		.min(5, ({ min }) => `Поле має містити хоча б ${min} символів!`)
		.required("Поле обов'язкове для заповнення!"),
});

type TFilter = 'all' | 'done';

const Todo = () => {
	const dispatch = useAppDispatch();
	const todos = useAppSelector(selectTodos);

	const [filterType, setFilterType] = useState<TFilter>('all');
	const [filterQuery, setFilterQuery] = useState<string>('');
	const debouncedQeury = useDebounce<string>(filterQuery, 500);

	const filteredTodos = todos
		.filter(
			(item) =>
				(filterType === 'done' && item.completed) || filterType === 'all'
		)
		.filter((item) =>
			item.title.toLowerCase().includes(debouncedQeury.toLowerCase())
		);

	const handleAddTodo = (title: string): void => {
		dispatch(createItem({ title, id: Math.random(), completed: false }));
	};

	const handleToggleTodo = (id: number): void => {
		dispatch(toggleItemStatus(id));
	};

	const handleDeleteTodo = (id: number): void => {
		dispatch(deleteItem(id));
	};

	return (
		<Box className="todo">
			<Box sx={{ display: 'flex', gap: '12px' }}>
				<TextField
					sx={{ flex: '7' }}
					placeholder="Search by text..."
					onChange={(e) => setFilterQuery(e.target.value)}
					value={filterQuery}
				/>
				<TodoButton
					isActive={filterType === 'all'}
					onClick={() => setFilterType('all')}
				>
					All
				</TodoButton>
				<TodoButton
					onClick={() => setFilterType('done')}
					isActive={filterType === 'done'}
				>
					<Box
						color={filterType !== 'done' ? 'primary.main' : 'text.secondary'}
						sx={{ marginRight: '6px', transition: '0.3s' }}
					>
						<CheckCircle size={24} weight="bold" />
					</Box>
					Done
				</TodoButton>
			</Box>

			<Box sx={{ padding: '24px 0' }}>
				{!filteredTodos || filteredTodos.length === 0 ? (
					<Typography textAlign={'center'}>No results!</Typography>
				) : (
					<List>
						{filteredTodos.map((todo) => (
							<TodoItem
								key={todo.id}
								{...todo}
								onStatusChange={handleToggleTodo}
								onDeleteItem={handleDeleteTodo}
							/>
						))}
					</List>
				)}
			</Box>

			<Formik
				initialValues={{ title: '' }}
				validationSchema={newItemSchema}
				onSubmit={(values, actions) => {
					handleAddTodo(values.title);
					actions.resetForm();
				}}
			>
				{({
					handleSubmit,
					handleChange,
					handleBlur,
					values,
					errors,
					isValid,
				}) => (
					<>
						<Box sx={{ display: 'flex', gap: '12px' }}>
							<TextField
								sx={{ flex: '7' }}
								label="YOUR TASK"
								fullWidth
								value={values.title}
								onChange={handleChange('title')}
								onBlur={handleBlur('title')}
								error={!!errors.title}
								InputLabelProps={{
									sx: {
										color: 'secondary.main',
									},
								}}
							/>{' '}
							<TodoButton
								variant="outlined"
								sx={{ flex: '1 0 80px' }}
								type="submit"
								onClick={() => handleSubmit()}
								disabled={!isValid}
							>
								Add
							</TodoButton>
						</Box>
						{errors?.title && (
							<Typography color="error">{errors.title}</Typography>
						)}
					</>
				)}
			</Formik>
		</Box>
	);
};

export default Todo;
