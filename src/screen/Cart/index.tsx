import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Arrow from '../../assets/icons/arrow.svg';
import Plus from '../../assets/icons/plus-icon.svg';
import Minus from '../../assets/icons/minus-icon.svg';

import ImageBackground from '../../assets/image-01.png';

import {
    Container,
    Title,
    TitleBold,
    Content,
    ImageCard,
    Price,
    Text,
    ContainerText,
    ButtonCounter,
    Number,
    HomeButton
} from './styles';


export function Cart() {
    const navigate = useNavigation();
    return (
        <Container>
            <HomeButton onPress={() => navigate.goBack()}>
                <Arrow />
            </HomeButton>
            <Title>Seu {'\n'}
                <TitleBold>Carrinho</TitleBold>
            </Title>

            <Content>
                <View style={{ padding: 0}}>
                    <ImageCard source={ImageBackground} resizeMode="cover" />
                </View>

                <ContainerText>
                    <Text>The Legend of Zelda: {'\n'}Link's Awakening</Text>
                    <Price>R$ 299,00</Price>
                </ContainerText>

                <ButtonCounter>
                    <Plus height={8} width={8} />
                    <Number>1</Number>
                    <Minus height={8} width={8} />
                </ButtonCounter>
            </Content>

            <Content>
                <View style={{ padding: 0}}>
                    <ImageCard source={ImageBackground} resizeMode="cover" />
                </View>

                <ContainerText>
                    <Text>The Legend of Zelda: {'\n'}Link's Awakening</Text>
                    <Price>R$ 299,00</Price>
                </ContainerText>

                <ButtonCounter>
                    <Plus height={8} width={8} />
                    <Number>1</Number>
                    <Minus height={8} width={8} />
                </ButtonCounter>
            </Content>

            
        </Container>
    )
}