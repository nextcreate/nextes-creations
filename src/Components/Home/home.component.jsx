import { useEffect,useState } from "react";
import { HomeContainer } from "./home.styles";
import { HeroImage } from "./home.styles";
import data from './../data'

const Home = () => {

    const [state,setState] = useState({
        stuff:[]
    })

    useEffect(() => {
        setState({
            ...state,stuff:data
        })
    },[])

    const mappedStuff = state.stuff.map((el,i) => {
        return (
            <img src={el.img} />
        )
    })

    return (
        <HomeContainer>
            <HeroImage>
                <h1>Handcrafted Furnishings Made for You</h1>
                <p>text inserted here</p>
            </HeroImage>
            {mappedStuff}
        </HomeContainer>
    )
}

export default Home