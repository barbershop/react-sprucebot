'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.a.attrs({
	className: 'ControlButton control__button'
}).withConfig({
	displayName: 'ControlButton__Wrapper',
	componentId: 'jro3dx-0'
})(['cursor:pointer;color:#00aac7;display:inline-flex;align-items:center;position:relative;']);

var Icon = _styledComponents2.default.i.attrs({
	className: 'material-icons'
}).withConfig({
	displayName: 'ControlButton__Icon',
	componentId: 'jro3dx-1'
})(['font-family:\'Material Icons\';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;width:24px;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\'liga\';', ' ', ''], function (props) {
	return props.iconLeft && 'margin-right: 0.25em;';
}, function (props) {
	return props.iconRight && 'margin-left: 0.25em;';
});

var ControlButton = function (_Component) {
	_inherits(ControlButton, _Component);

	function ControlButton(props) {
		_classCallCheck(this, ControlButton);

		return _possibleConstructorReturn(this, (ControlButton.__proto__ || Object.getPrototypeOf(ControlButton)).call(this, props));
	}

	_createClass(ControlButton, [{
		key: 'render',
		value: function render() {
			var props = Object.assign({}, this.props);
			var children = props.children;

			delete props.className;

			return _react2.default.createElement(
				Wrapper,
				_extends({}, props, { tabIndex: 0 }),
				props.iconLeft && _react2.default.createElement(
					Icon,
					props,
					props.iconLeft
				),
				children,
				props.iconRight && _react2.default.createElement(
					Icon,
					props,
					props.iconRight
				)
			);
		}
	}]);

	return ControlButton;
}(_react.Component);

exports.default = ControlButton;


ControlButton.propTypes = {
	children: _propTypes2.default.any,
	className: _propTypes2.default.string,
	iconLeft: _propTypes2.default.string,
	iconRight: _propTypes2.default.string
};