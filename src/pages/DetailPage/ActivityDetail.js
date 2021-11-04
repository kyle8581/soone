import React from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import BigCard from "../../components/BigCard";

function ActivityDetail(props) {
    const { id } = useParams();

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>활동</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="순이 활동">
                    Content
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ActivityDetail;
