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