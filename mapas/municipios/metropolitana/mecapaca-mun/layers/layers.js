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
var format_REGIONMETROPOLITANA = new ol.format.GeoJSON();
var features_REGIONMETROPOLITANA = format_REGIONMETROPOLITANA.readFeatures(geojson_REGIONMETROPOLITANA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONMETROPOLITANA = new ol.source.Vector();
jsonSource_REGIONMETROPOLITANA.addFeatures(features_REGIONMETROPOLITANA);var lyr_REGIONMETROPOLITANA = new ol.layer.Vector({
                source:jsonSource_REGIONMETROPOLITANA, 
                style: style_REGIONMETROPOLITANA,
                title: "REGION METROPOLITANA"
            });var format_MUNISMETROPOLITANA = new ol.format.GeoJSON();
var features_MUNISMETROPOLITANA = format_MUNISMETROPOLITANA.readFeatures(geojson_MUNISMETROPOLITANA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISMETROPOLITANA = new ol.source.Vector();
jsonSource_MUNISMETROPOLITANA.addFeatures(features_MUNISMETROPOLITANA);var lyr_MUNISMETROPOLITANA = new ol.layer.Vector({
                source:jsonSource_MUNISMETROPOLITANA, 
                style: style_MUNISMETROPOLITANA,
                title: "MUNIS_METROPOLITANA"
            });var format_MECAPACA = new ol.format.GeoJSON();
var features_MECAPACA = format_MECAPACA.readFeatures(geojson_MECAPACA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MECAPACA = new ol.source.Vector();
jsonSource_MECAPACA.addFeatures(features_MECAPACA);var lyr_MECAPACA = new ol.layer.Vector({
                source:jsonSource_MECAPACA, 
                style: style_MECAPACA,
                title: "MECAPACA"
            });

lyr_REGIONMETROPOLITANA.setVisible(true);lyr_MUNISMETROPOLITANA.setVisible(true);lyr_MECAPACA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONMETROPOLITANA,lyr_MUNISMETROPOLITANA,lyr_MECAPACA];
