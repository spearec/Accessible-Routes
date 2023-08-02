import * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import reducers from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MapComponent from './components/MapComponent';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<MapComponent />
	</Provider>,
	document.getElementById('root')
);

export default store;