"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardEnum = exports.backColorGrayList = exports.backColorList = exports.backColor = exports.useStyles = undefined;

var _colors = require("@material-ui/core/colors");

var useStyles = exports.useStyles = function useStyles(theme) {
  return {
    hidden: {
      display: "none"
    },
    pill: {
      textAlign: "center",
      padding: "5px",
      marginTop: "5px",
      marginBottom: "5px",
      alignItems: "center",
      borderRadius: "3px",
      color: "#FFFFFF",
      textShadow: "1px 1px #000000"
    },
    container: {
      paddingTop: '5px'
    },
    card: {
      flexGrow: 1,
      background: '#E9E8E8'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: _colors.green[500]
    },
    pacList: {
      width: '100%',
      paddingTop: '5px',
      maxWidth: 375
    },
    button: {
      margin: theme.spacing(1)
    }
  };
};

var backColor = exports.backColor = {
  "tl1": "#FF3333",
  "tl2": "#FF9933",
  "tl3": "#00CC66"
};

// pastel colors, red, orange, green
var backColorList = exports.backColorList = {
  "tl1": "#F9B7B2",
  "tl2": "#FCDAC1",
  "tl3": "#E2EFCB"
};

var backColorGrayList = exports.backColorGrayList = {
  "tl1": "#788696",
  "tl2": "#475D6F",
  "tl3": "#1A324B"
};

var CardEnum = exports.CardEnum = Object.freeze({
  "OSC": "Oblivious Smart Contract",
  "Set": "Settings",
  "Run": "Running since ",
  "VerCode": "Verified Code",
  "VerUser": "Verified User",
  "Blockchain": "Blockchain Connected" });