import React, {Component} from 'react';
import '../../css/containers/leaflet.css';
import Leaflet from 'leaflet';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

Leaflet.Icon.Default.imagePath =           ///解决加载图片途径问题
    '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/';
class MapView extends Component {
    constructor() {
        super();

    }

    render() {
        const position = [51.505, -0.09]
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />
                <Marker position={position}>
                    <Popup>
                        <span>
                         A pretty CSS3 popup.<br/>Easily customizable.
                          </span>
                    </Popup>
                </Marker>
            </Map>
        )
    }


}

export default MapView;