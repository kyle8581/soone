import React from "react";
import { useParams } from "react-router-dom";

import { getMealData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row } from "./style";
import BigCard from "../../components/BigCard";

function MealDetail(props) {
    const { id } = useParams();

    const outlier = getMealData(id).outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>식사</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="아침을 먹지 않은 날">
                    {outlier.brkfst.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
                <BigCard title="점심을 먹지 않은 날">
                    {outlier.lnch.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
                <BigCard title="저녁을 먹지 않은 날">
                    {outlier.dnr.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default MealDetail;
