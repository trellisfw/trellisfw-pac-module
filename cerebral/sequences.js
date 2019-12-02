"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePACListOpen = undefined;

var _templateObject = _taggedTemplateLiteral(["PACList.open"], ["PACList.open"]);

exports.setCurrentItem = setCurrentItem;
exports.verifySignature = verifySignature;

var _tags = require("cerebral/tags");

var _operators = require("cerebral/operators");

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var handlePACListOpen = exports.handlePACListOpen = [(0, _operators.toggle)((0, _tags.state)(_templateObject))];

function setCurrentItem(_ref) {
  var props = _ref.props,
      state = _ref.state;

  if (props.item) state.set("PACList.current", props.item);
}

function verifySignature(_ref2) {
  var props = _ref2.props,
      state = _ref2.state;

  console.log(" --> verifying signature");
}