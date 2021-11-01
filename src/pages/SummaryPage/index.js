import React from "react";
import { useParams } from "react-router-dom";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function SummaryPage(props) {
    const { id } = useParams();

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <SmallCard title="수면" score={0} message="" onClick={() => goDetail('1')}/>
                <SmallCard title="식사" score={0} message="" onClick={() => goDetail('2')}/>
                <SmallCard title="배변" score={0} message="" onClick={() => goDetail('3')}/>
                <SmallCard title="운동" score={0} message="" onClick={() => goDetail('4')}/>
                <SmallCard title="약 복용" score={0} message="" onClick={() => goDetail('5')}/>
                <SmallCard title="활동" score={0} message="" onClick={() => goDetail('6')}/>
                <BigCard title="타이틀">
                    Content
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
