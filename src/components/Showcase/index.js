import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ShowcaseContainer,TitleContainer,TitleText,ListsContainer,ItemsContainer,CaptionContainer,Item,CaptionText,ArrowLeft,ArrowRight,ItemImageWrapper,ItemImage,ItemText} from './ShowcaseElement'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

const Showcase = ({ItemId, Title, Subtitle}) => {
    const [items,setItems] = useState([]);
    const [itemSelector,setItemSelector] = useState(0);
    const [itemSelector1,setItemSelector1] = useState(1);
    const [itemSelector2,setItemSelector2] = useState(2);
    const [itemSelector3,setItemSelector3] = useState(3);
    // const [sliceX,setSliceX] = useState(0);
    // const [sliceY,setSliceY] = useState(4);

    // const minimumValue=0;
    // const maximumValue=items.length;
  
    const rightHandle = () => {
        setItemSelector(itemSelector+1)
        setItemSelector1(itemSelector1+1)
        setItemSelector2(itemSelector2+1)
        setItemSelector3(itemSelector3+1)
        if (itemSelector === items.length-1){
            setItemSelector(0)
        }else if(itemSelector1 === items.length-1){
            setItemSelector1(0)
        }else if(itemSelector2 === items.length-1){
            setItemSelector2(0)
        }else if(itemSelector3 === items.length-1){
            setItemSelector3(0)
        }


        
        // if(sliceX > minimumValue){
        //     setSliceX(sliceX-1)
        //     setSliceY(sliceY-1)
        // }
    }
    const leftHandle = () => {
        setItemSelector(itemSelector-1)
        setItemSelector1(itemSelector1-1)
        setItemSelector2(itemSelector2-1)
        setItemSelector3(itemSelector3-1)
        if (itemSelector === 0){
            setItemSelector(items.length-1)
        }else if(itemSelector1 === 0){
            setItemSelector1(items.length-1)
        }else if(itemSelector2 === 0){
            setItemSelector2(items.length-1)
        }else if(itemSelector3 === 0){
            setItemSelector3(items.length-1)
        }
        // if(sliceX < maximumValue-1){
        //     setSliceX(sliceX+1)
        //     setSliceY(sliceY+1)  
        // }
    }
  

    useEffect(() => {
        axios.get('https://api.npoint.io/9a618467ed59858cfc27')
        .then((res)=>{
            if (res.status === 200){
                setItems(res.data.items)
            }
        })
    }, [])


    return (
        <ShowcaseContainer>
            <TitleContainer>
                <TitleText>{Title}</TitleText>
            </TitleContainer>
            <ListsContainer>
                <ArrowLeft>
                    <IoIosArrowBack onClick={leftHandle}></IoIosArrowBack>
                </ArrowLeft >
                <ItemsContainer>
                    <Item>
                        <ItemImageWrapper>
                            <ItemImage src={items.length > 0 && items[itemSelector].img}></ItemImage>
                        </ItemImageWrapper>
                        <ItemText>
                            {items.length > 0 && items[itemSelector].name}
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemImageWrapper>
                            <ItemImage src={items.length > 0 && items[itemSelector1].img}></ItemImage>
                        </ItemImageWrapper>
                        <ItemText>
                        {items.length > 0 && items[itemSelector1].name}
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemImageWrapper>
                            <ItemImage src={items.length > 0 && items[itemSelector2].img}></ItemImage>
                        </ItemImageWrapper>
                        <ItemText>
                        {items.length > 0 && items[itemSelector2].name}
                        </ItemText>
                    </Item>
                    <Item>
                        <ItemImageWrapper>
                            <ItemImage src={items.length > 0 && items[itemSelector3].img}></ItemImage>
                        </ItemImageWrapper>
                        <ItemText>
                        {items.length > 0 && items[itemSelector3].name}
                        </ItemText>
                    </Item>
                </ItemsContainer>
                <ArrowRight>
                    <IoIosArrowForward onClick={rightHandle}></IoIosArrowForward>
                </ArrowRight>
            </ListsContainer>
            <CaptionContainer>
                <CaptionText>{Subtitle}</CaptionText>
            </CaptionContainer>
        </ShowcaseContainer>
    )
}

export default Showcase
