var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIO_Taraco_1 = new ol.format.GeoJSON();
var features_MUNICIPIO_Taraco_1 = format_MUNICIPIO_Taraco_1.readFeatures(json_MUNICIPIO_Taraco_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIO_Taraco_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIO_Taraco_1.addFeatures(features_MUNICIPIO_Taraco_1);
var lyr_MUNICIPIO_Taraco_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNICIPIO_Taraco_1, 
                style: style_MUNICIPIO_Taraco_1,
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIO_Taraco_1.png" /> MUNICIPIO_Taraco'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_MUNICIPIO_Taraco_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_MUNICIPIO_Taraco_1];
lyr_MUNICIPIO_Taraco_1.set('fieldAliases', {});
lyr_MUNICIPIO_Taraco_1.set('fieldImages', {});
lyr_MUNICIPIO_Taraco_1.set('fieldLabels', {});
lyr_MUNICIPIO_Taraco_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});