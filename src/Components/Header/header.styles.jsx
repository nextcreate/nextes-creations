import styled, {css} from "styled-components";
import { colors,typeFace } from "../../global.styles";

const { tan,brown } = colors;

export const HeaderContainer = styled.header`
    height: 200px;
    background-color:#${brown};
    display:flex;
    display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-end;
	align-items: stretch;
	align-content: stretch;

    a {
        color:#000;
        text-decoration:none;
    }

    @media (max-width:600px) {
        height:100px;
        background-color:#${tan};
    }
`;

export const HideSvg = styled.div`
    width:50px;
    height:50px;    
    right:20px;
    top:25px;
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
    ${typeFace}

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
    top:84px;
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
    width:90vw;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
    a,
    strong {
        color:#fff;
        margin:30px;

        @media (max-width:600px) {
            color:#555;
        }
    }

`;

export const LogoBox = styled.div`
    height:70%;
    width:450px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    // margin:auto;
    position:relative;
    left:0px;

    strong {
        margin:0px;
        ${typeFace  }
    }

    h1 {
        font-family: "Dancing Script", serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
        margin:0px;
    }

    @media (max-width:400px) {
        h1 {font-size:20px;}
        strong {font-size:10px;}
    }
`