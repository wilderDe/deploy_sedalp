var size = 0;
var categories_MUNICIPIOSVALLESSUR = {"Cairoma": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(215,25,28,0.5)"})
    })],
"Cajuata": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(228,79,53,0.5)"})
    })],
"Colquiri": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(242,133,78,0.5)"})
    })],
"Ichoca": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(253,181,105,0.5)"})
    })],
"Inquisivi": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(253,210,139,0.5)"})
    })],
"Licoma (Villa Libertad)": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(254,240,173,0.5)"})
    })],
"Luribay": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(239,248,186,0.5)"})
    })],
"Malla": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(209,236,176,0.5)"})
    })],
"Quime": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(178,224,166,0.5)"})
    })],
"Sapahaqui": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(136,196,170,0.5)"})
    })],
"Yaco": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(89,163,178,0.5)"})
    })],
"": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(43,131,186,0.5)"})
    })]};
var styleCache_MUNICIPIOSVALLESSUR={}
var style_MUNICIPIOSVALLESSUR = function(feature, resolution){
    var value = feature.get("NOM_MUN");
    var style = categories_MUNICIPIOSVALLESSUR[value];
    if (feature.get("NOM_MUN") !== null) {
        var labelText = String(feature.get("NOM_MUN"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MUNICIPIOSVALLESSUR[key]){
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
        styleCache_MUNICIPIOSVALLESSUR[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MUNICIPIOSVALLESSUR[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};