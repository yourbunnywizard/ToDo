import { Button, ButtonProps } from '@mui/material';
import { Trash, DotsThreeOutlineVertical } from '@phosphor-icons/react';

const TrashButton = (props: ButtonProps) => (
	<Button
		variant="text"
		sx={{
			minWidth: 'unset',
			padding: '0',
			position: 'relative',
			top: '6px',
			display: 'block',
			width: '24px',
			height: '24px',
			color: 'secondary.main',
			overflow: 'hidden',
			transition: 'color 0.3s',
			'&, &:hover, &:active, &:focus': {
				outline: 'none',
				border: 'none',
			},
			'&:hover': {
				color: 'error.main',
			},
			'& > div': {
				display: 'grid',
				gridTemplateRows: '100%',
				height: '100%',
				transition: 'transform 0.3s',
			},
			'&:hover > div': {
				alignSelf: 'center',
				transform: 'translateY(-100%)',
			},
		}}
		{...props}
	>
		<div>
			<div>
				<DotsThreeOutlineVertical weight="bold" />
			</div>
			<div>
				<Trash weight="bold" />
			</div>
		</div>
	</Button>
);

export default TrashButton;
