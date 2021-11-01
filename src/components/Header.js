import { withRouter } from "react-router-dom";

import styled from "styled-components";
import RoundButton from "./RoundButton";

function Header(props) {
    return (
        <Container>
            <Title>{props.user}번님,<br/>안녕하세요!</Title>
            <RoundButton onClick={() => props.history.push('/users')}>사용자 전환</RoundButton>
        </Container>
    );
}

export default withRouter(Header);

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    padding: 40px 30px 0px 30px;
    justify-content: space-between;
    align-items: flex-start;
`
const Title = styled.h1`
    margin: 0;
    font-weight: 500;
    font-size: 1.8rem;
    color: black;
`