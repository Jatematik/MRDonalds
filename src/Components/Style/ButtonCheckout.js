import styled from 'styled-components';

export const ButtonCheckout = styled.button`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 65px;
    background-color: #299B01;
    font-size: 21px;
    line-height: 25px;
    color: #fff;
    border: 2px solid transparent;
    transition: 0.25s;
    cursor: pointer;
    &:hover {
        border: 2px solid #299B01;
        background-color: #fff;
        color: #299B01;
    }
`;