import styled from "styled-components";

export const HomeContainer = styled.section`
    height:100vh;
    width:100vw;
`

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