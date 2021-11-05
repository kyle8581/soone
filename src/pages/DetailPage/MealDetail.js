import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { getMealData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row, Element, Divider } from "./style";
import BigCard from "../../components/BigCard";
import WeekSelector from "../../components/WeekSelector";

function MealDetail(props) {
    const { id } = useParams();
    const [week, setWeek] = useState(0);

    const mealData = getMealData(id);
    const daily = mealData.daily;
    const outlier = mealData.outlier;

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>식사</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    {
                        daily[week].map((data, index) => (
                                <Row key={index}>
                                    <Element>{week * 7 + index + 1}일</Element>
                                    <Divider/>
                                    <Element>{data.brkfst?.toFixed(0) || "?"}시</Element>
                                    <Element>{data.lnch?.toFixed(0) || "?"}시</Element>
                                    <Element>{data.dnr?.toFixed(0) || "?"}시</Element>
                                </Row>
                            ))
                    }
                    <WeekSelector week={week} setWeek={setWeek}/>
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
