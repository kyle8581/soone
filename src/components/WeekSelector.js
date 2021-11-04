import styled from "styled-components";

function WeekSelector(props) {
    return (
        <Container>
            <Week onClick={() => props.setWeek(0)} disabled={props.week === 0}>1주</Week>
            <Week onClick={() => props.setWeek(1)} disabled={props.week === 1}>2주</Week>
            <Week onClick={() => props.setWeek(2)} disabled={props.week === 2}>3주</Week>
            <Week onClick={() => props.setWeek(3)} disabled={props.week === 3}>4주</Week>
            <Week onClick={() => props.setWeek(4)} disabled={props.week === 4}>5주</Week>
        </Container>
    );
}

export default WeekSelector;

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 15px;
`
const Week = styled.button`
    margin-top: 15px;
    background: none;
    border: none;
    font-size: 0.9rem;
    color: black;
    border-bottom: 2px solid black;
    opacity: 0.2;

    &:disabled {
        opacity: 1;
    }
`