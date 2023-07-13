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
var format_REGIONVALLESDELSUR = new ol.format.GeoJSON();
var features_REGIONVALLESDELSUR = format_REGIONVALLESDELSUR.readFeatures(geojson_REGIONVALLESDELSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONVALLESDELSUR = new ol.source.Vector();
jsonSource_REGIONVALLESDELSUR.addFeatures(features_REGIONVALLESDELSUR);var lyr_REGIONVALLESDELSUR = new ol.layer.Vector({
                source:jsonSource_REGIONVALLESDELSUR, 
                style: style_REGIONVALLESDELSUR,
                title: "REGION VALLES DEL SUR"
            });var format_MUNICIPIOSVALLESSUR = new ol.format.GeoJSON();
var features_MUNICIPIOSVALLESSUR = format_MUNICIPIOSVALLESSUR.readFeatures(geojson_MUNICIPIOSVALLESSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNICIPIOSVALLESSUR = new ol.source.Vector();
jsonSource_MUNICIPIOSVALLESSUR.addFeatures(features_MUNICIPIOSVALLESSUR);var lyr_MUNICIPIOSVALLESSUR = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOSVALLESSUR, 
                style: style_MUNICIPIOSVALLESSUR,
                title: "MUNICIPIOS VALLES SUR"
            });var format_LICOMA = new ol.format.GeoJSON();
var features_LICOMA = format_LICOMA.readFeatures(geojson_LICOMA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_LICOMA = new ol.source.Vector();
jsonSource_LICOMA.addFeatures(features_LICOMA);var lyr_LICOMA = new ol.layer.Vector({
                source:jsonSource_LICOMA, 
                style: style_LICOMA,
                title: "LICOMA"
            });

lyr_REGIONVALLESDELSUR.setVisible(true);lyr_MUNICIPIOSVALLESSUR.setVisible(true);lyr_LICOMA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELSUR,lyr_MUNICIPIOSVALLESSUR,lyr_LICOMA];
