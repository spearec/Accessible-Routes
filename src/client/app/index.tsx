import * as React from 'react';
import { render } from 'react-dom';
import './index.css';
import reducers from './reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MapComponent from './components/MapComponent';
import PathSelectComponent from './components/PathSelectComponent';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<div className="row">
		<div className="column"><MapComponent /></div>
		<div className="columnRight"><PathSelectComponent /></div>
		</div>
	</Provider>,
	document.getElementById('root')
);

export default store;