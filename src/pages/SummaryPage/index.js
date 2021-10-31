import React from "react";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function SummaryPage(props) {
    return (
        <Container>
            <Header user="456"/>
            <ContentContainer>
                <SmallCard title="수면" score={70} message="가끔 새벽에 늦게 주무시는 것을 피하시면 더 좋은 수면 습관을 가지실 수 있을 거에요!"/>
                <SmallCard title="식사" score={89} message="아침, 점심, 저녁 잘 챙겨드시고 꽤 규칙적인 식사 습관을 가지고 있어요!"/>
                <SmallCard title="배변" score={60} message="하루 2번씩, 주로 아침 먹고 화장실에 가시네요!"/>
                <SmallCard title="운동" score={95} message="무려 한 달 중 절반 이상을 운동하러 나가셨어요! 정말 좋은걸요?"/>
                <SmallCard title="약 복용" score={38} message="아침에 약을 꾸준히 복용하시면 더 좋을 것 같아요!"/>
                <SmallCard title="활동" score={70} message="힐링 활동을 좋아하시네요! 다른 활동도 참여해보시면 어떨까요?"/>
                <BigCard title="타이틀">
                    Content
                </BigCard>
                <BigCard title="순이와의 대화">
                    Content
                </BigCard>
            </ContentContainer>
            <Tab selected={0}/>
        </Container>
    );
}

export default SummaryPage;
