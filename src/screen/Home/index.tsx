import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import Cart from '../../assets/icons/cart.svg';
import Logo from '../../assets/logo.svg';
import { GameCard } from '../../components/GameCard';

import {
    Container,
    Header,
    Title,
    TitleBold
} from './styles'

export function Home() {
    return(
        <Container>
            <Header>
                <Logo height="50" width="143" />
                <Cart height="25" width="25" />
            </Header>

            <Title>Games {'\n'}
                <TitleBold>Populares</TitleBold>
            </Title>

            <SafeAreaView style={{flex: 1}}>
                <ScrollView contentContainerStyle={{ 
                    flexDirection: 'row', 
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    marginTop: 38
                }}
                showsVerticalScrollIndicator={false}
                >
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                    <GameCard />
                </ScrollView>
            </SafeAreaView>
        </Container>
    )
}