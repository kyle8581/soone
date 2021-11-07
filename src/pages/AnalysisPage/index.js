import React from "react";
import { useParams } from "react-router-dom";

import { getActivityData, getExerciseData, getMealData, getMedicineData, getSleepData, getToiletData } from "../../util/DataParser";
import { getActivityPercentageGraphData, getExerciseTimeGraphData, getMedicineTimeGraphData, getSleepLengthGraphData, getToiletTimeGraphData } from "../../util/GraphDataGenerator";
import { getMaxActivity } from "../../util/MaxActivityParser";

import { Container, ContentContainer, Column, Description, Divider } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";
import SimpleAreaChartComp from "../../graph/SimpleAreaChartComp";
import TreeMapChartComp from "../../graph/TreeMapChartComp";
import RadarChartComp from "../../graph/RadarChartComp";

function AnalysisPage(props) {
    const { id } = useParams();

    const sleepData = getSleepData(id);
    const mealData = getMealData(id);
    const toiletData = getToiletData(id);
    const exerciseData = getExerciseData(id);
    const medicineData = getMedicineData(id);
    const activityData = getActivityData(id);

    const sleepLengthGraphData = getSleepLengthGraphData(id); 
    const toiletTimeGraphData = getToiletTimeGraphData(id);
    const exerciseTimeGraphData = getExerciseTimeGraphData(id);
    const medicineTimeGraphData = getMedicineTimeGraphData(id);
    const activityPercentageGraphData = getActivityPercentageGraphData(id);

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="수면" onClick={() => goDetail('sleep')}>
                    <Column>
                        <Description>
                            보통 {sleepData.summary.avg_down?.toFixed(0)}시에 주무시고 {sleepData.summary.avg_up?.toFixed(0)}시에 일어나시네요!<br/>
                            다른 분들은 평균 {sleepData.all.avg_down?.toFixed(0)}시에 주무시고 {sleepData.all.avg_up?.toFixed(0)}시에 일어나셔요!
                        </Description>
                        <Divider/>
                        <SimpleAreaChartComp data={sleepLengthGraphData}/>
                        <Description>
                            보통 {sleepData.summary.avg_length?.toFixed(1)}시간 주무시네요!<br/>
                            다른 분들은 평균 {sleepData.all.avg_length?.toFixed(1)}시간 주무셔요!
                        </Description>
                    </Column>
                </BigCard>
                <BigCard title="식사" onClick={() => goDetail('meal')}>
                    <Column>
                        <Description>
                            보통 아침을 {mealData.summary.avg_brkfst?.toFixed(0)}시에, 점심을 {mealData.summary.avg_lnch?.toFixed(0)}시에, 저녁을 {mealData.summary.avg_dnr?.toFixed(0)}시에 드시네요!<br/>
                            다른 분들은 주로 아침을 {mealData.all.avg_brkfst?.toFixed(0)}시에, 점심을 {mealData.all.avg_lnch?.toFixed(0)}시에, 저녁을 {mealData.all.avg_dnr?.toFixed(0)}시에 드셔요!
                        </Description>
                    </Column>
                </BigCard>
                <BigCard title="배변" onClick={() => goDetail('toilet')}>
                    <Column>
                        <Description>
                            보통 화장실에 {toiletData.summary.avg_count?.toFixed(0)}번 가시네요!<br/>
                            다른 분들은 화장실을 평균 {toiletData.all.avg_count?.toFixed(0)}번 가셔요!
                        </Description>
                        <Divider/>
                        <TreeMapChartComp data={toiletTimeGraphData}/>
                        <Description>
                            주로 화장실을 {toiletData.summary.top_5[0]}시에 가시네요!<br/>
                            다른 분들은 화장실을 보통 {toiletData.all.top_5[0]}시에 가셔요!
                        </Description>
                    </Column>
                </BigCard>
                <BigCard title="운동" onClick={() => goDetail('exercise')}>
                    <Column>
                        <Description>
                            보통 운동을 {exerciseData.summary.avg_count?.toFixed(0)}번 가시네요!<br/>
                            다른 분들은 운동을 평균 {exerciseData.all.avg_count?.toFixed(0)}번 가셔요!
                        </Description>
                        <Divider/>
                        <TreeMapChartComp data={exerciseTimeGraphData}/>
                        <Description>
                            주로 운동을 {exerciseData.summary.top_3[0]}시에 시작하시네요!<br/>
                            다른 분들은 운동을 보통 {exerciseData.all.top_3[0]}시에 시작하셔요!
                        </Description>
                    </Column>
                </BigCard>
                <BigCard title="약 복용" onClick={() => goDetail('medicine')}>
                    <Column>
                        <Description>
                            보통 약을 {medicineData.summary.avg_count?.toFixed(0)}번 복용하시네요!<br/>
                            다른 분들은 약을 평균 {medicineData.all.avg_count?.toFixed(0)}번 복용하셔요!
                        </Description>
                        <Divider/>
                        <TreeMapChartComp data={medicineTimeGraphData}/>
                        <Description>
                            주로 약을 {medicineData.summary.top_3[0]}시에 복용하시네요!<br/>
                            다른 분들은 약을 보통 {medicineData.all.top_3[0]}시에 복용하셔요!
                        </Description>
                    </Column>
                </BigCard>
                <BigCard title="활동" onClick={() => goDetail('activity')}>
                    <Column>
                        <RadarChartComp data={activityPercentageGraphData}/>
                        <Description>
                            {getMaxActivity(activityData.summary).type} 활동을 가장 많이 하시네요!<br/>
                            다른 분들은 보통 {getMaxActivity(activityData.all).type} 활동을 가장 많이 하셔요!
                        </Description>
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
