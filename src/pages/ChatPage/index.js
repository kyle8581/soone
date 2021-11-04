import React from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import Chatbox from "../../components/Chatbox";
import { getChatData } from "../../util/DataParser";

function ChatPage(props) {
    const { id } = useParams();

    // Chat data
    const chat = getChatData(id).conversation;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>순이와의 대화</Title>
            </Header>
            <ContentContainer>
                {
                    chat.map((msg, index) => msg.speaker === 0 
                        ? <Chatbox key={index} message={msg.content} counter emotion="HAPPY"/>
                        : <Chatbox key={index} message={msg.content}/>
                    )
                }
            </ContentContainer>
        </Container>
    );
}

export default ChatPage;
