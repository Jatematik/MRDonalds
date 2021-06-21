import React from 'react';
import styled from 'styled-components';
import trashImage from '../../images/trash.svg';
import { TotalPriceItems } from '../Modal/ModalItem';
import secondaryFunction from '../Functions/secondaryFunction';

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

export const OrderListItem = ({order}) => (
    <OrderItemStyled>
        <ItemName>{order.name}</ItemName>
        <span>{order.count}</span>
        <ItemPrice>{secondaryFunction(TotalPriceItems(order))}</ItemPrice>
        <TrashButton/>
    </OrderItemStyled>
);