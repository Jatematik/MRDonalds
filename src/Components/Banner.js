import React from 'react';
import styled from 'styled-components';
import banner from '../images/banner.png'

const BannerImage = styled.img`
    width: 100%;
    height: 210px;
    object-fit: cover;
`;
export const Banner = () => (
    <BannerImage src={banner}/>
)