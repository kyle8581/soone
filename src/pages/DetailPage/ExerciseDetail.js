import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getExerciseData } from "../../util/DataParser";
import { getExerciseDailyGraphData } from "../../util/GraphDataGenerator";

import { Container, Header, Title, BackButton, ContentContainer, Row, Column } from "./style";
import BigCard from "../../components/BigCard";
import WeekSelector from "../../components/WeekSelector";
import SimpleBarChartComp from "../../graph/SimpleBarChartComp";

function ExerciseDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const exerciseDailyGraphData = getExerciseDailyGraphData(id, week);
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
                    <Column>
                        <SimpleBarChartComp data={exerciseDailyGraphData}/>
                        <WeekSelector week={week} setWeek={setWeek}/>
                    </Column>
                </BigCard>
                <BigCard title="평소와 달리 운동을 하지 않은 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ExerciseDetail;
