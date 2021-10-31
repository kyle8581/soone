import styled from "styled-components";

function BigCard(props) {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Content>{props.children}</Content>
        </Container>
    );
}

export default BigCard;

const Container = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0 0 10px #00000020;
    background-color: white;

    &:hover {
        opacity: 0.5;
    }
    &:active {
        opacity: 0.3;
    }
`
const Title = styled.h2`
    margin: 0;
    font-weight: 600;
    font-size: 1.2rem;
    color: black;
`
const Content = styled.div`
    margin-top: 10px;
`