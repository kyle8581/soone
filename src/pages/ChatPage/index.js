import React from "react";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import Chatbox from "../../components/Chatbox";

function ChatPage(props) {
    return (
        <Container>
            <Header>
                <BackButton>&lt;</BackButton>
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
