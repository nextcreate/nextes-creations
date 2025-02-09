import styled from "styled-components";
import { colors } from "../../global.styles";

const { red } = colors

export const BaseButton = styled.button`
    background-color:#${red};
    color:#fff;
    width:75px; 
    height:50px;
    border-radius:5px;
    border:none;
    overflow:hidden;
    z-index:0;
    background-image: linear-gradient(to bottom,transparent,transparent 50%,rgba(0,0,0,.04));
    box-shadow: inset 0 0 0 1px rgba(255,255,255,.05), inset 0 1px 0 0 rgba(255,255,255,.45), inset 0 -1px 0 0 rgba(255,255,255,.15), 0 1px 0 0 rgba(255,255,255,.15);
    text-shadow: 0 1px rgba(255,255,255,.4);
`