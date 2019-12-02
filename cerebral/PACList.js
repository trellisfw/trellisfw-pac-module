"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["PACList.open"], ["PACList.open"]),
    _templateObject2 = _taggedTemplateLiteral(["pacs.records"], ["pacs.records"]),
    _templateObject3 = _taggedTemplateLiteral(["PACList.verifySignature"], ["PACList.verifySignature"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _AssignmentTurnedIn = require("@material-ui/icons/AssignmentTurnedIn");

var _AssignmentTurnedIn2 = _interopRequireDefault(_AssignmentTurnedIn);

var _react3 = require("@cerebral/react");

var _tags = require("cerebral/tags");

var _styles = require("@material-ui/core/styles");

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require("@material-ui/core/ListItemText");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _ListItemAvatar = require("@material-ui/core/ListItemAvatar");

var _ListItemAvatar2 = _interopRequireDefault(_ListItemAvatar);

var _Avatar = require("@material-ui/core/Avatar");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _config = require("./config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // "components/PACList.jsx"


var PACList = function (_React$Component) {
  _inherits(PACList, _React$Component);

  function PACList() {
    _classCallCheck(this, PACList);

    return _possibleConstructorReturn(this, (PACList.__proto__ || Object.getPrototypeOf(PACList)).apply(this, arguments));
  }

  _createClass(PACList, [{
    key: "renderPAC",
    value: function renderPAC(params) {
      var pac = params.pac,
          classes = params.classes;

      if (pac) {
        var avaColor = { backgroundColor: _config.backColor[pac.trust_level] };
        var listColor = { backgroundColor: _config.backColorList[pac.trust_level] };
        return _react2.default.createElement(
          "div",
          { key: pac.id },
          _react2.default.createElement(
            _ListItem2.default,
            { className: "" + classes.pill, style: listColor,
              key: pac.id
            },
            _react2.default.createElement(
              _ListItemAvatar2.default,
              null,
              _react2.default.createElement(
                _Avatar2.default,
                { style: avaColor },
                pac.label
              )
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: pac.title || null,
              secondary: pac.timestamp || null }),
            _react2.default.createElement(
              _Button2.default,
              {
                variant: "outlined",
                color: "default",
                size: "small",
                className: classes.button,
                startIcon: _react2.default.createElement(_AssignmentTurnedIn2.default, null),
                onClick: this.props.verifySignature
              },
              "Verify"
            )
          )
        );
      } else {
        return null;
      }
    } //renderPAC

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = this.props.classes;


      return _react2.default.createElement(
        "div",
        { className: !this.props.open ? classes.hidden : classes.pill },
        _react2.default.createElement(
          _List2.default,
          { className: classes.pacList },
          Object.keys(this.props.pacs || {}).map(function (pacid) {
            return _this2.renderPAC({
              pac: _this2.props.pacs[pacid],
              classes: classes
            });
          })
        )
      );
    } //render

  }]);

  return PACList;
}(_react2.default.Component);

exports.default = (0, _react3.connect)({
  open: (0, _tags.state)(_templateObject),
  pacs: (0, _tags.state)(_templateObject2),

  verifySignature: (0, _tags.signal)(_templateObject3)
}, (0, _styles.withStyles)(_config.useStyles, { withTheme: true })(PACList));