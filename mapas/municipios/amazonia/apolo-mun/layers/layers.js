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
var format_REGIONDELAAMAZONIA = new ol.format.GeoJSON();
var features_REGIONDELAAMAZONIA = format_REGIONDELAAMAZONIA.readFeatures(geojson_REGIONDELAAMAZONIA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONDELAAMAZONIA = new ol.source.Vector();
jsonSource_REGIONDELAAMAZONIA.addFeatures(features_REGIONDELAAMAZONIA);var lyr_REGIONDELAAMAZONIA = new ol.layer.Vector({
                source:jsonSource_REGIONDELAAMAZONIA, 
                style: style_REGIONDELAAMAZONIA,
                title: "REGION DE LA AMAZONIA"
            });var format_MUNICIPIOSAMAZONIA = new ol.format.GeoJSON();
var features_MUNICIPIOSAMAZONIA = format_MUNICIPIOSAMAZONIA.readFeatures(geojson_MUNICIPIOSAMAZONIA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNICIPIOSAMAZONIA = new ol.source.Vector();
jsonSource_MUNICIPIOSAMAZONIA.addFeatures(features_MUNICIPIOSAMAZONIA);var lyr_MUNICIPIOSAMAZONIA = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOSAMAZONIA, 
                style: style_MUNICIPIOSAMAZONIA,
                title: "MUNICIPIOS AMAZONIA"
            });var format_APOLO = new ol.format.GeoJSON();
var features_APOLO = format_APOLO.readFeatures(geojson_APOLO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_APOLO = new ol.source.Vector();
jsonSource_APOLO.addFeatures(features_APOLO);var lyr_APOLO = new ol.layer.Vector({
                source:jsonSource_APOLO, 
                style: style_APOLO,
                title: "APOLO"
            });

lyr_REGIONDELAAMAZONIA.setVisible(true);lyr_MUNICIPIOSAMAZONIA.setVisible(true);lyr_APOLO.setVisible(true);
var layersList = [baseLayer,lyr_REGIONDELAAMAZONIA,lyr_MUNICIPIOSAMAZONIA,lyr_APOLO];
