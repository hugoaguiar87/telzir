import styled from "styled-components";

export const PageArea = styled.div`
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;

    .simulation--titles {
        text-align: center;
        margin: 4vh 0;

        h2{
            font-size: 5vw;
            font-family: 'Arvo', serif;
            color: #E32500;
        }

        h4{
            font-family: 'Arvo', serif;
            color: #1868D6;
            font-size: 2vw;
        }
    }

    .simulation--selects{
        display: flex;
        align-items: center;
        gap: 15px;
        height: 50%;
    }

    .simulation--tables {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin: 2vh 0;
        min-height: 40%;
    }

    @media (max-width:800px) {
        margin: 5vh 0;

        .simulation--titles h2 {
            font-size: 30px;
        }

        .simulation--titles h4{
            font-size: 20px;
        }

        .simulation--selects{
            flex-direction: column;
        }

        .simulation--tables {
            width: 90vw;
        }
    }
`