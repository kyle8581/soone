import { withRouter } from "react-router-dom";

import styled from "styled-components";
import TabButton from "./TabButton";

function Tab(props) {
    return (
        <Container>
            <TabButton onClick={() => props.history.replace(`/${props.id}/summary`)} disabled={props.selected === 0}>요약</TabButton>
            <TabButton onClick={() => props.history.replace(`/${props.id}/analysis`)} disabled={props.selected === 1}>분석</TabButton>
            <TabButton onClick={() => props.history.replace(`/${props.id}/rank`)} disabled={props.selected === 2}>순위</TabButton>
        </Container>
    );
}

export default withRouter(Tab);

const Container = styled.div`
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 20%;
    box-sizing: border-box;
    background-color: white;
    border-top: 1px solid lightgray;
`