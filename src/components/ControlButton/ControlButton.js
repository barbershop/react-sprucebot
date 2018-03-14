import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Wrapper = styled.a.attrs({
	className: 'ControlButton control__button'
})`
	cursor: pointer;
	color: ${props => (props.color ? props.color : '#00aac7')};
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

	${props => props.iconLeft && 'margin-right: 0.25em;'};
	${props => props.iconRight && 'margin-left: 0.25em;'};
`

export default class ControlButton extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			iconLeft,
			iconRight,
			color,
			onClick,
			children,
			...props
		} = this.props

		return (
			<Wrapper onClick={onClick} color={color} {...props} tabIndex={0}>
				{iconLeft && <Icon iconLeft={iconLeft}>{iconLeft}</Icon>}
				<span>{children}</span>
				{iconRight && <Icon iconLeft={iconLeft}>{iconRight}</Icon>}
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
