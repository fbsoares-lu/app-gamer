import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IGameCard } from '../../components/GameCard';
import { CartList } from '../../components/CartList';
import Arrow from '../../assets/icons/arrow.svg';

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
    const dataKey = '@appgamer:games';

    const [games, setGames] = useState<IGameCard[]>([]);

    useEffect(() => {
        async function loadGames() {
            try {
                const response = await AsyncStorage.getItem(dataKey);
                const games = response ? JSON.parse(response): [];

                const gamesFormattedTypes: IGameCard[] = games.map((item: IGameCard) => {
                    const price = item.price
                    .toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    });

                    return {
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        price: item.price
                    }
                });
                setGames(gamesFormattedTypes);
            } catch(err) {
                console.log(err);
            }
        }
        loadGames();
    }, []);

    return (
        <Container>
            <HomeButton onPress={() => navigate.goBack()}>
                <Arrow />
            </HomeButton>
            <Title>Seu {'\n'}
                <TitleBold>Carrinho</TitleBold>
            </Title>
            
            <FlatList 
            showsVerticalScrollIndicator={false}
                data={games}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => 
                    <CartList data={item} />
                }
            />

            
        </Container>
    )
}