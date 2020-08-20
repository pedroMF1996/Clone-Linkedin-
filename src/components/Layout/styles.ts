import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    > span {
        margin-top: 48px;
        display: flex;
    }

    .middle-column {
        margin: 0 1.5rem;
    }

    @media(min-width: 1180px){
        > main {
            margin: 0 30px;
            display: flex;
            justify-content:center;
        }
        > span {
            margin-top: 52px;
            padding: 8px 0;
            display: flex;
        }
    }

    .left-column, 
    .right-column,
    .ad-banner {
        display: none;
    }

    @media(min-width: 1180px){
        .left-column, 
        .right-column,
        .ad-banner {
            display: unset;
        }   
    }    
`;
