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
var format_REGIONALTIPLANONORTE = new ol.format.GeoJSON();
var features_REGIONALTIPLANONORTE = format_REGIONALTIPLANONORTE.readFeatures(geojson_REGIONALTIPLANONORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONALTIPLANONORTE = new ol.source.Vector();
jsonSource_REGIONALTIPLANONORTE.addFeatures(features_REGIONALTIPLANONORTE);var lyr_REGIONALTIPLANONORTE = new ol.layer.Vector({
                source:jsonSource_REGIONALTIPLANONORTE, 
                style: style_REGIONALTIPLANONORTE,
                title: "REGION ALTIPLANO NORTE"
            });var format_MUNISALTIPLANONORTE = new ol.format.GeoJSON();
var features_MUNISALTIPLANONORTE = format_MUNISALTIPLANONORTE.readFeatures(geojson_MUNISALTIPLANONORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISALTIPLANONORTE = new ol.source.Vector();
jsonSource_MUNISALTIPLANONORTE.addFeatures(features_MUNISALTIPLANONORTE);var lyr_MUNISALTIPLANONORTE = new ol.layer.Vector({
                source:jsonSource_MUNISALTIPLANONORTE, 
                style: style_MUNISALTIPLANONORTE,
                title: "MUNIS ALTIPLANO NORTE"
            });var format_DESAGUADERO = new ol.format.GeoJSON();
var features_DESAGUADERO = format_DESAGUADERO.readFeatures(geojson_DESAGUADERO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_DESAGUADERO = new ol.source.Vector();
jsonSource_DESAGUADERO.addFeatures(features_DESAGUADERO);var lyr_DESAGUADERO = new ol.layer.Vector({
                source:jsonSource_DESAGUADERO, 
                style: style_DESAGUADERO,
                title: "DESAGUADERO"
            });

lyr_REGIONALTIPLANONORTE.setVisible(true);lyr_MUNISALTIPLANONORTE.setVisible(true);lyr_DESAGUADERO.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANONORTE,lyr_MUNISALTIPLANONORTE,lyr_DESAGUADERO];
