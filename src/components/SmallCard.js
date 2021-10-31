import styled from "styled-components";

function SmallCard(props) {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Score score={props.score}>{props.score}점</Score>
            <Content>{props.message}</Content>
        </Container>
    );
}

export default SmallCard;

const checkScore = (score) => {
    if (score >= 80) return "blue";
    if (score >= 50) return "green";
    return "red";
};

const Container = styled.div`
    width: calc((100vw - 90px) / 2);
    min-height: calc((100vw - 90px) / 2);
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
const Score = styled.p`
    position: absolute;
    top: 20px;
    right: 20px;
    margin: 0;
    font-weight: 600;
    font-size: 1.1rem;
    color: ${props => checkScore(props.score)};
`
const Content = styled.p`
    margin: 0;
    margin-top: 10px;
    font-size: 0.8rem;
    color: black;
`