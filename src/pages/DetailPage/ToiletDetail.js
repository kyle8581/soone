import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getToiletData } from "../../util/DataParser";
import { getToiletDailyGraphData } from "../../util/GraphDataGenerator";

import { Container, Header, Title, BackButton, ContentContainer, Row, Column } from "./style";
import BigCard from "../../components/BigCard";
import WeekSelector from "../../components/WeekSelector";
import SimpleBarChartComp from "../../graph/SimpleBarChartComp";

function ToiletDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const toiletDailyGraphData = getToiletDailyGraphData(id, week);
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
                    <Column>
                        <SimpleBarChartComp data={toiletDailyGraphData}/>
                        <WeekSelector week={week} setWeek={setWeek}/>
                    </Column>
                </BigCard>
                <BigCard title="평소와 배변 습관이 달랐던 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ToiletDetail;
