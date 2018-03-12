import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Wrapper = styled.a.attrs({
	className: 'ControlButton icon__button'
})`
	cursor: pointer;
	color: #00aac7;
	display: inline-flex;
	align-items: center;
	position: relative;
`

const Icon = styled.i.attrs({
	className: 'material-icons'
})`
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
	direction: ltr;
	/* Support for all WebKit browsers. */
	-webkit-font-smoothing: antialiased;
	/* Support for Safari and Chrome. */
	text-rendering: optimizeLegibility;
	/* Support for Firefox. */
	-moz-osx-font-smoothing: grayscale;
	/* Support for IE. */
	font-feature-settings: 'liga';

	${props => props.iconLeft && 'margin-right: 0.25em;'} ${props =>
		props.iconRight && 'margin-left: 0.25em;'};
`

export default class ControlButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const props = Object.assign({}, this.props)
		const children = props.children

		delete props.className

		return (
			<Wrapper {...props} tabIndex={0}>
				{props.iconLeft && <Icon {...props}>{props.iconLeft}</Icon>}
				{children}
				{props.iconRight && <Icon {...props}>{props.iconRight}</Icon>}
			</Wrapper>
		)
	}
}

ControlButton.propTypes = {
	children: PropTypes.any,
	className: PropTypes.string,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string
}
