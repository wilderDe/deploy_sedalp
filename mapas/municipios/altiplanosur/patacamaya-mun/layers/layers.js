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
            });var format_PATACAMAYA = new ol.format.GeoJSON();
var features_PATACAMAYA = format_PATACAMAYA.readFeatures(geojson_PATACAMAYA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PATACAMAYA = new ol.source.Vector();
jsonSource_PATACAMAYA.addFeatures(features_PATACAMAYA);var lyr_PATACAMAYA = new ol.layer.Vector({
                source:jsonSource_PATACAMAYA, 
                style: style_PATACAMAYA,
                title: "PATACAMAYA"
            });

lyr_REGIONALTIPLANOSUR.setVisible(true);lyr_MUNIIPIOSALTIPLANOSUR.setVisible(true);lyr_PATACAMAYA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANOSUR,lyr_MUNIIPIOSALTIPLANOSUR,lyr_PATACAMAYA];
