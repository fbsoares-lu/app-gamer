import React from 'react';
import { Image, View } from 'react-native';

import ImageBackground from '../../assets/image-01.png';
import CartAdd from '../../assets/icons/cart-add.svg';

import {
    Container,
    ContentCard,
    ImageCard,
    Title,
    Plataform,
    Category,
    ButtonCard,
    Price,
    CategoryCard,
    CardContent,
    CardContentText,
} from './styles';

export function GameCard() {
    return (
        <Container>
            <View style={{ padding: 0}}>
                <ImageCard source={ImageBackground} resizeMode="cover" />
            </View>
            <ContentCard>
                <Title>The Legend of Zelda: {'\n'}Link's Awaking</Title>
                <Plataform>Plataforma: Nintendo Switch</Plataform>
                <Category>Categoria/Gênero</Category>
                <CategoryCard>
                    <CardContent>
                        <CardContentText>Ação</CardContentText>
                    </CardContent>
                    <CardContent>
                        <CardContentText>Aventura</CardContentText>
                    </CardContent>
                    <CardContent>
                        <CardContentText>Aventura</CardContentText>
                    </CardContent>
                </CategoryCard>
            </ContentCard>
            <ButtonCard>
                <CartAdd />
                <Price>R$ 299,00</Price>
            </ButtonCard>
        </Container>
    )
}