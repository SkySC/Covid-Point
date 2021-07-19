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
		position: absolute;
		z-index: 1;
		width: 80%;
		height: 80%;
		mix-blend-mode: multiply;
		background: linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4);
		border-radius: 30px 30px 30px 0;
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
`

const Image = styled.img`
	position: absolute;
	width: 80%;
	height: 80%;
	border-radius: 30px 30px 30px 0;
	box-shadow: 6px 10px 15px rgba(0, 0, 0, 0.1);
	object-fit: cover;
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
