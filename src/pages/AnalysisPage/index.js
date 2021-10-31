import React from "react";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function AnalysisPage(props) {
    return (
        <Container>
            <Header user="456"/>
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
