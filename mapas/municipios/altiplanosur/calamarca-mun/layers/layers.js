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
var format_REGIONALTIPLANOSUR = new ol.format.GeoJSON();
var features_REGIONALTIPLANOSUR = format_REGIONALTIPLANOSUR.readFeatures(geojson_REGIONALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONALTIPLANOSUR = new ol.source.Vector();
jsonSource_REGIONALTIPLANOSUR.addFeatures(features_REGIONALTIPLANOSUR);var lyr_REGIONALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_REGIONALTIPLANOSUR, 
                style: style_REGIONALTIPLANOSUR,
                title: "REGION ALTIPLANO SUR"
            });var format_MUNIIPIOSALTIPLANOSUR = new ol.format.GeoJSON();
var features_MUNIIPIOSALTIPLANOSUR = format_MUNIIPIOSALTIPLANOSUR.readFeatures(geojson_MUNIIPIOSALTIPLANOSUR, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNIIPIOSALTIPLANOSUR = new ol.source.Vector();
jsonSource_MUNIIPIOSALTIPLANOSUR.addFeatures(features_MUNIIPIOSALTIPLANOSUR);var lyr_MUNIIPIOSALTIPLANOSUR = new ol.layer.Vector({
                source:jsonSource_MUNIIPIOSALTIPLANOSUR, 
                style: style_MUNIIPIOSALTIPLANOSUR,
                title: "MUNIIPIOS ALTIPLANO SUR"
            });var format_CALAMARCA = new ol.format.GeoJSON();
var features_CALAMARCA = format_CALAMARCA.readFeatures(geojson_CALAMARCA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CALAMARCA = new ol.source.Vector();
jsonSource_CALAMARCA.addFeatures(features_CALAMARCA);var lyr_CALAMARCA = new ol.layer.Vector({
                source:jsonSource_CALAMARCA, 
                style: style_CALAMARCA,
                title: "CALAMARCA"
            });

lyr_REGIONALTIPLANOSUR.setVisible(true);lyr_MUNIIPIOSALTIPLANOSUR.setVisible(true);lyr_CALAMARCA.setVisible(true);
var layersList = [baseLayer,lyr_REGIONALTIPLANOSUR,lyr_MUNIIPIOSALTIPLANOSUR,lyr_CALAMARCA];
