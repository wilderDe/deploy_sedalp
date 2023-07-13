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
            });var format_MUNISAMAZONIA = new ol.format.GeoJSON();
var features_MUNISAMAZONIA = format_MUNISAMAZONIA.readFeatures(geojson_MUNISAMAZONIA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISAMAZONIA = new ol.source.Vector();
jsonSource_MUNISAMAZONIA.addFeatures(features_MUNISAMAZONIA);var lyr_MUNISAMAZONIA = new ol.layer.Vector({
                source:jsonSource_MUNISAMAZONIA, 
                style: style_MUNISAMAZONIA,
                title: "MUNIS_AMAZONIA"
            });var format_TIPUANI = new ol.format.GeoJSON();
var features_TIPUANI = format_TIPUANI.readFeatures(geojson_TIPUANI, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_TIPUANI = new ol.source.Vector();
jsonSource_TIPUANI.addFeatures(features_TIPUANI);var lyr_TIPUANI = new ol.layer.Vector({
                source:jsonSource_TIPUANI, 
                style: style_TIPUANI,
                title: "TIPUANI"
            });

lyr_REGIONDELAAMAZONIA.setVisible(true);lyr_MUNISAMAZONIA.setVisible(true);lyr_TIPUANI.setVisible(true);
var layersList = [baseLayer,lyr_REGIONDELAAMAZONIA,lyr_MUNISAMAZONIA,lyr_TIPUANI];
