import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    display:flex;
    text-decoration:none;
    color:black;
    font-weight:bold;
    text-transform:uppercase;
    padding:10px 40px;
    border-radius:50px;
    background:#FFD700;
    //margin-top:65px;
    //background: linear-gradient(to right top,#532623, #532623, #975420, #bb9900, #FFC75F);
    
    &:hover{
        background:#b2b2b2;
        color:snow;
    }

`