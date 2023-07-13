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
            });

lyr_REGIONMETROPOLITANA.setVisible(true);lyr_MUNISMETROPOLITANA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONMETROPOLITANA,lyr_MUNISMETROPOLITANA];
