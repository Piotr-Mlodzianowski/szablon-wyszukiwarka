import React from 'react'
import {DataProvider} from './DataContext';
import Homepage from './components/homepage/homepage'

function App() {
	return (
		<>
			<DataProvider>
				<Homepage />
			</DataProvider>
		</>
	)
}

export default App
