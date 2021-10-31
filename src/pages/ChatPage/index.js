import React from "react";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";

function ChatPage(props) {
    return (
        <Container>
            <Header>
                <BackButton>&lt;</BackButton>
                <Title>순이와의 대화</Title>
            </Header>
            <ContentContainer>

            </ContentContainer>
        </Container>
    );
}

export default ChatPage;
