import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { FlatList} from 'react-native-gesture-handler';

import CartClick from '../../assets/icons/cart-click.svg';
import Logo from '../../assets/logo.svg';
import { GameCard } from '../../components/GameCard';
import { useCart } from '../../hooks/cart';
import {games} from '../../utils/data';

import {
    Container,
    Header,
    Title,
    TitleBold,
    CartButton,
    Footer
} from './styles';


export function Home() {
    const navigation = useNavigation();
    const { removeCart } = useCart();
    useEffect(() => {
        removeCart(0)
    }, []);
    return(
        <Container>
            <Header>
                <Logo height="50" width="143"/>
                <CartButton onPress={() => navigation.navigate('Cart')}>
                    <CartClick />
                </CartButton>
            </Header>

            <Title>Games {'\n'}
                <TitleBold>Populares</TitleBold>
            </Title>

            <FlatList 
                showsVerticalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={{
                    flexDirection: 'column', 
                }}
                data={games}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => 
                    <GameCard data={item} />
                }
            />
            <Footer />
        </Container>
    )
}