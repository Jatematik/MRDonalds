import React from 'react';
import styled from 'styled-components';
import { AddCartButton } from './AddCartButton';

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

export const ModalItem = ({ openItem, setOpenItem }) => {

    function closeModal(e) {
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) return null;

    return (
        <Overlay id="overlay" onClick={closeModal}>
            <Modal>
                <div>
                    <Banner img={openItem.img}/>
                    <BurgerInfo>
                        <span>{openItem.name}</span>
                        <span>{openItem.price.toLocaleString('ru-RU', {
                            style: 'currency',
                            currency: 'RUB'
                        })}
                        </span>
                    </BurgerInfo>
                </div>
                <AddCartButton/>
            </Modal>
        </Overlay>
    )
}