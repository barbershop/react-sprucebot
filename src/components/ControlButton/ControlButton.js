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
	display: inline-flex;
	align-items: center;
	position: relative;
`
const ControlButton = ({
	iconLeft,
	iconRight,
	onClick,
	children,
	...props
}) => (
	<Wrapper
		onClick={onClick}
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

ControlButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any,
	className: PropTypes.string,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string
}

export default ControlButton
