import styled from "styled-components";
import { typeFace } from "../../global.styles";

export const HomeContainer = styled.section`
    min-height:100%;
    width:100vw;

    h2 {
        ${typeFace}
    }
`;

export const HeroImage = styled.div`
    width:100vw;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Fwood%20shop?alt=media&token=126488b5-3979-46ac-9b6f-2c6ceb879a1d);
    background-size: cover;
    background-position: center;
    height: 500px;

    strong,
    a,
    h1,
    h2,
    p {
        color:white;
    }

    h1 {
        ${typeFace}
        font-weight: 400;
        font-size: calc(10px + 2vmin);
    }

    h1 {
        font-size: calc(35px + 2vmin);
        text-shadow: #000000 3px 2px;
    }
`;

export const ProductDisplay = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    // flex-direction: row;
	// align-items: stretch;
	// align-content: stretch;
`;

export const ProductCard = styled.div`
    width:300px;
    height:360px;
    border-radius:10px;
    border solid 1px #555;
    margin:10px;
    background-color:#fff;
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-end;
    ${typeFace}
    color:#555;

    @media (max-width:641px) {
        width:90%;
    }

    img {
        height:200px;
        width:200px;
        border-radius:10px;
        margin:10px;
        position:absolute;
        left:0;
        top:0;
    }

    button {${typeFace}}
`;