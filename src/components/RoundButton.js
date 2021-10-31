import styled from "styled-components";

function RoundButton(props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

export default RoundButton;

const Button = styled.button`
    width: 120px;
    height: 24px;
    background: none;
    border: none;
    border: 1px solid black;
    border-radius: 12px;
    font-size: 0.8rem;
    color: black;

    &:hover {
        opacity: 0.5;
    }
    &:active {
        opacity: 0.3;
    }
`