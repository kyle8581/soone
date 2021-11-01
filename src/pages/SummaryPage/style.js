import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 30px 30px 80px 30px;
    box-sizing: border-box;
    gap: 30px;
`

export const Row = styled.div`
    margin-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #00000020;

    &:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
`
export const Title = styled.p`
    margin: 0;
    font-size: 1rem;
    color: black;
`
export const Description = styled.p`
    margin: 5px 0 0 0;
    font-size: 0.7rem;
    color: black;
`