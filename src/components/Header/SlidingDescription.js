import React from 'react'
import styled from 'styled-components'

const Description = styled.a.attrs((props) => {
	return { href: props.href ? props.href : '' }
})`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 2;
	border: 4px solid #fff;
	color: #fff;
	min-width: 12rem;
	width: 50%;
	padding: 2rem;
	font-weight: bold;
	box-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #fff;
	text-align: center;
	cursor: pointer;

	@media only screen and (min-width: 768px) {
		font-size: 1.219rem;
	}

	@media only screen and (min-width: 1920px) {
		background: #fff;
		color: #000;
		border-radius: 30px;
		opacity: 0.9;
		font-size: 1.313rem;
		line-height: 3.5rem;
		padding: 1rem;
	}
`

const SlidingDescription = (props) => {
	return <Description {...props}>{props.children}</Description>
}

export default SlidingDescription
