import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getSleepData } from "../../util/DataParser";
import { getSleepDailyGraphData } from "../../util/GraphDataGenerator";

import { Container, Header, Title, BackButton, ContentContainer, Row, Column } from "./style";
import BigCard from "../../components/BigCard";
import BarChartComp from "../../graph/BarChartComp";
import WeekSelector from "../../components/WeekSelector";

function SleepDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const sleepDailyGraphData = getSleepDailyGraphData(id, week);
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
                    <Column>
                        <BarChartComp data={sleepDailyGraphData}/>
                        <WeekSelector week={week} setWeek={setWeek}/>
                    </Column>
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
