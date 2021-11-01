import React from "react";
import { useParams } from "react-router-dom";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function AnalysisPage(props) {
    const { id } = useParams();

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="수면">
                    Content
                </BigCard>
                <BigCard title="식사">
                    Content
                </BigCard>
                <BigCard title="배변">
                    Content
                </BigCard>
                <BigCard title="운동">
                    Content
                </BigCard>
                <BigCard title="약 복용">
                    Content
                </BigCard>
                <BigCard title="활동">
                    Content
                </BigCard>
                <BigCard title="순이와의 대화">
                    Content
                </BigCard>
            </ContentContainer>
            <Tab selected={1}/>
        </Container>
    );
}

export default AnalysisPage;
