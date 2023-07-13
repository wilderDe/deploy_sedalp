var size = 0;
var categories_MUNICIPIOSVALLENORTE = {"Aucapata": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Ayata": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Charazani (Gral.Perez)": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Chuma": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Combaya": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Curva": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Mocomoco": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Pelechuco": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Quiabaya": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Sorata": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"Tacacoma": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })],
"": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), 
    })]};
var styleCache_MUNICIPIOSVALLENORTE={}
var style_MUNICIPIOSVALLENORTE = function(feature, resolution){
    var value = feature.get("NOM_MUN");
    var style = categories_MUNICIPIOSVALLENORTE[value];
    if (feature.get("NOM_MUN") !== null) {
        var labelText = String(feature.get("NOM_MUN"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MUNICIPIOSVALLENORTE[key]){
        var text = new ol.style.Text({
              font: '6.5px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_MUNICIPIOSVALLENORTE[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MUNICIPIOSVALLENORTE[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};