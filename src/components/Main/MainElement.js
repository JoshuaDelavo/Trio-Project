import styled from 'styled-components'

export const MainCardContainer = styled.div`
    display:flex;
    position:relative;
    width:100%;
    height:900px;
    background-color:#242424;
`
export const MainCardBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    z-index:0;
`
export const VideoBg= styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
`
export const MainCardContent = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    height:800px;
    margin-top:0;
    align-items:center;
    padding: 0 50px;
    z-index:3;
`
export const MainCardTitle = styled.h1`
    display:flex;
    padding:10px 0;
    justify-content:center;
    text-align:center;
    color:white;
    font-size:2.5rem;
    white-space:nowrap;

    @media screen and (min-width:768px){
        font-size:3rem;
    }
`
export const MainCardText = styled.p`
    display:flex;
    padding:10px 0;
    justify-content:center;
    text-align:center;
    font-size:1rem;
    color:white;

    @media screen and (min-width:768px){
        font-size:1.3rem;
    }
`
export const MainCardButton = styled.div`
    display:flex;
    padding:30px 0;
    justify-content:center;
    &>a{
        padding:20px 70px;
        margin:20px 0;
        white-space:nowrap;
    }
`

