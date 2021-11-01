import React from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import BigCard from "../../components/BigCard";

function DetailPage(props) {
    const { id, habit } = useParams();
    const titles = ['수면', '식사', '배변', '운동', '약 복용', '활동'];

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>{titles[habit - 1] || "알 수 없는 습관"}</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="이상치">
                    Content
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default DetailPage;
