import React from "react";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function RankPage(props) {
    return (
        <Container>
            <Header user="456"/>
            <ContentContainer>
                <BigCard title="한 달 동안의 순위">
                    Content
                </BigCard>
            </ContentContainer>
            <Tab selected={2}/>
        </Container>
    );
}

export default RankPage;
