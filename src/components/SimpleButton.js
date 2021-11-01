import styled from "styled-components";

function SimpleButton(props) {
    return (
        <Button {...props}>{props.children}</Button>
    );
}

export default SimpleButton;

const Button = styled.button`
    height: 24px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: black;

    &:hover {
        opacity: 0.5;
    }
    &:active {
        opacity: 0.3;
    }
`