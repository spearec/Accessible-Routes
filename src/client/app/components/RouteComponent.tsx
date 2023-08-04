import * as React from 'react';
import { Route, Router } from 'react-router-dom';
import MapPage from './MapPage';
import BuildingMapComponent from './BuildingMapComponent';

interface RouteProps {

}

export default function RouteComponent() {
    return (
        <div>
            <Router location={''} navigator={undefined}>
                    <Route path='/' element={<MapPage />} />
                    <Route path='/building' element={<BuildingMapComponent />} />
            </Router>
        </div>
    );
}