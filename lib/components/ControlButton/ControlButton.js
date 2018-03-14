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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledIconLeft = (0, _styledComponents2.default)(_Icon2.default).withConfig({
	displayName: 'ControlButton__StyledIconLeft',
	componentId: 'jro3dx-0'
})(['margin-right:0.25em;']);

var StyledIconRight = (0, _styledComponents2.default)(_Icon2.default).withConfig({
	displayName: 'ControlButton__StyledIconRight',
	componentId: 'jro3dx-1'
})(['margin-left:0.25em;']);

var Wrapper = _styledComponents2.default.a.attrs({
	className: function className(_ref) {
		var _className = _ref.className;
		return 'ControlButton control__button ' + (_className || '');
	}
}).withConfig({
	displayName: 'ControlButton__Wrapper',
	componentId: 'jro3dx-2'
})(['cursor:pointer;display:inline-flex;align-items:center;position:relative;']);

var ControlButton = function (_Component) {
	_inherits(ControlButton, _Component);

	function ControlButton() {
		_classCallCheck(this, ControlButton);

		return _possibleConstructorReturn(this, (ControlButton.__proto__ || Object.getPrototypeOf(ControlButton)).apply(this, arguments));
	}

	_createClass(ControlButton, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    iconLeft = _props.iconLeft,
			    iconRight = _props.iconRight,
			    onClick = _props.onClick,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['iconLeft', 'iconRight', 'onClick', 'children']);

			return _react2.default.createElement(
				Wrapper,
				_extends({
					onClick: onClick,
					iconLeft: iconLeft,
					iconRight: iconRight
				}, props, {
					tabIndex: 0
				}),
				iconLeft && _react2.default.createElement(
					StyledIconLeft,
					null,
					iconLeft
				),
				_react2.default.createElement(
					'span',
					null,
					children
				),
				iconRight && _react2.default.createElement(
					StyledIconRight,
					null,
					iconRight
				)
			);
		}
	}]);

	return ControlButton;
}(_react.Component);

exports.default = ControlButton;


ControlButton.propTypes = {
	onClick: _propTypes2.default.func,
	children: _propTypes2.default.any,
	className: _propTypes2.default.string,
	iconLeft: _propTypes2.default.string,
	iconRight: _propTypes2.default.string
};