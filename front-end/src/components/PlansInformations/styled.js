import styled from "styled-components";

export const PageArea = styled.div`
    background-color: whitesmoke;
    min-height: 105vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;

    .infos--title{
        display: flex;
        font-size: 5vw;
        margin-bottom: 1vh;
    }

    .infos--title--speak, .speak{
        color: #E32500;
        font-family: 'Arvo', serif;
    }

    .infos--title--more, .more{
        font-family: 'Arvo', serif;
        color: #1868D6;  
    }

    .infos--text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70%;
    }

    .infos--text--p {
        width: 35%;
        padding: 0 5vw;
        font-family: 'Roboto', sans-serif;
        font-size: 2vw;
        text-align: start;
        border-right: 1px solid gray;
    }

    .sub-text{
        font-size: 1.8vw;
        color: #452316;
    }

    .infos--text--p p {
        margin-bottom: 2vh;
    }

    .telzir{
        font-family: 'Arvo', serif;
        color: #26ED44;
    }

    .infos--text--tables {
        width: 50%;
    }

    .infos--text--tables--normaltax, .infos--text--tables--plans {
        margin: 1vw 3vw;
    }

    .infos--text--tables--normaltax h4, .infos--text--tables--plans h4 {
        font-family: 'Roboto', sans-serif;
        font-size: 2.5vw;
        text-align: center;
        margin-bottom: 1vh;
    }

    @media (max-width:800px) {

        .infos--title{
            height: 10%;
            font-size: 30px;
        }
        
        .infos--text{
            flex-direction: column;
            height: 70%;
        }

        .infos--text--p{
            width: 80vw;
            border-right: 0;
            text-align: center;
        }

        .infos--text--p p{
            font-size: 20px;
        }

        .infos--text--tables{
            width: 90vw;
        }

        .infos--text--tables--normaltax h4, .infos--text--tables--plans h4 {
            font-size: 20px;
        }
    }
`