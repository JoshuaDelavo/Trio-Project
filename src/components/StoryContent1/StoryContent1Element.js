import styled from 'styled-components'

export const StoryContent1Container = styled.div`
`
export const TopImageContainer = styled.div`
    width:100%;
    height:auto;
`
export const TopImage = styled.img`
    width:100%;
    height:auto;
`
export const BottomContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:50px 30px;
    margin-bottom:80px;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding:50px 120px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
`
export const BottomHeading = styled.h1`
    width:95%;
    padding: 50px 0;
        font-size:2rem;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        font-size:4rem;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
`
export const BottomDescContainer = styled.div`
    display:flex;
    padding-bottom:50px;
    font-size:0.8rem;
    font-weight:bold;
`
export const BottomDesc1 = styled.p`
    padding-right:30px;
`
export const BottomDesc2 = styled.p`
    padding:0 30px;
`
export const BottomText = styled.p`
    line-height:40px;
    font-size:1.1rem;
`
export const RelatedStoriesContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:100px;
    padding:0 30px;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        padding:0 120px;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
    
`
export const RelatedStoriesHeading = styled.h1`
    padding-bottom:50px;
`
export const RelatedStoriesCardContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    justify-content:space-between;
    

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        flex-direction:row;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}
`
export const RelatedStoriesCard = styled.div`
    border:0.3px solid lightgray;
    width:100%;
    margin-bottom:25px;
    
    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {  }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        flex-direction:row;
        width:48%;
        margin-bottom:0;
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {}

`
export const CardImageContainer = styled.div`
    width:100%;
`
export const CardImage = styled.img`
    width:100%;    
`
export const CardTextContainer = styled.div`
    padding:40px 50px;
`
export const CardText1 = styled.h3`
    font-size:2.3rem;
    padding-bottom:20px;
    font-weight:bold;
`
export const CardText2 = styled.h4`
    font-size:1.8rem;
    font-weight:200;
    color:darkgray;
`