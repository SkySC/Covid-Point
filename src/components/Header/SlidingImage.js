import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
	min-width: 100%;
	min-height: 100%;

	transition: transform 0.4s ease;
	${({ slideBy }) => `transform: translateX(${slideBy}%)`};

	display: flex;
	justify-content: center;
	align-items: center;

	// gradient overlay for each image
	&::before {
		content: '';
		z-index: 2;
		position: absolute;
		width: 80%;
		height: 80%;
		background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
		border-radius: 30px 30px 30px 0;
		mix-blend-mode: overlay;
		opacity: 0.7;
	}

	// background gradient for each image
	&::after {
		content: '';
		position: absolute;
		z-index: -1;
		border-radius: 30px 30px 30px 0;
		background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
		width: 84%;
		height: 80%;
	}

	@media only screen and (min-width: 1920px) {
		width: 100vw;
		height: 100vh;

		&::before {
			width: 100vw;
			height: 100vh;
			border-radius: 0;
		}

		&::after {
			display: none;
		}
	}
`

const Image = styled.img`
	z-index: 1;
	position: absolute;
	inset: 0;
	margin: auto;
	width: 80%;
	height: 80%;
	border-radius: 30px 30px 30px 0;
	box-shadow: 6px 10px 15px rgba(0, 0, 0, 0.25);
	object-fit: cover;

	@media only screen and (min-width: 1920px) {
		width: 100%;
		height: 100%;
		border-radius: 0;
		box-shadow: none;
	}
`

const SlidingImage = (props) => {
	return (
		<ImageContainer slideBy={props.slideBy}>
			<Image src={props.imgURL} alt={props.alt} />
			{props.children}
		</ImageContainer>
	)
}

export default SlidingImage
