import React from "react";
import { useParams } from "react-router-dom";

import { getMedicineData } from "../../util/DataParser";

import { Container, Header, Title, BackButton, ContentContainer, Row } from "./style";
import BigCard from "../../components/BigCard";

function MedicineDetail(props) {
    const { id } = useParams();

    const outlier = getMedicineData(id).outlier;

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
                <BigCard title="평소와 다르게 약을 복용한 날">
                    {outlier.map((day, index) => <Row key={index}>{day}일</Row>)}
                </BigCard>
            </ContentContainer>
        </Container>
    );
}

export default MedicineDetail;
