import React from "react";
import { useParams } from "react-router-dom";
import { convertArray } from "../../util/TitleConverter";

import { Container, ContentContainer, Row, Title, Description } from "./style";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

import RadarChartComp from "../../graph/RadarChartComp";

function SummaryPage(props) {
    const { id } = useParams();

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    // Score analysis
    const scoreData = [
        { habit: '수면', me: 70, all: 88 },
        { habit: '식사', me: 88, all: 77 },
        { habit: '배변', me: 60, all: 63 },
        { habit: '운동', me: 95, all: 60 },
        { habit: '약 복용', me: 38, all: 51 },
        { habit: '활동', me: 70, all: 52 },
    ];

    // Title
    const titleData = require('../../default/extra/title.json');
    const convertedTitleData = convertArray(titleData);

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <RadarChartComp data={scoreData}/>
                <SmallCard title="수면" score={70} message="" onClick={() => goDetail('1')}/>
                <SmallCard title="식사" score={88} message="" onClick={() => goDetail('2')}/>
                <SmallCard title="배변" score={60} message="" onClick={() => goDetail('3')}/>
                <SmallCard title="운동" score={95} message="" onClick={() => goDetail('4')}/>
                <SmallCard title="약 복용" score={38} message="" onClick={() => goDetail('5')}/>
                <SmallCard title="활동" score={70} message="" onClick={() => goDetail('6')}/>
                <BigCard title="타이틀">
                    {
                        convertedTitleData.map((title, index) => (
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
