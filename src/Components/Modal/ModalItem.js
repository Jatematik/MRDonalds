import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import secondaryFunction from '../Functions/secondaryFunction';

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`;

const Modal = styled.div`
    padding-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    height: 600px;
    background-color: #fff;
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-position: center;
    background-size: cover;
    margin-bottom: 20px;
`;

const BurgerInfo = styled.div`
    padding: 0 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    line-height: 53px;
    font-family: Pacifico, sans-serif;
`;

const TotalPriceItem = styled.div`
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
`;

export const TotalPriceItems = order => order.price * order.count;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount();

    const closeModal = e => {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem,
        count: counter.count
    };

    const addToOrder = () => {
        setOrders([...orders, order]);
        setOpenItem(null);
    }

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <div>
                    <Banner img={openItem.img}/>
                    <BurgerInfo>
                        <span>{openItem.name}</span>
                        <span>{secondaryFunction(openItem.price)}</span>
                    </BurgerInfo>
                </div>
                <CountItem {...counter}/>
                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{secondaryFunction(TotalPriceItems(order))}</span>
                </TotalPriceItem>
                <ButtonCheckout onClick={addToOrder}>
                    Добавить
                </ButtonCheckout>
            </Modal>
        </Overlay>
    )
}