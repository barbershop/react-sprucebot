'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
var ControlButton = function ControlButton(_ref2) {
	var iconLeft = _ref2.iconLeft,
	    iconRight = _ref2.iconRight,
	    onClick = _ref2.onClick,
	    children = _ref2.children,
	    props = _objectWithoutProperties(_ref2, ['iconLeft', 'iconRight', 'onClick', 'children']);

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
};

ControlButton.propTypes = {
	onClick: _propTypes2.default.func,
	children: _propTypes2.default.any,
	className: _propTypes2.default.string,
	iconLeft: _propTypes2.default.string,
	iconRight: _propTypes2.default.string
};

exports.default = ControlButton;