import React from "react";
import { useParams } from "react-router-dom";

import { getScoreGraphData } from "../../util/GraphDataGenerator";
import { getActivityData, getChatData, getExerciseData, getMealData, getMedicineData, getSleepData, getTitleData, getToiletData } from "../../util/DataParser";

import { Container, ContentContainer, Row, Title, Description, Column, Message } from "./style";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";
import { IoMdHappy, IoMdSad } from "react-icons/io";

import RadarChartComp from "../../graph/RadarChartComp";
import { generateActivityMessage, generateExerciseMessage, generateMealMessage, generateMedicineMessage, generateSleepMessage, generateToiletMessage } from "../../util/MessageGenerator";

function SummaryPage(props) {
    const { id } = useParams();

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    // Graph
    const scoreGraphData = getScoreGraphData(id);

    // Habit score
    const sleepScore = getSleepData(id).summary.score.toFixed(0);
    const mealScore = getMealData(id).summary.score.toFixed(0);
    const toiletScore = getToiletData(id).summary.score.toFixed(0);
    const exerciseScore = getExerciseData(id).summary.score.toFixed(0);
    const medicineScore = getMedicineData(id).summary.score.toFixed(0);
    const activityScore = getActivityData(id).summary[0].ac_score.toFixed(0);

    // Habit message
    const sleepMessage = generateSleepMessage(id);
    const mealMessage = generateMealMessage(id);
    const toiletMessage = generateToiletMessage(id);
    const exerciseMessage = generateExerciseMessage(id);
    const medicineMessage = generateMedicineMessage(id);
    const activityMessage = generateActivityMessage(id);

    // Title
    const titleData = getTitleData(id);

    // Chat
    const chatSummaryData = getChatData(id).summary;

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <RadarChartComp data={scoreGraphData}/>
                <SmallCard title="수면" score={sleepScore} message={sleepMessage} onClick={() => goDetail('1')}/>
                <SmallCard title="식사" score={mealScore} message={mealMessage} onClick={() => goDetail('2')}/>
                <SmallCard title="배변" score={toiletScore} message={toiletMessage} onClick={() => goDetail('3')}/>
                <SmallCard title="운동" score={exerciseScore} message={exerciseMessage} onClick={() => goDetail('4')}/>
                <SmallCard title="약 복용" score={medicineScore} message={medicineMessage} onClick={() => goDetail('5')}/>
                <SmallCard title="활동" score={activityScore} message={activityMessage} onClick={() => goDetail('6')}/>
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
                    <Column>
                        {chatSummaryData.dis_sc >= 0.5 ? <IoMdHappy size="3rem"/> : <IoMdSad size="3rem"/>}
                        <Message>{chatSummaryData.summ || `순이와 많은 대화를 나누지 않으셨네요ㅠㅠ 순이와 자주 대화해보시는 건 어떨까요?`}</Message>
                    </Column>
                </BigCard>
            </ContentContainer>
            <Tab id={id} selected={0}/>
        </Container>
    );
}

export default SummaryPage;
