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
var format_AMAZONIAWGSGRADOS = new ol.format.GeoJSON();
var features_AMAZONIAWGSGRADOS = format_AMAZONIAWGSGRADOS.readFeatures(geojson_AMAZONIAWGSGRADOS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_AMAZONIAWGSGRADOS = new ol.source.Vector();
jsonSource_AMAZONIAWGSGRADOS.addFeatures(features_AMAZONIAWGSGRADOS);var lyr_AMAZONIAWGSGRADOS = new ol.layer.Vector({
                source:jsonSource_AMAZONIAWGSGRADOS, 
                style: style_AMAZONIAWGSGRADOS,
                title: "AMAZONIA_WGS_GRADOS"
            });

lyr_AMAZONIAWGSGRADOS.setVisible(true);
var layersList = [baseLayer,lyr_AMAZONIAWGSGRADOS];
