import styled from "styled-components";

function TabButton(props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

export default TabButton;

const Button = styled.button`
    width: 60px;
    height: 30px;
    background: none;
    border: none;
    border-bottom: 2px solid black;
    font-size: 0.9rem;
    color: black;
    opacity: 0.3;

    &:hover {
        opacity: 1;
    }
    &:active {
        opacity: 0.8;
    }
    &:disabled {
        opacity: 1;
    }
`