import styled from 'styled-components'

export const CardContainer = styled.div`
    display:flex;
    position:relative;
    width:100%;
    height:100%;
    padding:1vh 2vh;
    min-height:500px;
    align-items:center;
    background:${({lightBackground})=>(lightBackground?'white':'#FFD700')};
    flex-direction:${({imgStart})=>(imgStart?'row':'row-reverse')};
`
export const ImageContainer = styled.div`
    width:50%;
    height:100%;
    display:flex;
    margin-left:50px;
`
export const Image = styled.img`
    display:flex;
    max-width:100%;
    max-height:100%;
    object-fit:scale-down;
    user-select:none;

    @media screen and (max-width:768px){
        object-fit:cover;
    }   
`
export const CardContentContainer = styled.div`
    display:flex;
    margin-left:70px;
    padding:1vh 2vh;
    justify-content:flex-start;
    flex-direction:column;

    @media screen and (max-width:768px){
        display:flex;
        margin-left:50px;
        justify-content:center;
    }   

    &>a{
        margin: 2vh 2vh 3vh 2vh;
        width:300px;
        height:60px;
        white-space:nowrap;
        display:flex;
        justify-content:center;
        align-items:center;
        @media screen and (max-width:768px){
            font-size:0.8rem;
            width:auto;
        }   
    }
`
export const CardHeading = styled.h1`
    color:${({lightHeading})=>(lightHeading?'#864313':'#242424')};
    display:flex;
    justify-content:center;
    padding: 5vh 2vh 3vh 2vh;
    @media screen and (max-width:768px){
        font-size:1.5rem;
        text-align:center;
        margin-bottom:-20px;
    }
`
export const CardText = styled.p`
    color:${({lightText})=>(lightText?'#864313':'#242424')};
`