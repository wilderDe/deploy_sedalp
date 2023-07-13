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
var format_REGIONES = new ol.format.GeoJSON();
var features_REGIONES = format_REGIONES.readFeatures(geojson_REGIONES, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_REGIONES = new ol.source.Vector();
jsonSource_REGIONES.addFeatures(features_REGIONES);var lyr_REGIONES = new ol.layer.Vector({
                source:jsonSource_REGIONES, 
                style: style_REGIONES,
                title: "REGIONES"
            });var format_MUNICIPIOS = new ol.format.GeoJSON();
var features_MUNICIPIOS = format_MUNICIPIOS.readFeatures(geojson_MUNICIPIOS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_MUNICIPIOS = new ol.source.Vector();
jsonSource_MUNICIPIOS.addFeatures(features_MUNICIPIOS);var lyr_MUNICIPIOS = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOS, 
                style: style_MUNICIPIOS,
                title: "MUNICIPIOS"
            });var format_CAPITALESDEMUNICIPIOS = new ol.format.GeoJSON();
var features_CAPITALESDEMUNICIPIOS = format_CAPITALESDEMUNICIPIOS.readFeatures(geojson_CAPITALESDEMUNICIPIOS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CAPITALESDEMUNICIPIOS = new ol.source.Vector();
jsonSource_CAPITALESDEMUNICIPIOS.addFeatures(features_CAPITALESDEMUNICIPIOS);var lyr_CAPITALESDEMUNICIPIOS = new ol.layer.Vector({
                source:jsonSource_CAPITALESDEMUNICIPIOS, 
                style: style_CAPITALESDEMUNICIPIOS,
                title: "CAPITALES DE MUNICIPIOS"
            });

lyr_REGIONES.setVisible(true);lyr_MUNICIPIOS.setVisible(true);lyr_CAPITALESDEMUNICIPIOS.setVisible(true);
var layersList = [baseLayer,lyr_REGIONES,lyr_MUNICIPIOS,lyr_CAPITALESDEMUNICIPIOS];
