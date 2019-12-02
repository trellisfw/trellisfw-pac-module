"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cerebral = require("cerebral");

var _stateTree = require("./stateTree");

var _stateTree2 = _interopRequireDefault(_stateTree);

var _sequences = require("./sequences");

var sequences = _interopRequireWildcard(_sequences);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _cerebral.Module)({
  state: _stateTree2.default,
  sequences: sequences
}); //"src/index.js"