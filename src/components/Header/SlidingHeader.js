import React, { useState } from 'react'
import styled from 'styled-components'
import SlidingImage from './SlidingImage'
import NavigationButton from './NavigationButton'
import SlidingDescription from './SlidingDescription'

import imgURL1 from '../../images/pexels-chokniti-khongchum-2280547.jpg'
import imgURL2 from '../../images/pexels-cottonbro-3923156.jpg'
import imgURL3 from '../../images/pexels-miguel-á-padriñán-3936421.jpg'
import imgURL4 from '../../images/pexels-nataliya-vaitkevich-5863398.jpg'

const SlidingImageContainer = styled.div`
	position: absolute;
	display: inherit;
	z-index: -1;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
`

const Header = styled.header`
	display: flex;
	height: 94vh;
	width: 100vw;
`

const SlidingHeader = () => {
	const [slideBy, setSlideBy] = useState(0)
	const shiftLeft = () => {
		if (slideBy >= 0) return
		setSlideBy(slideBy + 100)
	}
	const shiftRight = () => {
		if (slideBy <= -300) return
		setSlideBy(slideBy - 100)
	}

	return (
		<Header>
			<NavigationButton onClick={() => shiftLeft()} left />
			<NavigationButton onClick={() => shiftRight()} right />
			<SlidingImageContainer>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL1}
					alt='Mikroskop im Labor'>
					<SlidingDescription>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Sunt, inventore?
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL2}
					alt='Weiße Pillen die zusammen das Wort Covid-19 formen'>
					<SlidingDescription>
						Lorem ipsum, dolor sit amet consectetur adipisicing.
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL3}
					alt='Goldene Pillen und Kapseln auf schwarzem Hintergrund, die zusammen das Wort Covid-19 formen'>
					<SlidingDescription>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eum, facilis cupiditate?
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL4}
					alt='OP-Maske mit Spritzen und Impfdosen auf einem hellblauen Hintergrund'>
					<SlidingDescription>
						Lorem ipsum dolor sit amet.
					</SlidingDescription>
				</SlidingImage>
			</SlidingImageContainer>
		</Header>
	)
}

export default SlidingHeader
