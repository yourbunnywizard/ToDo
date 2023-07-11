import { ListItem, Checkbox, ListItemText, Box } from '@mui/material';
import { ITodoitem } from 'store/slices/todo';
import TrashButton from './TrashButton';

interface ITodoItemProps extends ITodoitem {
	onStatusChange: (id: number, status: boolean) => void;
	onDeleteItem: (id: number) => void;
}

const TodoItem = ({
	id,
	title,
	completed,
	onStatusChange,
	onDeleteItem,
}: ITodoItemProps) => {
	return (
		<ListItem
			key={id}
			dense
			sx={(theme) => ({
				padding: '12px 10px',
				borderRadius: '4px',
				display: 'flex',
				alignItems: 'start',
				'&:hover': { backgroundColor: `${theme.palette.secondary.main}20` },
			})}
		>
			<Box
				display="flex"
				alignItems="start"
				gap="12px"
				onClick={() => onStatusChange(id, completed)}
				sx={{ width: '100%', padding: '0' }}
			>
				<Checkbox
					checked={completed}
					sx={{ padding: '2px', color: 'secondary.main' }}
					color="primary"
				/>
				<ListItemText
					style={{ textDecoration: completed ? 'line-through' : 'none' }}
					primary={title}
				/>
			</Box>
			<TrashButton onClick={() => onDeleteItem(id)} />
		</ListItem>
	);
};

export default TodoItem;
