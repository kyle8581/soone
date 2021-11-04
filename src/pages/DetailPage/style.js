import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
`

export const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 40px 30px 0px 30px;
    justify-content: flex-start;
    align-items: center;
`
export const Title = styled.h1`
    margin: 0;
    margin-left: 10px;
    font-weight: 500;
    font-size: 1.8rem;
    color: black;
`
export const BackButton = styled.button`
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    background: none;
    border: none;
    font-size: 2rem;
    text-align: center;
    color: black;
    transform: scaleX(0.5);
`

export const ContentContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 30px;
    box-sizing: border-box;
    gap: 30px;
`

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #00000020;

    &:last-child {
        padding-bottom: 0;
        border-bottom: none;
    }
`

export const Column = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`