import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getMedicineData } from "../../util/DataParser";
import { getMedicineDailyGraphData } from "../../util/GraphDataGenerator";

import { Container, Header, Title, BackButton, ContentContainer, Row, Column } from "./style";
import BigCard from "../../components/BigCard";
import WeekSelector from "../../components/WeekSelector";
import SimpleBarChartComp from "../../graph/SimpleBarChartComp";

function MedicineDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const medicineDailyGraphData = getMedicineDailyGraphData(id, week);
    const outlier = getMedicineData(id).outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>약 복용</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    <Column>
                        <SimpleBarChartComp data={medicineDailyGraphData}/>
                        <WeekSelector week={week} setWeek={setWeek}/>
                    </Column>
                </BigCard>
                <BigCard title="평소와 다르게 약을 복용한 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default MedicineDetail;
