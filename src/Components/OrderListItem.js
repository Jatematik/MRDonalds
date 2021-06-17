import React from 'react';
import styled from 'styled-components';
import trashImage from '../images/trash.svg';

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImage});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
`;

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;
`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: center;
`;

export const OrderListItem = () => (
    <OrderItemStyled>
        <ItemName>JS Burger</ItemName>
        <span>2</span>
        <ItemPrice>400 Р</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);