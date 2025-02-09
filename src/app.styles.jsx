import styled from "styled-components";
import { colors } from "./global.styles";

const { white } = colors

export const AppContainer = styled.main`
    text-align:center;
    display:flex;
    flex-direction:column;

    h1,
    h2 {
        font-family: "Agu Display", serif;
        font-weight: 400;
        font-size: calc(10px + 2vmin);
    }

    h1 {
        font-size: calc(35px + 2vmin);
        text-shadow: #000000 3px 2px;
    }
`
    
export const RouteContainer = styled.section`
    background-color:#${white};    
    width:100vw;
    min-height:75vh;
`
