import React from "react";
import { useParams } from "react-router-dom";

import { Container, ContentContainer } from "./style";
import Header from "../../components/Header";
import BigCard from "../../components/BigCard";
import Tab from "../../components/Tab";

function RankPage(props) {
    const { id } = useParams();

    return (
        <Container>
            <Header user={id}/>
            <ContentContainer>
                <BigCard title="한 달 동안의 순위">
                    Content
                </BigCard>
            </ContentContainer>
            <Tab id={id} selected={2}/>
        </Container>
    );
}

export default RankPage;
