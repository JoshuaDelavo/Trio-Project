import React from 'react'
import {CardContainer,ImageContainer,Image ,CardContentContainer,CardHeading,CardText} from './CardElement'
import {Button} from '../Button'


const Card = ({addButton, id,lightBackground,imgStart,src,alt,lightHeading,lightText,heading,text,buttonLabel}) => {
    return (
        <CardContainer id={id} lightBackground={lightBackground} imgStart={imgStart}>
            <ImageContainer>
                <Image src={src} alt={alt}></Image>
            </ImageContainer>
            <CardContentContainer>
                <CardHeading lightHeading={lightHeading}>{heading}</CardHeading>
                <CardText lightText={lightText}>{text}</CardText>
                {addButton === true && <Button to='/'>{buttonLabel}</Button>}
            </CardContentContainer>
        </CardContainer>
    )
}

export default Card
