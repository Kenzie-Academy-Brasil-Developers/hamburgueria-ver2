import styled from "styled-components";

export const DecorationStyled = styled.section`
display: flex;
flex-direction: column;
gap: 25px;

@media (max-width:700px){
    .dots{
        display: none;
    }
}

.welcome-message{   
    border: 2px solid var(--color-grey-20);
    width: 230px;
    padding: 6px 5px;
    border-radius: 8px;
    display: flex;
    gap: 10px;
}
.bag-wrapper{
    background-color: var(--color-primary-50);
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 8px;
}
h4{
    font-size: 1.2rem;
    font-weight: 400;
}
span{
    font-weight: 700;
}
.dots{
    padding: 0 0 0 5px;
    width: 150px;
}
`