import styled from 'styled-components'

export const ShowcaseContainer = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    height:800px;
    background:'white';
    padding:10px 30px;
`
export const TitleContainer = styled.div`
    display:flex;
    width:100%;
    padding:20px 10px;
`
export const TitleText = styled.h1`

`
export const ListsContainer = styled.div`
    display:flex;
    height:66%;
    background:white;
    align-items:center;
    justify-content:space-between;
`
export const ItemsContainer = styled.div`
    display:flex;
    background:white;
    height:80%;
    width:auto;
    padding:10px;
    align-items:center;
    justify-content:space-around;
    flex-wrap:wrap;
    overflow:hidden;
`
export const Item = styled.div`
    display:flex;
    height:100%;
    //border:1px solid black;
    margin:5px;
    min-width:280px;
    flex-direction:column;
`
export const CaptionContainer = styled.div`
    width:100%;
    justify-content:center;
    padding: 10px 20px;
`
export const CaptionText = styled.h1`
    text-align:center;
    user-select:none;
`
export const ArrowLeft = styled.div`
    display:flex;
    width:50px;
    margin: 0 20px;
    &>svg{
        font-size:3rem;
    }
`
export const ArrowRight = styled.div`
    display:flex;
    width:50px;
    margin: 0 20px;
    &>svg{
        font-size:3rem;
    }
`
export const ItemImageWrapper = styled.div`
    display:flex;
    width:300px;
    height:100%;
`
export const ItemImage = styled.img`
    object-fit:scale-down;
    max-height:100%;
    max-width:100%;
    user-select:none;
`
export const ItemText = styled.div`
    display:flex;
    justify-content:center;
    padding-bottom:10px;
`