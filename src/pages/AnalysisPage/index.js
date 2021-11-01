import React from "react";
import { useParams } from "react-router-dom";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function AnalysisPage(props) {
    const { id } = useParams();

    const goDetail = (type) => props.history.push(`/${id}/detail/${type}`); 

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="수면" onClick={() => goDetail('1')}>
                    Content
                </BigCard>
                <BigCard title="식사" onClick={() => goDetail('2')}>
                    Content
                </BigCard>
                <BigCard title="배변" onClick={() => goDetail('3')}>
                    Content
                </BigCard>
                <BigCard title="운동" onClick={() => goDetail('4')}>
                    Content
                </BigCard>
                <BigCard title="약 복용" onClick={() => goDetail('5')}>
                    Content
                </BigCard>
                <BigCard title="활동" onClick={() => goDetail('6')}>
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
