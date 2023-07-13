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
var format_YUNGAS = new ol.format.GeoJSON();
var features_YUNGAS = format_YUNGAS.readFeatures(geojson_YUNGAS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_YUNGAS = new ol.source.Vector();
jsonSource_YUNGAS.addFeatures(features_YUNGAS);var lyr_YUNGAS = new ol.layer.Vector({
                source:jsonSource_YUNGAS, 
                style: style_YUNGAS,
                title: "YUNGAS"
            });var format_MUNISYUNGAS = new ol.format.GeoJSON();
var features_MUNISYUNGAS = format_MUNISYUNGAS.readFeatures(geojson_MUNISYUNGAS, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNISYUNGAS = new ol.source.Vector();
jsonSource_MUNISYUNGAS.addFeatures(features_MUNISYUNGAS);var lyr_MUNISYUNGAS = new ol.layer.Vector({
                source:jsonSource_MUNISYUNGAS, 
                style: style_MUNISYUNGAS,
                title: "MUNIS_YUNGAS"
            });var format_IRUPANA = new ol.format.GeoJSON();
var features_IRUPANA = format_IRUPANA.readFeatures(geojson_IRUPANA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_IRUPANA = new ol.source.Vector();
jsonSource_IRUPANA.addFeatures(features_IRUPANA);var lyr_IRUPANA = new ol.layer.Vector({
                source:jsonSource_IRUPANA, 
                style: style_IRUPANA,
                title: "IRUPANA"
            });

lyr_YUNGAS.setVisible(true);lyr_MUNISYUNGAS.setVisible(true);lyr_IRUPANA.setVisible(true);
var layersList = [baseLayer,lyr_YUNGAS,lyr_MUNISYUNGAS,lyr_IRUPANA];
