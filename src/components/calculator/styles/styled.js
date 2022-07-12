import styled from 'styled-components';

export const StyledCalculatorContainer = styled.div`
    background-color: #202124;
    height: 100%;
    border: 5px solid black;
    width: 50%;
    margin: auto;
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
        background-color: #202124;
        height: 100%;
        border: 5px solid black;
        width: 95%;
        height: 70%;
        margin: auto;
        margin-top: 50px;
    }
`