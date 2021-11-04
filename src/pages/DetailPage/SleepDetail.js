import React from "react";
import { useParams } from "react-router-dom";

import { getSleepData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row } from "./style";
import BigCard from "../../components/BigCard";

function SleepDetail(props) {
    const { id } = useParams();

    const outlier = getSleepData(id).outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>수면</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="아침에 늦게 일어난 날">
                    {outlier.up.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
                <BigCard title="밤에 늦게 잔 날">
                    {outlier.down.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
                <BigCard title="수면 시간이 평소와 달랐던 날">
                    {outlier.length.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default SleepDetail;
