import React from "react";
import { useParams } from "react-router-dom";

import { getSleepData } from "../../util/DataParser";
import { getSleepLengthGraphData } from "../../util/GraphDataGenerator";

import { Container, ContentContainer, Column, Description } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";
import BubbleChartComp from "../../graph/BubbleChartComp";

function AnalysisPage(props) {
    const { id } = useParams();

    const sleepSummaryData = getSleepData(id).summary;
    const sleepLengthGraphData = getSleepLengthGraphData(id); 

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="수면" onClick={() => goDetail('sleep')}>
                    <Column>
                        <Description>보통 {sleepSummaryData.avg_down.toFixed(0)}시에 주무시고 {sleepSummaryData.avg_up.toFixed(0)}시에 일어나시네요!</Description>
                        <BubbleChartComp data={sleepLengthGraphData}/>
                        <Description>평균적으로 {sleepSummaryData.avg_length.toFixed(1)}시간 주무시네요!</Description>
                    </Column>
                </BigCard>
                <BigCard title="식사" onClick={() => goDetail('meal')}>
                    Content
                </BigCard>
                <BigCard title="배변" onClick={() => goDetail('toilet')}>
                    Content
                </BigCard>
                <BigCard title="운동" onClick={() => goDetail('exercise')}>
                    Content
                </BigCard>
                <BigCard title="약 복용" onClick={() => goDetail('medicine')}>
                    Content
                </BigCard>
                <BigCard title="활동" onClick={() => goDetail('activity')}>
                    Content
                </BigCard>
                <BigCard title="순이와의 대화" onClick={() => props.history.push(`/${id}/chat`)}>
                    Content
                </BigCard>
            </ContentContainer>
            <Tab id={id} selected={1}/>
        </Container>
    );
}

export default AnalysisPage;
