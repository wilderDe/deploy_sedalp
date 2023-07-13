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
            });var format_MUNISVALLESUR = new ol.format.GeoJSON();
var features_MUNISVALLESUR = format_MUNISVALLESUR.readFeatures(geojson_MUNISVALLESUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISVALLESUR = new ol.source.Vector();
jsonSource_MUNISVALLESUR.addFeatures(features_MUNISVALLESUR);var lyr_MUNISVALLESUR = new ol.layer.Vector({
                source:jsonSource_MUNISVALLESUR, 
                style: style_MUNISVALLESUR,
                title: "MUNIS_VALLE_SUR"
            });var format_LURIBAY = new ol.format.GeoJSON();
var features_LURIBAY = format_LURIBAY.readFeatures(geojson_LURIBAY, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_LURIBAY = new ol.source.Vector();
jsonSource_LURIBAY.addFeatures(features_LURIBAY);var lyr_LURIBAY = new ol.layer.Vector({
                source:jsonSource_LURIBAY, 
                style: style_LURIBAY,
                title: "LURIBAY"
            });

lyr_REGIONVALLESDELSUR.setVisible(true);lyr_MUNISVALLESUR.setVisible(true);lyr_LURIBAY.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELSUR,lyr_MUNISVALLESUR,lyr_LURIBAY];
