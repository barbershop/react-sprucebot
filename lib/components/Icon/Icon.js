'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var I = _styledComponents2.default.i.attrs({
	className: 'Icon icon material-icons'
}).withConfig({
	displayName: 'Icon__I',
	componentId: 's1r0bu8t-0'
})(['color:', ';font-family:\'Material Icons\';font-weight:normal;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;width:24px;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\'liga\';'], function (props) {
	return props.color ? props.color : 'inherit';
});

var Icon = function Icon(_ref) {
	var children = _ref.children,
	    props = _objectWithoutProperties(_ref, ['children']);

	return _react2.default.createElement(
		I,
		props,
		children
	);
};

Icon.propTypes = {
	color: _propTypes2.default.string
};

exports.default = Icon;