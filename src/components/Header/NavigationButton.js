import React from 'react'
import styled from 'styled-components'
import { FaChevronLeft } from 'react-icons/fa'

const Button = styled(FaChevronLeft)`
	position: absolute;
	top: calc(94vh / 2);
	${({ left }) => left && 'left: 1rem'};
	${({ right }) => right && 'right: 1rem; transform: rotate(180deg)'};

	cursor: pointer;
	color: #000;
	font-size: 2rem;
	border-radius: 50%;
	background: #fff;
	padding: 0.5rem;
`

const NavigationButton = (props) => {
	return (
		<Button left={props.left} right={props.right} onClick={props.onClick} />
	)
}

export default NavigationButton
