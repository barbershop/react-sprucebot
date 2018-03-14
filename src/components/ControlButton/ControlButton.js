import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Icon from '../Icon/Icon'

const StyledIconLeft = styled(Icon)`
	margin-right: 0.25em;
`

const StyledIconRight = styled(Icon)`
	margin-left: 0.25em;
`

const Wrapper = styled.a.attrs({
	className: ({ className }) =>
		`ControlButton control__button ${className || ''}`
})`
	cursor: pointer;
	color: ${props => (props.color ? props.color : '#00aac7')};
	display: inline-flex;
	align-items: center;
	position: relative;
`
export default class ControlButton extends Component {
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
			<Wrapper
				onClick={onClick}
				color={color}
				iconLeft={iconLeft}
				iconRight={iconRight}
				{...props}
				tabIndex={0}
			>
				{iconLeft && <StyledIconLeft>{iconLeft}</StyledIconLeft>}
				<span>{children}</span>
				{iconRight && <StyledIconRight>{iconRight}</StyledIconRight>}
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
