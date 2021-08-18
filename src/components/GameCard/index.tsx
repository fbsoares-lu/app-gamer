import React from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';

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

interface IGameCard {
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
    return (
        // <View style={{flex: 1, justifyContent: 'space-between', marginBottom: 11}}>
        <Container onPress={() => {
            Toast.show('Item adicionado ao carrinho', {
                duration: Toast.durations.SHORT,
            })
        }}>
            <Toast 
                style={{backgroundColor: '#ff3000'}}
            />
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
        // </View>
    )
}