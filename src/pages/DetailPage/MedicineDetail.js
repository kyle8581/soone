import React from "react";
import { useParams } from "react-router-dom";

import { Container, Header, Title, BackButton, ContentContainer } from "./style";
import BigCard from "../../components/BigCard";

function MedicineDetail(props) {
    const { id } = useParams();

    const goBack = () => props.history.goBack();
    
    return (
        <Container>
            <Header>
                <BackButton onClick={goBack}>&lt;</BackButton>
                <Title>약 복용</Title>
            </Header>
            <ContentContainer>
                <BigCard title="일별 기록">
                    Content
                </BigCard>
                <BigCard title="이상치">
                    Content
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default MedicineDetail;
