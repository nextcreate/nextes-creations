import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { HeroContainer,ContactBar } from "./hero.styles"
import { DesktopMenu,BaseNavBar,HideSvg } from "./hero.styles"
import { BaseButton } from "../Inputs/input.styles"
import { Hamburger } from "../SVG/Hamburger"
import { Close } from "../SVG/Close"

const Hero = () => {

    const [state,setState] = useState({
        menuOpen:false
    });

    const {menuOpen } = state;

    return (
        <HeroContainer>
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
            {/* <HeroImage>
            <h1>Handcrafted Furnishings Made for You</h1>
            <p>text inserted here</p>
            </HeroImage> */}
        </HeroContainer>
    )
};

export default Hero