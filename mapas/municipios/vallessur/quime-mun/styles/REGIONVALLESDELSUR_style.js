var size = 0;

var styleCache_REGIONVALLESDELSUR={}
var style_REGIONVALLESDELSUR = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(13,223,41,1.0)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 7}), 
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_REGIONVALLESDELSUR[key]){
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
        styleCache_REGIONVALLESDELSUR[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_REGIONVALLESDELSUR[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};