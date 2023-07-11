import { Button, ButtonProps, styled } from '@mui/material';

interface ITodoButtonProps extends ButtonProps {
	isActive?: boolean;
}

export const TodoButton = styled(Button)<ITodoButtonProps>(
	({ theme, isActive }) => ({
		flex: '1',
		color: theme.palette.text[!isActive ? 'primary' : 'secondary'],
		borderWidth: '1px',
		borderStyle: 'solid',
		borderColor: '#C4C4C4',
		backgroundColor: !isActive ? 'transparent' : theme.palette.primary.main,
		'&:hover': {
			color: theme.palette.text.secondary,
			backgroundColor: theme.palette.primary.main,
		},
		'&:hover > div': {
			color: theme.palette.text.secondary,
		},
	})
);
