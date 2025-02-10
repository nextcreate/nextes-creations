import { useEffect,useState } from "react";
import { HomeContainer,ProductDisplay } from "./home.styles";
import { HeroImage } from "./home.styles";
import Product from "./productcard.component";
import data from './../data'

const testData = [
    {image:'test'},
    {image:'test'},
    {image:null},
    {image:null},
    {image:null},
]

const Home = () => {

    const [state,setState] = useState({
        stuff:[],
        moreStuff:[]
    })

    useEffect(() => {
        setState({
            ...state,
            stuff:data,
            moreStuff:testData
        })
    },[])

    const mappedStuff = state.stuff.map((el,i) => {
        return (
            <Product key={i} props={el} />
        )
    })

    return (
        <HomeContainer>
            <HeroImage>
                <h1>Handcrafted Furnishings Made for You</h1>
            </HeroImage>
            <h2>Ready-To-Order Handmade Options</h2>
            <ProductDisplay>
                {mappedStuff}
            </ProductDisplay>
        </HomeContainer>
    )
}

export default Home