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
var format_REGIONALTIPLANONORTE = new ol.format.GeoJSON();
var features_REGIONALTIPLANONORTE = format_REGIONALTIPLANONORTE.readFeatures(geojson_REGIONALTIPLANONORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONALTIPLANONORTE = new ol.source.Vector();
jsonSource_REGIONALTIPLANONORTE.addFeatures(features_REGIONALTIPLANONORTE);var lyr_REGIONALTIPLANONORTE = new ol.layer.Vector({
                source:jsonSource_REGIONALTIPLANONORTE, 
                style: style_REGIONALTIPLANONORTE,
                title: "REGION ALTIPLANO NORTE"
            });var format_MUNISALTIPLANONORTE = new ol.format.GeoJSON();
var features_MUNISALTIPLANONORTE = format_MUNISALTIPLANONORTE.readFeatures(geojson_MUNISALTIPLANONORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISALTIPLANONORTE = new ol.source.Vector();
jsonSource_MUNISALTIPLANONORTE.addFeatures(features_MUNISALTIPLANONORTE);var lyr_MUNISALTIPLANONORTE = new ol.layer.Vector({
                source:jsonSource_MUNISALTIPLANONORTE, 
                style: style_MUNISALTIPLANONORTE,
                title: "MUNIS ALTIPLANO NORTE"
            });var format_PUCARANI = new ol.format.GeoJSON();
var features_PUCARANI = format_PUCARANI.readFeatures(geojson_PUCARANI, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_PUCARANI = new ol.source.Vector();
jsonSource_PUCARANI.addFeatures(features_PUCARANI);var lyr_PUCARANI = new ol.layer.Vector({
                source:jsonSource_PUCARANI, 
                style: style_PUCARANI,
                title: "PUCARANI"
            });

lyr_REGIONALTIPLANONORTE.setVisible(true);lyr_MUNISALTIPLANONORTE.setVisible(true);lyr_PUCARANI.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANONORTE,lyr_MUNISALTIPLANONORTE,lyr_PUCARANI];
