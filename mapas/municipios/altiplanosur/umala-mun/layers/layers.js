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
            });var format_MUNISALTIPLANOSUR = new ol.format.GeoJSON();
var features_MUNISALTIPLANOSUR = format_MUNISALTIPLANOSUR.readFeatures(geojson_MUNISALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISALTIPLANOSUR = new ol.source.Vector();
jsonSource_MUNISALTIPLANOSUR.addFeatures(features_MUNISALTIPLANOSUR);var lyr_MUNISALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_MUNISALTIPLANOSUR, 
                style: style_MUNISALTIPLANOSUR,
                title: "MUNIS_ALTIPLANO_SUR"
            });var format_UMALA = new ol.format.GeoJSON();
var features_UMALA = format_UMALA.readFeatures(geojson_UMALA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_UMALA = new ol.source.Vector();
jsonSource_UMALA.addFeatures(features_UMALA);var lyr_UMALA = new ol.layer.Vector({
                source:jsonSource_UMALA, 
                style: style_UMALA,
                title: "UMALA"
            });

lyr_REGIONALTIPLANOSUR.setVisible(true);lyr_MUNISALTIPLANOSUR.setVisible(true);lyr_UMALA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANOSUR,lyr_MUNISALTIPLANOSUR,lyr_UMALA];
