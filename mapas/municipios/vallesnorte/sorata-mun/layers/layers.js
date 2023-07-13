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
var format_REGIONVALLESDELNORTE = new ol.format.GeoJSON();
var features_REGIONVALLESDELNORTE = format_REGIONVALLESDELNORTE.readFeatures(geojson_REGIONVALLESDELNORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONVALLESDELNORTE = new ol.source.Vector();
jsonSource_REGIONVALLESDELNORTE.addFeatures(features_REGIONVALLESDELNORTE);var lyr_REGIONVALLESDELNORTE = new ol.layer.Vector({
                source:jsonSource_REGIONVALLESDELNORTE, 
                style: style_REGIONVALLESDELNORTE,
                title: "REGION VALLES DEL NORTE"
            });var format_MUNICIPIOSVALLENORTE = new ol.format.GeoJSON();
var features_MUNICIPIOSVALLENORTE = format_MUNICIPIOSVALLENORTE.readFeatures(geojson_MUNICIPIOSVALLENORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNICIPIOSVALLENORTE = new ol.source.Vector();
jsonSource_MUNICIPIOSVALLENORTE.addFeatures(features_MUNICIPIOSVALLENORTE);var lyr_MUNICIPIOSVALLENORTE = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOSVALLENORTE, 
                style: style_MUNICIPIOSVALLENORTE,
                title: "MUNICIPIOS VALLE NORTE"
            });var format_SORATA = new ol.format.GeoJSON();
var features_SORATA = format_SORATA.readFeatures(geojson_SORATA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_SORATA = new ol.source.Vector();
jsonSource_SORATA.addFeatures(features_SORATA);var lyr_SORATA = new ol.layer.Vector({
                source:jsonSource_SORATA, 
                style: style_SORATA,
                title: "SORATA"
            });

lyr_REGIONVALLESDELNORTE.setVisible(true);lyr_MUNICIPIOSVALLENORTE.setVisible(true);lyr_SORATA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELNORTE,lyr_MUNICIPIOSVALLENORTE,lyr_SORATA];
