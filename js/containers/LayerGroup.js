import Group from 'ol/layer/group';
import Geojson from 'ol/format/geojson';
import VectorS from 'ol/source/vector';
import VectorL from 'ol/layer/vector';
import Stroke from 'ol/style/stroke';
import Circle from 'ol/style/circle';
import Fill from 'ol/style/fill';
import Style from 'ol/style/style';

class LayerGroup{
    constructor(){
        this.Layers = new Group({
            title:'Overlayers',
            layers:[

            ]
        });
    }
    addLayer(result){
        let features = new Geojson().readFeatures(result.data.geom, {featureProjection: 'EPSG:4326'});
        const layer = new VectorL({
            title:result.data.name,
            visible:true,
            source: new VectorS({
                features: features
            }),
            style:function () {
                return new Style({
                    stroke: new Stroke({
                        color: '#DEB887',
                        width: 2
                    }),
                    fill:new Stroke({
                        color:'#DEB887',
                        width:2
                    }),
                    image: new Circle({
                        radius: 7,
                        fill: new Fill({
                            color: '#DEB887'
                        })
                    })
                })
            }
        });
        this.Layers.getLayers().push(layer)
        return layer;
    }
    setVisible(name,is){
        const layer = this.getLayer(name);
        layer.setVisible(is);
    }
    getLayer(name){
        let rlayer = null;
        this.Layers.getLayers().forEach(
            (layer) =>{
                if(layer.get('title') == name ){
                    rlayer = layer;
                }
            }
        )
        return rlayer;
    }


}

const layerG = new LayerGroup();
export default layerG;