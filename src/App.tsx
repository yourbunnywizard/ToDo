import theme from 'styles/theme';
import Todo from './components/Todo';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store/store';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<StoreProvider store={store}>
				<PersistGate persistor={persistor}>
					<Box
						sx={{
							width: 'auto',
							maxWidth: 'max(50%, 500px)',
							margin: '0 auto',
							padding: '60px',
							maxHeight: '100vh',
							overflow: 'auto',
							scrollbarGutter: 'stable',
							backgroundColor: 'background.default',
							color: 'text.primary',
						}}
					>
						<Typography variant="h1" textAlign="center" marginBottom="50px">
							ToDo list
						</Typography>
						<Todo />
					</Box>
				</PersistGate>
			</StoreProvider>
		</ThemeProvider>
	);
}

export default App;
