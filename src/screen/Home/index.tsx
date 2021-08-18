import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList} from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { useTheme } from 'styled-components';

import CartClick from '../../assets/icons/cart-click.svg';
import Logo from '../../assets/logo.svg';

import { GameCard } from '../../components/GameCard';

import {games} from '../../utils/data';

import {
    Container,
    Header,
    Title,
    TitleBold,
    CartButton
} from './styles';

enum AppRoute {
    HOME = 'Home',
    CART = 'Cart'
}


export function Home() {
    const navigation = useNavigation();
    //const theme = useTheme();
    return(
        <Container>
            <Header>
                <Logo height="50" width="143"/>
                <CartButton onPress={() => navigation.navigate(AppRoute.CART)}>
                    <CartClick />
                </CartButton>
            </Header>

            <Title>Games {'\n'}
                <TitleBold>Populares</TitleBold>
            </Title>

            {/* <ActivityIndicator 
                size="large"
                color={theme.colors.primary}
                style={{flex: 1}}
            /> */}

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
        </Container>
    )
}