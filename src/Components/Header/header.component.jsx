import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { HeaderContainer,ContactBar } from "./header.styles"
import { DesktopMenu,BaseNavBar,HideSvg } from "./header.styles"
import { BaseButton } from "../Inputs/input.styles"
import { Hamburger } from "../SVG/Hamburger"
import { Close } from "../SVG/Close"

const Header = () => {

    const [state,setState] = useState({
        menuOpen:false
    });

    const {menuOpen } = state;

    return (
        <HeaderContainer>
            <ContactBar>
                <h2 style={{position:'absolute',left:'40px'}}><Link to="/">Nextes Creations</Link></h2>
                <BaseButton>Contact us</BaseButton>
                <strong>000-000-0000</strong>
            </ContactBar>
            <BaseNavBar>
                <DesktopMenu menuOpen={menuOpen}>
                    <li src="#"><Link to="/cart">about</Link></li>
                    <li src="#">get a quote</li>
                    <li src="#">Handcrafted Furnishings</li>
                </DesktopMenu>
            </BaseNavBar>
            <HideSvg onClick={() => {setState({...state, menuOpen:!menuOpen})}}>{menuOpen ? <Close/> : <Hamburger/>}</HideSvg>
        </HeaderContainer>
    )
};

export default Header