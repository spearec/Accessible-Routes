import * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import reducers from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MapPage from './components/MapPage';
import BuildingMapComponent from './components/BuildingMapComponent';

const store = createStore(reducers);

const router = createBrowserRouter([
	{
		path: '/',
		element: <MapPage />
	},
	{
		path: '/building',
		element: <BuildingMapComponent />
	}
])

render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
	document.getElementById('root')
);

export default store;