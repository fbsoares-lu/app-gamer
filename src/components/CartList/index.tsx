import React, { useEffect, useState } from 'react';

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
import { useCart } from '../../hooks/cart';
import { View } from 'react-native';

export interface Products {
    id: number;
    image: Object;
    name: string;
    plataform: [
        {
            id: number,
            name: string;
        }
    ],
    category: [
        {
            id: number,
            name: string;
        }
    ],
    price: number;
    quantity: number;
}
interface Props {
    data: Products;
}

export function CartList({ data }: Props) {
    const { increment, decrement } = useCart();
    
    function handleIncrement(id: number) {
        increment(id);
    }

    function handleDecrement(id: number) {
        decrement(id);
    }

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
                <View>
                <Plus onPress={() => handleIncrement(data.id)} height={8} width={8} />
                </View>
                <Counter>{data.quantity}</Counter>
                <Minus onPress={() => handleDecrement(data.id)} height={8} width={8} />
            </ButtonCounter>
        </Container>
    )
}