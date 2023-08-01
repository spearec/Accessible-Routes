import { useMap, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react';
import "./mapSample.module.css";
//import { Marker } from 'leaflet';
//import L from 'leaflet';

// Try out OSM API calls
// Call the version

function MyMap() 
{
    const Troy = [42.73101, -73.68051]
    const Ricketts = [42.73089, -73.6797]
    const SageLab = [42.73089, -73.68168]
    const JRowl = [42.72861, -73.68044]
    const AEaton = [42.73019, -73.6826]
    const campus_center = [42.7294, -73.6797]
    return (
        <MapContainer center={campus_center} zoom={17} style={{width:"87%",height:"100vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={Troy}>
                <Popup> Troy Building </Popup>
            </Marker>
            <Marker position={Ricketts}>
                <Popup> Ricketts Building </Popup>
            </Marker>
            <Marker position={SageLab}>
                <Popup> Russell Sage Laboratory  </Popup>
            </Marker>
            <Marker position={JRowl}>
                <Popup> Johnsson Rowland Science Center</Popup>
            </Marker>
            <Marker position={AEaton}>
                <Popup> Amos Eaton </Popup>
            </Marker>

        </MapContainer>

    );
}
export default MyMap;

            
