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
            });var format_CORIPATA = new ol.format.GeoJSON();
var features_CORIPATA = format_CORIPATA.readFeatures(geojson_CORIPATA, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_CORIPATA = new ol.source.Vector();
jsonSource_CORIPATA.addFeatures(features_CORIPATA);var lyr_CORIPATA = new ol.layer.Vector({
                source:jsonSource_CORIPATA, 
                style: style_CORIPATA,
                title: "CORIPATA"
            });

lyr_YUNGAS.setVisible(true);lyr_MUNISYUNGAS.setVisible(true);lyr_CORIPATA.setVisible(true);
var layersList = [baseLayer,lyr_YUNGAS,lyr_MUNISYUNGAS,lyr_CORIPATA];
