import React from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import Chatbox from "../../components/Chatbox";

function ChatPage(props) {
    const { id } = useParams();

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>순이와의 대화</Title>
            </Header>
            <ContentContainer>
                <Chatbox message="안녕하세요!" counter emotion="HAPPY"/>
                <Chatbox message="안녕하세요!"/>
                <Chatbox message="안녕하세요!" counter emotion="SAD"/>
                <Chatbox message="안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요!"/>
                <Chatbox message="안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요! 안녕하세요!" counter emotion="HAPPY"/>
                <Chatbox message="안녕하세요!"/>
            </ContentContainer>
        </Container>
    );
}

export default ChatPage;
