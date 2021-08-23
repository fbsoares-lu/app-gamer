import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import CartAdd from '../../assets/icons/cart-add.svg';
import { useCart } from '../../hooks/cart';
import Toast from 'react-native-root-toast';

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

export interface Products {
    id: number;
    image: string;
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
}
interface Props {
    data: Products;
}

export function GameCard({ data }: Props) {
    const { addCart } = useCart();

    function handleAddCart(item: Products) {
        let toast = Toast.show('Item adicionado ao carrinho', {
            duration: Toast.durations.LONG,
        });
    
        setTimeout(function hideToast() {
        Toast.hide(toast);
        }, 1500);
        console.log("antes de entrar no cart: "+item);
        addCart(item);
    }

    return (
        <Container>
            <View>
                <ImageCard source={{ uri: `${data.image}`}} resizeMode="cover" />
            </View>
            <ContentCard>
                <Title>{data.name}</Title>
                <Plataform>Plataforma: {data.plataform}</Plataform>
                <Category>Categoria/Gênero</Category>
                <CategoryCard>
                {data.category.map(item => (
                    <CardContent key={item.id}>
                        <CardContentText>{item.name}</CardContentText>
                    </CardContent>
                ))}
                </CategoryCard>
                
            </ContentCard>
            <ButtonCard onPress={() => handleAddCart(data)}>
                <CartAdd />
                <Price>{String(data.price) === 'R$0,00' ? 'Gratuito p/ jogar' : data.price}</Price>
            </ButtonCard>
        </Container>
    )
}