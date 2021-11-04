import React from "react";
import { useParams } from "react-router-dom";

import { getExerciseData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row } from "./style";
import BigCard from "../../components/BigCard";

function ExerciseDetail(props) {
    const { id } = useParams();

    const outlier = getExerciseData(id).outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>운동</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="평소와 달리 운동을 하지 않은 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ExerciseDetail;
