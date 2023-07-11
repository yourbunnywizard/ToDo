import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 320,
			sm: 480,
			md: 768,
			lg: 1240,
			xl: 1920,
		},
	},
	palette: {
		primary: {
			main: '#5DCB42',
		},
		secondary: {
			main: '#C4C4C4',
			light: '#F2EDED',
		},
		error: {
			main: '#F33A3D',
		},
		success: {
			main: '#5DCB42',
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: '#000',
			secondary: '#fff',
		},
	},
});

//typography settings
theme.typography.body1 = {
	htmlFontSize: 16,
	fontSize: 14,
	fontWeight: 400,
	[theme.breakpoints.up('md')]: {
		fontSize: '16px',
	},
	[theme.breakpoints.up('xl')]: {
		fontSize: '20px',
	},
};

theme.typography.h1 = {
	fontSize: '18px',
	fontWeight: 700,
	[theme.breakpoints.up('md')]: {
		fontSize: '28px',
	},
	[theme.breakpoints.up('xl')]: {
		fontSize: '32px',
	},
};
theme.typography.button = {
	fontSize: '14px',
	fontWeight: 500,
	[theme.breakpoints.up('md')]: {
		fontSize: '16px',
	},
};

export default theme;
