var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_YUNGAS = new ol.format.GeoJSON();
var features_YUNGAS = format_YUNGAS.readFeatures(geojson_YUNGAS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_YUNGAS = new ol.source.Vector();
jsonSource_YUNGAS.addFeatures(features_YUNGAS);var lyr_YUNGAS = new ol.layer.Vector({
                source:jsonSource_YUNGAS, 
                style: style_YUNGAS,
                title: "YUNGAS"
            });var format_MUNISYUNGAS = new ol.format.GeoJSON();
var features_MUNISYUNGAS = format_MUNISYUNGAS.readFeatures(geojson_MUNISYUNGAS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISYUNGAS = new ol.source.Vector();
jsonSource_MUNISYUNGAS.addFeatures(features_MUNISYUNGAS);var lyr_MUNISYUNGAS = new ol.layer.Vector({
                source:jsonSource_MUNISYUNGAS, 
                style: style_MUNISYUNGAS,
                title: "MUNIS_YUNGAS"
            });var format_CHULUMANI = new ol.format.GeoJSON();
var features_CHULUMANI = format_CHULUMANI.readFeatures(geojson_CHULUMANI, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CHULUMANI = new ol.source.Vector();
jsonSource_CHULUMANI.addFeatures(features_CHULUMANI);var lyr_CHULUMANI = new ol.layer.Vector({
                source:jsonSource_CHULUMANI, 
                style: style_CHULUMANI,
                title: "CHULUMANI"
            });

lyr_YUNGAS.setVisible(true);lyr_MUNISYUNGAS.setVisible(true);lyr_CHULUMANI.setVisible(true);
var layersList = [baseLayer,lyr_YUNGAS,lyr_MUNISYUNGAS,lyr_CHULUMANI];
