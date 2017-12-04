import React, {Component} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
class MapView extends Component {
    constructor() {
        super();
        this.map = null;
        this.view = null;
    }
    render() {
        return (<div id="map"></div>);
    }
    componentDidMount() {
        this.view = new View({
            center: [0, 0],
            zoom: 2
        });
        this.map = new Map({
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            target: 'map',
            view: this.view
        });
    }
}
export default MapView;