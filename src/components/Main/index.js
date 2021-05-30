import React from 'react'
import {MainCardContainer,MainCardBg,VideoBg,MainCardContent,MainCardTitle,MainCardText,MainCardButton} from './MainElement'
import {Button} from '../Button'
// import Video from '../../videos/video5.mp4'

const Main = () => {
    return (
        <MainCardContainer>
            <MainCardBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg> */}
            </MainCardBg>
            <MainCardContent>
                <MainCardTitle>
                    Cherish the Love
                </MainCardTitle>
                <MainCardText>
                    There are thousand of ways to celebrate your joy and hapiness. A wonderful way is to snap one piece of chocolate and let them melts in your mouth.
                </MainCardText>
                <MainCardButton>
                    <Button to='/'>Get Started</Button>
                </MainCardButton>
            </MainCardContent>
        </MainCardContainer>
    )
}

export default Main
