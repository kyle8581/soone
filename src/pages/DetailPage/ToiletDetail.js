import React from "react";
import { useParams } from "react-router-dom";

import { getToiletData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row } from "./style";
import BigCard from "../../components/BigCard";

function ToiletDetail(props) {
    const { id } = useParams();

    const outlier = getToiletData(id).outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>배변</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="평소와 배변 습관이 달랐던 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ToiletDetail;
