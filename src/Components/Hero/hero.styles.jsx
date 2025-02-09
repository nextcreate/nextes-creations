import styled, {css} from "styled-components";
import { colors } from "../../global.styles";

const { tan,brown } = colors;

export const HeroContainer = styled.header`
    min-height: 200px;
    background-color:#${brown};
    display:flex;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: stretch;
	align-content: stretch;
`;

export const HeroImage = styled.div`
    width:100vw;
    display:flex;
    flex-direction: column;
    justify-content:center;
    background-image: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://firebasestorage.googleapis.com/v0/b/bcwb-879fa.appspot.com/o/data%2Fimages%2Fwood%20shop?alt=media&token=126488b5-3979-46ac-9b6f-2c6ceb879a1d);
    background-size: cover;
    background-position: center;
    height: 400px;
    // background-attachment: fixed;

    strong,
    a,
    h1,
    h2,
    p {
        color:white;
    }
`;

export const HideSvg = styled.div`
    width:50px;
    height:50px;    
    right:20px;
    top:135px;
    position:absolute;

    @media (min-width:600px) {
        display:none;
    }
`;
export const BaseNavBar = styled.nav`
    width:100vw;
    height:75px;
    background-color:#${tan};
    display: flex;
    align-items: center;

    @media (max-width:600px) {
        justify-content:flex-end;
    }

    a {
        margin:10px;
    }
    transform-origin: top right;
`;

const close = css`
    height:0px;
    width:0px;
    transition: all 500ms;
    
    ul {
        display:none;
    }
`;

export const MobileMenu = css`
    width:100%;
    height:70%;
    overflow:hidden;
    background-color:#fff;
    position:absolute;
    top:110px;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all 500ms;

        li {
        margin:10px;
        list-style-type:none;
    }

    ${({menuOpen}) => !menuOpen && close}
`;

export const DesktopMenu = styled.ul`
    text-transform: uppercase;
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    
    li {
        list-style-type:none;
    }


    @media (max-width:600px) {
        ${MobileMenu} 
    }
`;

export const ContactBar = styled.div`
    position:absolute;
    top:0px;
    height:100px;
    width:100%;
    // background-color:blue;
    display:flex;
    justify-content: flex-end;
    align-items: center;

    button,
    strong {
        margin:30px;
    }
`;