var size = 0;

var styleCache_HUATAJATA={}
var style_HUATAJATA = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(227,26,28,0.5)"})
    })];
    if (feature.get("NOM_MUN") !== null) {
        var labelText = String(feature.get("NOM_MUN"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_HUATAJATA[key]){
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
        styleCache_HUATAJATA[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_HUATAJATA[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};