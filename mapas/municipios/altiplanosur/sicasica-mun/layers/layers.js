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
            });var format_MUNICIPIOSDELAREGIONALTIPLANOSUR = new ol.format.GeoJSON();
var features_MUNICIPIOSDELAREGIONALTIPLANOSUR = format_MUNICIPIOSDELAREGIONALTIPLANOSUR.readFeatures(geojson_MUNICIPIOSDELAREGIONALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNICIPIOSDELAREGIONALTIPLANOSUR = new ol.source.Vector();
jsonSource_MUNICIPIOSDELAREGIONALTIPLANOSUR.addFeatures(features_MUNICIPIOSDELAREGIONALTIPLANOSUR);var lyr_MUNICIPIOSDELAREGIONALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOSDELAREGIONALTIPLANOSUR, 
                style: style_MUNICIPIOSDELAREGIONALTIPLANOSUR,
                title: "MUNICIPIOS DE LA REGION ALTIPLANO SUR"
            });var format_SICASICA = new ol.format.GeoJSON();
var features_SICASICA = format_SICASICA.readFeatures(geojson_SICASICA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_SICASICA = new ol.source.Vector();
jsonSource_SICASICA.addFeatures(features_SICASICA);var lyr_SICASICA = new ol.layer.Vector({
                source:jsonSource_SICASICA, 
                style: style_SICASICA,
                title: "SICASICA"
            });

lyr_REGIONALTIPLANOSUR.setVisible(true);lyr_MUNICIPIOSDELAREGIONALTIPLANOSUR.setVisible(true);lyr_SICASICA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANOSUR,lyr_MUNICIPIOSDELAREGIONALTIPLANOSUR,lyr_SICASICA];
