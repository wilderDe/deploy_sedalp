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
            });var format_YACO = new ol.format.GeoJSON();
var features_YACO = format_YACO.readFeatures(geojson_YACO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_YACO = new ol.source.Vector();
jsonSource_YACO.addFeatures(features_YACO);var lyr_YACO = new ol.layer.Vector({
                source:jsonSource_YACO, 
                style: style_YACO,
                title: "YACO"
            });

lyr_REGIONVALLESDELSUR.setVisible(true);lyr_MUNICIPIOSVALLESSUR.setVisible(true);lyr_YACO.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELSUR,lyr_MUNICIPIOSVALLESSUR,lyr_YACO];
