import React from "react";
import { useParams } from "react-router-dom";

import { getScoreGraphData } from "../../util/GraphDataGenerator";
import { getActivityData, getSleepData, getTitleData } from "../../util/DataParser";

import { Container, ContentContainer, Row, Title, Description } from "./style";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

import RadarChartComp from "../../graph/RadarChartComp";

function SummaryPage(props) {
    const { id } = useParams();

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    // Graph
    const scoreGraphData = getScoreGraphData(id);

    // Habit
    const sleepSummaryData = getSleepData(id).summary;
    const activitySummaryData = getActivityData(id).summary;

    // Title
    const titleData = getTitleData(id);

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <RadarChartComp data={scoreGraphData}/>
                <SmallCard title="수면" score={sleepSummaryData.score.toFixed(0)} message="" onClick={() => goDetail('1')}/>
                <SmallCard title="식사" score={88} message="" onClick={() => goDetail('2')}/>
                <SmallCard title="배변" score={60} message="" onClick={() => goDetail('3')}/>
                <SmallCard title="운동" score={95} message="" onClick={() => goDetail('4')}/>
                <SmallCard title="약 복용" score={38} message="" onClick={() => goDetail('5')}/>
                <SmallCard title="활동" score={activitySummaryData[0].ac_score.toFixed(0)} message="" onClick={() => goDetail('6')}/>
                <BigCard title="타이틀">
                    {
                        titleData.map((title, index) => (
                            <Row key={index}>
                                <Title>{title[0]}</Title>
                                <Description>{title[1]}</Description>
                            </Row>
                        ))
                    }
                </BigCard>
                <BigCard title="순이와의 대화" onClick={() => props.history.push(`/${id}/chat`)}>
                    Content
                </BigCard>
            </ContentContainer>
            <Tab id={id} selected={0}/>
        </Container>
    );
}

export default SummaryPage;
