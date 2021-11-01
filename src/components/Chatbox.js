import styled from "styled-components";
import { IoMdHappy, IoMdSad } from "react-icons/io";

function Chatbox(props) {
    return (
        <Container counter={props.counter}>
            {props.counter && props.emotion === "HAPPY" && <IoMdHappy size="2rem"/>}
            {props.counter && props.emotion === "SAD" && <IoMdSad size="2rem"/>}
            <Content>{props.message}</Content>
        </Container>
    );
}

export default Chatbox;

const Container = styled.div`
    max-width: 80%;
    display: flex;
    flex-flow: row nowrap;
    align-self: ${props => props.counter ? "flex-start" : "flex-end"};
    box-sizing: border-box;
    gap: 10px;
`
const Content = styled.div`
    flex: 1 1 0;
    padding: 10px 15px;
    box-sizing: border-box;
    border-radius: 15px;
    background-color: #4cc5e0;
    color: white;
    font-size: 1rem;
`