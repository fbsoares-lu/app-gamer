import React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { useEffect } from 'react';

export interface IGameCard {
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
    data: IGameCard;
}

export function GameCard({ data }: Props) {
    const dataKey = '@appgamer:games';
    
    async function handleAddGames(data: Omit<IGameCard, "plataform"|"category">) {
        try {
            const oldData = await AsyncStorage.getItem(dataKey);
            const currentData = oldData ? JSON.parse(oldData) : [];

            const dataFormatted = [
                ...currentData,
                data
            ];

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function remove() {
            await AsyncStorage.removeItem(dataKey);
        }
        remove();
    }, []);

    return (
        <Container
            onPress={() => {
                handleAddGames(data)
            }}
        >
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
            <ButtonCard>
                <CartAdd />
                <Price>R$ {data.price}</Price>
            </ButtonCard>
        </Container>
    )
}