import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useState } from "react"
import { HeaderContainer,ContactBar,NextesCreationsText,LogoBox } from "./header.styles"
import { DesktopMenu,BaseNavBar,HideSvg } from "./header.styles"
import { BaseButton } from "../Inputs/input.styles"
import { Hamburger } from "../SVG/Hamburger"
import { Close } from "../SVG/Close"
import { ShopCart } from "../SVG/ShopCart"

const Header = () => {

    const [state,setState] = useState({
        menuOpen:false
    });

    const {menuOpen } = state;

    return (
        <HeaderContainer>
            <ContactBar>
                <LogoBox>
                    <h1><Link to="/">Nextes Creations</Link></h1>
                    <strong>Hand Crafted Goods</strong>
                </LogoBox>
                {/* <BaseButton>Contact us</BaseButton> */}
                <Link to="/cart">
                    <ShopCart 
                        styles={{width:'25px',marginRight:'20px'}}
                    />
                </Link>
                {/* <strong>000-000-0000</strong> */}
            </ContactBar>
            <BaseNavBar>
                <DesktopMenu menuOpen={menuOpen}>
                    <li src="#"><Link to="/cart">About</Link></li>
                    <li src="#"><Link to="/">Shop</Link></li>
                    <li src="#"><Link to="/">Contact us</Link></li>
                </DesktopMenu>
            </BaseNavBar>
            <HideSvg onClick={() => {setState({...state, menuOpen:!menuOpen})}}>{menuOpen ? <Close/> : <Hamburger/>}</HideSvg>
        </HeaderContainer>
    )
};

export default Header