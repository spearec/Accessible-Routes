import * as React from 'react';
import MapComponent from './MapComponent';
import PathSelectComponent from './PathSelectComponent';

export default function App() {
  return (
    <div className="Page">
        <div className="row">
		<div className="column"><MapComponent /></div>
		<div className="columnRight"><PathSelectComponent /></div>
        </div>
    </div>
  );
}
