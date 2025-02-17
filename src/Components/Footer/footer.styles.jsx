import styled from "styled-components";
import { colors } from "../../global.styles";

const { brown,tan } = colors
export const FooterContainer = styled.footer`
    width:100vw;
    height:200px;
    background-color:#${brown};
    position:relative;
    bottom:0;
    display:flex;
    flex-direction:column-reverse;
`

export const FooterBottom = styled.div`
    background-color:#${tan};
    width:100vw;
    height:100px;
    display:flex;
    justify-content:center;
    align-items:center;
`