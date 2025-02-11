import { ProductCard } from "./home.styles";
import { BaseButton } from "../Inputs/input.styles";

const Product = ({props}) => {

    return (
        <ProductCard>
            <img src={props.img} />
            <strong>{props.title}</strong>
            <BaseButton
                style={{
                    margin:'10px',
                    width:'150px'
                }}
            >
                view options
            </BaseButton>
        </ProductCard>
    )
};

export default Product;