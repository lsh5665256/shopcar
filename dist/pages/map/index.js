(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/map/index"],{

/***/ "./src/pages/map/index.scss":
/*!**********************************!*\
  !*** ./src/pages/map/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/map/index.tsx":
/*!*********************************!*\
  !*** ./src/pages/map/index.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.3@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/map/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapCom = function (_BaseComponent) {
  _inherits(MapCom, _BaseComponent);

  function MapCom() {
    _classCallCheck(this, MapCom);

    var _this = _possibleConstructorReturn(this, (MapCom.__proto__ || Object.getPrototypeOf(MapCom)).apply(this, arguments));

    _this.config = {
      navigationBarTitleText: '一面而就'
    };

    _this.$usedState = ["longitude", "latitude", "location"];

    _this.customComponents = [];
    return _this;
  }

  _createClass(MapCom, [{
    key: "_constructor",
    value: function _constructor() {
      _get(MapCom.prototype.__proto__ || Object.getPrototypeOf(MapCom.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        location: {
          longitude: 0,
          latitude: 0
        }
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      var _this2 = this;

      _taroWeapp2.default.getLocation({
        type: 'wgs84',
        success: function success(res) {
          _this2.setState({
            location: res
          });
        }
      });
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;
      var _state$location = this.__state.location,
          longitude = _state$location.longitude,
          latitude = _state$location.latitude;

      Object.assign(this.__state, {
        longitude: longitude,
        latitude: latitude
      });
      return this.__state;
    }
  }]);

  return MapCom;
}(_taroWeapp.Component);

MapCom.$$events = [];
MapCom.$$componentPath = "pages/map/index";
exports.default = MapCom;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.0.3@@tarojs/taro-weapp/index.js").default.createComponent(MapCom, true));

/***/ })

},[["./src/pages/map/index.tsx","runtime","vendors"]]]);