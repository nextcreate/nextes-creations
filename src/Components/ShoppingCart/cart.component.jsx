import { ShoppingCartContainer } from "./cart.styles";
import { PageHeader } from "../../global.styles";
import { BaseButton } from "../Inputs/input.styles";

const ShoppingCart = () => {
    return (
        <ShoppingCartContainer>
            <PageHeader>
                <h2>cart</h2>
            </PageHeader>
            <h1>cart is empty</h1>
            <BaseButton style={{width:'200px'}}>return to shop</BaseButton>
        </ShoppingCartContainer>
    )
}

export default ShoppingCart