import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const I = styled.i.attrs({
	className: 'Icon icon material-icons'
})`
	color: ${props => (props.color ? props.color : 'inherit')};
	font-family: 'Material Icons';
	font-weight: normal;
	font-style: normal;
	font-size: 24px; /* Preferred icon size */
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	width: 24px;
	direction: ltr;
	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;
	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;
	/* Support for IE. */
	font-feature-settings: 'liga';
`

const Icon = ({ children, ...props }) => <I {...props}>{children}</I>

Icon.propTypes = {
	color: PropTypes.string
}

export default Icon
