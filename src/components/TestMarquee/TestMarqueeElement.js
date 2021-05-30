import styled from 'styled-components'

export const Wrapper = styled.div`
    width:450px;
    height:50px;
    position:relative;
    margin:auto;
    background:#ccc;
    overflow:hidden;

    &:after {
        width:448px;
        height:48px;
        content:"";
        position:absolute;
        border:solid 1px white;
    }
`
export const Boxes = styled.div`
    position:relative;
    right:-450px;
`
export const Box = styled.div`
    width:50px;
    height:50px;
    position:absolute;
    background:red;
    font-size:25px;
    line-height:50px;
    text-align:center;
`
