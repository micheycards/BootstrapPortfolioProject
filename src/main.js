import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "ul": {
        "listStyleType": "none"
    },
    "navbar": {
        "marginBottom": 0
    },
    "carousel": {
        "height": 240,
        "marginBottom": 30
    },
    "carousel-caption": {
        "zIndex": 10
    },
    "carousel item": {
        "height": 240,
        "backgroundColor": "#777"
    },
    "carousel-inner > item > img": {
        "position": "absolute",
        "top": 0,
        "left": 0,
        "minWidth": "100%",
        "height": 240
    },
    "marketing": {
        "marginTop": 60,
        "marginRight": "auto",
        "marginBottom": 60,
        "marginLeft": "auto"
    },
    "marketing col-md-4": {
        "textAlign": "center",
        "fontSize": 16
    },
    "marketing col-md-4 glyphicon": {
        "fontSize": 60,
        "backgroundColor": "#EAEAEA",
        "borderRadius": "50%",
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40,
        "color": "#444"
    },
    "html": {
        "position": "relative",
        "minHeight": "100%"
    },
    "body": {
        "marginBottom": 160
    },
    "footer": {
        "position": "absolute",
        "bottom": 0,
        "width": "100%",
        "height": 160,
        "background": "#444",
        "color": "white",
        "textShadow": "1px 1px 1px black",
        "paddingTop": 40,
        "paddingRight": 0,
        "paddingBottom": 40,
        "paddingLeft": 0
    }
});