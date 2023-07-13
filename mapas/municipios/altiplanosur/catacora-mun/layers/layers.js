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
var format_REGIONALTIPLANOSUR = new ol.format.GeoJSON();
var features_REGIONALTIPLANOSUR = format_REGIONALTIPLANOSUR.readFeatures(geojson_REGIONALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONALTIPLANOSUR = new ol.source.Vector();
jsonSource_REGIONALTIPLANOSUR.addFeatures(features_REGIONALTIPLANOSUR);var lyr_REGIONALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_REGIONALTIPLANOSUR, 
                style: style_REGIONALTIPLANOSUR,
                title: "REGION ALTIPLANO SUR"
            });var format_MUNIIPIOSALTIPLANOSUR = new ol.format.GeoJSON();
var features_MUNIIPIOSALTIPLANOSUR = format_MUNIIPIOSALTIPLANOSUR.readFeatures(geojson_MUNIIPIOSALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNIIPIOSALTIPLANOSUR = new ol.source.Vector();
jsonSource_MUNIIPIOSALTIPLANOSUR.addFeatures(features_MUNIIPIOSALTIPLANOSUR);var lyr_MUNIIPIOSALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_MUNIIPIOSALTIPLANOSUR, 
                style: style_MUNIIPIOSALTIPLANOSUR,
                title: "MUNIIPIOS ALTIPLANO SUR"
            });var format_CATACORA = new ol.format.GeoJSON();
var features_CATACORA = format_CATACORA.readFeatures(geojson_CATACORA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CATACORA = new ol.source.Vector();
jsonSource_CATACORA.addFeatures(features_CATACORA);var lyr_CATACORA = new ol.layer.Vector({
                source:jsonSource_CATACORA, 
                style: style_CATACORA,
                title: "CATACORA"
            });

lyr_REGIONALTIPLANOSUR.setVisible(true);lyr_MUNIIPIOSALTIPLANOSUR.setVisible(true);lyr_CATACORA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANOSUR,lyr_MUNIIPIOSALTIPLANOSUR,lyr_CATACORA];
