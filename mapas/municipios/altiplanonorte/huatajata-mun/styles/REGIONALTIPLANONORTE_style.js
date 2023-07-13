var size = 0;

var styleCache_REGIONALTIPLANONORTE={}
var style_REGIONALTIPLANONORTE = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(51,160,44,0.5)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}), 
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_REGIONALTIPLANONORTE[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_REGIONALTIPLANONORTE[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_REGIONALTIPLANONORTE[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};