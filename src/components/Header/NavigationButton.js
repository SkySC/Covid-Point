import React from 'react'
import styled from 'styled-components'
import { FaChevronLeft } from 'react-icons/fa'

const Button = styled(FaChevronLeft)`
	z-index: 1;
	position: absolute;
	top: calc(94vh / 2);
	transform-origin: 50% 50%;
	${({ left }) => left && 'left: 1rem'};
	${({ right }) => right && 'right: 1rem; transform: rotate(180deg)'};

	cursor: pointer;
	color: #000;
	font-size: 2.5rem;
	border-radius: 100%;
	background: #fff;
	padding: 0.5rem;
	box-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #fff;

	@media only screen and (min-width: 1920px) {
		font-size: 3.5rem;
		padding: 0.8rem;
	}
`

const NavigationButton = (props) => {
	return <Button {...props} onClick={props.onClick} />
}

export default NavigationButton
