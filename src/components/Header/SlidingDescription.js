import React from 'react'
import styled from 'styled-components'

const Description = styled.span`
	z-index: 1;
	border: 4px solid #fff;
	color: #fff;
	min-width: 12rem;
	max-width: 25rem;
	padding: 1rem;
	font-weight: bold;
	box-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #fff;

	@media (width > 375px) {
	}
`

const SlidingDescription = (props) => {
	return <Description>{props.children}</Description>
}

export default SlidingDescription
