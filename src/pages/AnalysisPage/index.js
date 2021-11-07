import React from "react";
import { useParams } from "react-router-dom";

import { getExerciseData, getMealData, getMedicineData, getSleepData, getToiletData } from "../../util/DataParser";
import { getExerciseTimeGraphData, getMedicineTimeGraphData, getSleepLengthGraphData, getToiletTimeGraphData } from "../../util/GraphDataGenerator";

import { Container, ContentContainer, Column, Description } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";
import TreeMapChartComp from "../../graph/TreeMapChartComp";

function AnalysisPage(props) {
    const { id } = useParams();

    const sleepSummaryData = getSleepData(id).summary;
    const mealSummaryData = getMealData(id).summary;
    const toiletSummaryData = getToiletData(id).summary;
    const exerciseSummaryData = getExerciseData(id).summary;
    const medicineSummaryData = getMedicineData(id).summary;

    const sleepLengthGraphData = getSleepLengthGraphData(id); 
    const toiletTimeGraphData = getToiletTimeGraphData(id);
    const exerciseTimeGraphData = getExerciseTimeGraphData(id);
    const medicineTimeGraphData = getMedicineTimeGraphData(id);

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="수면" onClick={() => goDetail('sleep')}>
                    <Column>
                        <Description>보통 {sleepSummaryData.avg_down.toFixed(0)}시에 주무시고 {sleepSummaryData.avg_up.toFixed(0)}시에 일어나시네요!</Description>
                        [수면 시간 area graph]
                        <Description>평균적으로 {sleepSummaryData.avg_length.toFixed(1)}시간 주무시네요!</Description>
                    </Column>
                </BigCard>
                <BigCard title="식사" onClick={() => goDetail('meal')}>
                    <Column>
                        <Description>보통 아침을 {mealSummaryData.avg_brkfst.toFixed(0)}시에, 점심을 {mealSummaryData.avg_lnch.toFixed(0)}시에, 저녁을 {mealSummaryData.avg_dnr.toFixed(0)}시에 드시네요!</Description>
                        [식사 거른 area graph]
                    </Column>
                </BigCard>
                <BigCard title="배변" onClick={() => goDetail('toilet')}>
                    <Column>
                        <Description>보통 화장실에 {toiletSummaryData.avg_count.toFixed(0)}번 가시네요!</Description>
                        <TreeMapChartComp data={toiletTimeGraphData}/>
                        <Description>주로 화장실을 {toiletSummaryData.top_5[0]}시에 가시네요!</Description>
                    </Column>
                </BigCard>
                <BigCard title="운동" onClick={() => goDetail('exercise')}>
                    <Column>
                        <Description>보통 운동을 {exerciseSummaryData.avg_count.toFixed(0)}번 가시네요!</Description>
                        <TreeMapChartComp data={exerciseTimeGraphData}/>
                        <Description>주로 운동을 {exerciseSummaryData.top_3[0]}시에 시작하시네요!</Description>
                    </Column>
                </BigCard>
                <BigCard title="약 복용" onClick={() => goDetail('medicine')}>
                    <Column>
                        <Description>보통 약을 {medicineSummaryData.avg_count.toFixed(0)}번 복용하시네요!</Description>
                        <TreeMapChartComp data={medicineTimeGraphData}/>
                        <Description>주로 약을 {medicineSummaryData.top_3[0]}시에 복용하시네요!</Description>
                    </Column>
                </BigCard>
                <BigCard title="활동" onClick={() => goDetail('activity')}>
                    <Column>
                        [활동 분야 radar graph]
                    </Column>
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
