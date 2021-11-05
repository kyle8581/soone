import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getActivityData } from "../../util/DataParser";
import { getSonneActivityGraphData } from "../../util/GraphDataGenerator";

import { Container, Header, Title, BackButton, ContentContainer, Row, Element, List, ListElement, Divider } from "./style";
import BigCard from "../../components/BigCard";
import WeekSelector from "../../components/WeekSelector";
import SimplePieChartComp from "../../graph/SimplePieChartComp";

function ActivityDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const daily = getActivityData(id).daily;
    const sooneActivityGraphData = getSonneActivityGraphData(id);

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>활동</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    {
                        daily[week].map((data, index) => (
                                <Row key={index}>
                                    <Element>{week * 7 + index + 1}일</Element>
                                    <Divider/>
                                    <List>
                                        {data.map((ele, idx) => <ListElement key={idx}>{ele}</ListElement>)}
                                    </List>
                                </Row>
                            ))
                    }
                    <WeekSelector week={week} setWeek={setWeek}/>
                </BigCard>
                <BigCard title="순이 활동">
                    <SimplePieChartComp data={sooneActivityGraphData}/>
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default ActivityDetail;
