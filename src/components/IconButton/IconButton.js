import styled from 'styled-components'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Icon from '../Icon/Icon'

const Button = styled.button.attrs({
	className: ({ className }) => `IconButton icon__button ${className || ''}`
})`
	background: none;
	margin: 0;
	padding: 0;
	width: auto;

	&:hover {
		background: none;
	}
`

const IconButton = ({ onClick, children, ...props }) => (
	<Button onClick={onClick} {...props}>
		<Icon>{children}</Icon>
	</Button>
)

IconButton.propTypes = {
	onClick: PropTypes.func,
	children: PropTypes.any
}

export default IconButton
