import React from 'react';
import styled from 'styled-components';
import trashImage from '../../images/trash.svg';
import { TotalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

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

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const ItemToppingWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const ItemTopping = styled.span`
    font-size: 14px;
    line-height: 16px;
    color: #9A9A9A;
`;

export const OrderListItem = ({order, setOrders, orders}) => {

    function deleteItem(order) {
        const newOrders = orders.filter(item => item.id !== order.id);
        return setOrders(newOrders);
    }

    const topping = order.topping.filter(item => item.checked).map(item => item.name).join(', ').toLowerCase();

    return (
        <OrderItemStyled>
            <ItemWrapper>
                <ItemName>{order.name} {order.choice}</ItemName>
                {topping && <ItemToppingWrap>
                    <ItemTopping>{topping}</ItemTopping>
                </ItemToppingWrap>}
            </ItemWrapper>
            <div style={{display: 'flex'}}>
                <span style={{marginLeft: '5px'}}>{order.count}</span>
                <ItemPrice>{formatCurrency(TotalPriceItems(order))}</ItemPrice>
                <TrashButton onClick={()=>deleteItem(order)}/>
            </div>
        </OrderItemStyled>
    )
};