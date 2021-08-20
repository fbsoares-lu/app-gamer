import React, { useState } from 'react';
import { FlatList, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CartList } from '../../components/CartList';
import cep from '../../services/cep';
import { useCart } from '../../hooks/cart';

import Arrow from '../../assets/icons/arrow.svg';
import FindIcon from '../../assets/icons/marker.svg';
import CartCheckIcon from '../../assets/icons/cart-check1.svg';

import {
    Container,
    Title,
    TitleBold,
    HomeButton,
    Footer,
    Preview,
    LineContainer,
    Line,
    Shipping,
    ShippingText,
    ShippingContainer,
    ShippingInput,
    ShippingButton,
    Total,
    TotalItensText,
    TotalValueText,
    Payment,
    PaymentContainer,
    PaymentText,
    PaymentTextBold,
    BackgroundPayment,
    PaymentButton
} from './styles';
import { PaymentSelect } from '../../components/PaymentSelect';
interface ICepProps {
    uf: string;
}

export function Cart() {
    const navigate = useNavigation();
    const { products } = useCart();

    const [userCep, setUserCep] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const totalItens = products.reduce((accumulator, current) => {
        return accumulator += current.quantity;
    }, 0);

    const totalProducts = products.reduce((accumulator, current) => {
        return accumulator += (current.quantity * current.price);
    }, 0);

    function handlePayment() {
        setIsVisible(true);
    }

    async function handleCep() {
        const response = await cep.get(`/${userCep}/json`);

        const success: ICepProps = response.data;

        if (success.uf === 'PE') {
            console.log('PE');
            return;
        } else {
            console.log('Outros')
            return;
        }
    }

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
                data={products}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => 
                    <CartList data={item} />
                }
            />
            <Footer>
                <BackgroundPayment>
                    <Preview>
                        <LineContainer>
                            <Line />
                        </LineContainer>
                        <Shipping>
                            <ShippingText>Calcule o frete</ShippingText>
                            <ShippingContainer>
                                <ShippingInput 
                                    value={userCep}
                                    onChangeText={setUserCep}
                                    placeholder="Seu CEP"
                                />
                                <ShippingButton onPress={handleCep}>
                                    <FindIcon height="20"/>
                                </ShippingButton>
                            </ShippingContainer>
                            <Total>
                                <TotalItensText>{`${totalItens} itens`}</TotalItensText>
                                <TotalValueText>{`R$ ${totalProducts}`}</TotalValueText>
                            </Total>
                        </Shipping>
                    </Preview>
                    <Payment>
                        <PaymentContainer>
                            <PaymentText>Finalizar <PaymentTextBold>Compra</PaymentTextBold></PaymentText>
                            <PaymentButton onPress={handlePayment}>
                                <CartCheckIcon height="24" width="24"/>
                            </PaymentButton>
                        </PaymentContainer>
                    </Payment>
                </BackgroundPayment>
            </Footer>

            <PaymentSelect isVisible={isVisible} total={totalProducts} />
        </Container>
    )
}