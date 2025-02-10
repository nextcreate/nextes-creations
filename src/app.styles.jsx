import styled from "styled-components";
import { colors,typeFace } from "./global.styles";

const { white } = colors

export const AppContainer = styled.main`
    text-align:center;
    display:flex;
    flex-direction:column;
`
    
export const RouteContainer = styled.section`
    background-color:#${white};    
    width:100vw;
    min-height:75vh;
`
