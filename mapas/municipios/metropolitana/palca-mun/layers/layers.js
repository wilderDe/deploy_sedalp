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
            });var format_PALCA = new ol.format.GeoJSON();
var features_PALCA = format_PALCA.readFeatures(geojson_PALCA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PALCA = new ol.source.Vector();
jsonSource_PALCA.addFeatures(features_PALCA);var lyr_PALCA = new ol.layer.Vector({
                source:jsonSource_PALCA, 
                style: style_PALCA,
                title: "PALCA"
            });

lyr_REGIONMETROPOLITANA.setVisible(true);lyr_MUNISMETROPOLITANA.setVisible(true);lyr_PALCA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONMETROPOLITANA,lyr_MUNISMETROPOLITANA,lyr_PALCA];
