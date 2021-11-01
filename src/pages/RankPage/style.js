import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 30px 30px 80px 30px;
    box-sizing: border-box;
    gap: 30px;
`

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid lightgray;
`
export const Rank = styled.p`
    margin: 0;
    flex: 1 1 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: ${props => props.checked ? "blue" : "black"};
`
export const Detail = styled.p`
    margin: 0;
    font-size: 1.1rem;
    color: ${props => props.checked ? "blue" : "black"};
`