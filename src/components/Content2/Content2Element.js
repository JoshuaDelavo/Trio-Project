import styled from 'styled-components'

export const Content2Container = styled.div`
    background:black;
    color:white;
    display:flex;
    flex-direction:column;
    overflow:hidden;
`
export const TopContainer = styled.div`
    display:flex;
    justify-content:center;
`
export const TopFlexWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:450px;
    padding:90px 0;
`

export const Text1Container = styled.div`
    width:100%;
    text-align:center;
    padding-bottom:15px;
`
export const Text1 = styled.div`
    font-weight:bold;
    width: max-content;
    margin: auto;
    position: relative;
`
export const Text2Container = styled.div`
    width:79%;
    text-align:center;
    margin:auto;
    padding-bottom:15px;
    margin: auto;
    position: relative;
`
export const Text2 = styled.div`
    font-size:3rem;
`
export const Text3Container = styled.div`
    width:95%;
    text-align:center;
    margin:auto;
    position: relative;
`
export const Text3 = styled.div`
    line-height:25px;
`
export const BottomContainer = styled.div`
    display:flex;
    margin:auto;
    margin-bottom:100px;
    flex-direction:column;

    @media screen and (min-width:768px){
        flex-direction:row;
    }
`
export const BottomLeftContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const BottomCenterContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const BottomRightContainer = styled.div`
    display:flex;
    flex-direction:column;
`
export const ArrowImageContainer = styled.div`
    display:flex;
    justify-content:center;
    width:70%;
    min-height:200px;
    margin:auto;
`
export const ArrowImage = styled.img``
export const BottomCaption1Container = styled.div`
    display:flex;
    justify-content:center;
    width:70%;
    text-align:center;
    margin:auto;
`
export const BottomCaption1 = styled.h3``
export const BottomCaption2Container = styled.div`
    display:flex;
    justify-content:center;
    width:70%;
    text-align:center;
    margin:auto;
`
export const BottomCaption2 = styled.p``

export const TextAnimation = styled.div`
    position:absolute;
    width:200%;
    height:100%;
    top:0;
    background-image: linear-gradient(to right, transparent, black 50%, black);
    left:-100%;
`