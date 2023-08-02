import * as React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet'
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';

// Try out OSM API calls
// Call the version

export default function MapComponent() {
    const markers = [
        { loc: { lat: 42.73101, lng: -73.68051 },name: 'Troy Building'},
        { loc: { lat: 42.73089, lng: -73.6797 },name: 'Ricketts Building'},
        { loc: { lat: 42.73089, lng: -73.68168 },name: 'Russell Sage Laboratory'},
        { loc: { lat: 42.72861, lng: -73.68044 },name: 'Johnsson Rowland Science Center'},
        { loc: { lat: 42.73019, lng: -73.6826 },name: 'Amos Eaton'}
    ];
    // const campus_center = [42.7294, -73.6797];
    const campus_center = { lat: 42.7294, lng: -73.6797 };

    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
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
