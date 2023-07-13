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
            });var format_MUNISVALLENORTE = new ol.format.GeoJSON();
var features_MUNISVALLENORTE = format_MUNISVALLENORTE.readFeatures(geojson_MUNISVALLENORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISVALLENORTE = new ol.source.Vector();
jsonSource_MUNISVALLENORTE.addFeatures(features_MUNISVALLENORTE);var lyr_MUNISVALLENORTE = new ol.layer.Vector({
                source:jsonSource_MUNISVALLENORTE, 
                style: style_MUNISVALLENORTE,
                title: "MUNIS_VALLE_NORTE"
            });var format_CURVA = new ol.format.GeoJSON();
var features_CURVA = format_CURVA.readFeatures(geojson_CURVA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CURVA = new ol.source.Vector();
jsonSource_CURVA.addFeatures(features_CURVA);var lyr_CURVA = new ol.layer.Vector({
                source:jsonSource_CURVA, 
                style: style_CURVA,
                title: "CURVA"
            });

lyr_REGIONVALLESDELNORTE.setVisible(true);lyr_MUNISVALLENORTE.setVisible(true);lyr_CURVA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELNORTE,lyr_MUNISVALLENORTE,lyr_CURVA];
