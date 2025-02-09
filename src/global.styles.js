import styled, {css} from "styled-components"

export const colors= {
    red:'FF5050',
    brown:'BC827B',
    white:'FFF5F2',
    tan:'F3EED9'   
}

export const PageHeader = styled.header`
    height:300px;
    width:100vw;
    background-color:#${colors.brown};  
    display:flex;
    flex-direction:column;
`

export const basePageContainer = css`
    width:100vw;
    height:75vh;
    background-color:#${colors.white};
    top:125px;
`