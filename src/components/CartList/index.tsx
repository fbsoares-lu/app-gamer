import React, { useEffect, useState } from 'react';

import { IGameCard } from '../GameCard';

import Plus from '../../assets/icons/plus-icon.svg';
import Minus from '../../assets/icons/minus-icon.svg'

import {
    Container,
    Content,
    ImageContainer,
    ImageContainerCard,
    ContentText,
    Text,
    Price,
    ButtonCounter,
    Counter
} from './styles';

interface Props {
    data: IGameCard;
}

export function CartList({ data }: Props) {
    return(
        <Container>
            <Content style={{flexDirection: 'row', alignItems: 'center'}}>
                <ImageContainer>
                    <ImageContainerCard source={data.image} resizeMode="cover" />
                </ImageContainer>

                <ContentText>
                    <Text>{data.name}</Text>
                    <Price>{data.price}</Price>
                </ContentText>
            </Content>

            <ButtonCounter>
                <Plus height={8} width={8} />
                <Counter>1</Counter>
                <Minus height={8} width={8} />
            </ButtonCounter>
        </Container>
    )
}