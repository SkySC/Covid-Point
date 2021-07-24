import React, { useState } from 'react'
import styled from 'styled-components'
import SlidingImage from './SlidingImage'
import NavigationButton from './NavigationButton'
import SlidingDescription from './SlidingDescription'

import imgURL1 from '../../images/trauriges-maedchen-am-fenster.jpg'
import imgURL2 from '../../images/covid-kennzahlen.jpg'
import imgURL3 from '../../images/gluehbirnen-im-wolkenhimmel.jpg'
import imgURL4 from '../../images/jugendlicher-mit-maske.jpg'

const SlidingImageContainer = styled.div`
	position: absolute;
	display: flex;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
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
		<div>
			<NavigationButton onClick={() => shiftLeft()} left={+true} />
			<NavigationButton onClick={() => shiftRight()} right={+true} />
			<SlidingImageContainer>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL1}
					alt='Trauriges kleines Mädchen an einem Fenster'>
					<SlidingDescription href='./belastung_der_pandemie_auf_kinder_und_jugendliche.html'>
						Wie wirkt sich die Corona-Pandemie auf Kinder und
						Jugendliche aus?
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL2}
					alt='Kennzahlen zu Covid-19 auf einem Monitor in der Schrägperspektive'>
					<SlidingDescription href='./zahlen_zur_auswirkung_der_pandemie_auf_familien_und_ihre_kinder.html'>
						Zahlen zur Auswirkung der Pandemie auf Familien und
						Kinder
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL3}
					alt='Drei Glühbirnen, die aus einem Wolkenhimmel runterhängen'>
					<SlidingDescription>
						20 Ratschläge um Ihre Familie wieder zusammenzubringen
					</SlidingDescription>
				</SlidingImage>
				<SlidingImage
					slideBy={slideBy}
					imgURL={imgURL4}
					alt='Jugendlicher mit aufgesetzter FFP2-Maske im Freien'>
					<SlidingDescription>
						Was hilft gegen Einsamkeit in der Corona-Pandemie?
					</SlidingDescription>
				</SlidingImage>
			</SlidingImageContainer>
		</div>
	)
}

export default SlidingHeader
