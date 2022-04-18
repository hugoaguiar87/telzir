import styled from 'styled-components';

export const Header = styled.header`
    background-color: #1868D6;
    height: 15vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .header-- {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 5vw;
    }
    .header-- img {
        height: 50px;
        margin-right: 1vw;
    }
    .header--firstname {
        font-size: 35px;
        color: #26ED44;
        margin-right: 0.8vw;
        font-family: 'Arvo', serif;
    }
    .header--lastname{
        font-size: 34px;
        color: white;
    }
`

export const Footer = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    height: 20vh;
    font-family: 'Roboto', sans-serif;
    margin-top: 25vh;
`
