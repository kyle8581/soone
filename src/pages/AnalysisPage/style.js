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

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 15px;
`
export const Description = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;
    text-align: center;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #00000020;
`