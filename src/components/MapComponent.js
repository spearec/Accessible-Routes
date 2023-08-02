import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Try out OSM API calls
// Call the version

export default function MapComponent() {
    const markers = [
        { loc: [42.73101, -73.68051], name: 'Troy Building'},
        { loc: [42.73089, -73.6797], name: 'Ricketts Building'},
        { loc: [42.73089, -73.68168], name: 'Russell Sage Laboratory'},
        { loc: [42.72861, -73.68044], name: 'Johnsson Rowland Science Center'},
        { loc: [42.73019, -73.6826], name: 'Amos Eaton'}
    ];
    const campus_center = [42.7294, -73.6797];

    const customIcon = new Icon({
        iconUrl: require('./icon.png'),
        iconSize: [38, 38]
    });

    return (
        <MapContainer center={campus_center} zoom={13} style={{width:"87%",height:"100vh"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup chunkedLoading>
                {markers.map(marker => (
                    <Marker position={marker.loc} icon={customIcon}>
                        <Popup>{marker.name}</Popup>
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}            
