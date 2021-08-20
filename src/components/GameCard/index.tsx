import React from 'react';
import { View } from 'react-native';
import CartAdd from '../../assets/icons/cart-add.svg';
import { useCart } from '../../hooks/cart';

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
    price: number
}
interface Props {
    data: Products;
}

export function GameCard({ data }: Props) {
    const { addCart } = useCart();

    function handleAddCart(item: Products) {
        addCart(item);
    }

    return (
        <Container>
            <View>
                <ImageCard source={data.image} resizeMode="cover" />
            </View>
            <ContentCard>
                <Title>{data.name}</Title>
                <Plataform>Plataforma: {data.plataform.map(item => item.name.concat('/ '))}</Plataform>
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
                <Price>R$ {data.price}</Price>
            </ButtonCard>
        </Container>
    )
}