import React, { useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, ScrollView, Platform, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CartProducts } from '../../components/CartProducts';
import { cepApi } from '../../services/cep';
import { useCart } from '../../hooks/cart';

import Arrow from '../../assets/icons/arrow.svg';
import FindIcon from '../../assets/icons/marker.svg';
import CartCheckIcon from '../../assets/icons/cart-check1.svg';

import { PaymentSelect } from '../../components/PaymentSelect';
import { currencyToNumber } from '../../utils/currencyToNumber';
import { formatNumberToCurrency } from '../../utils/formatNumberToCurrency';

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
    TotalContainer,
    Total,
    TotalItensText,
    TotalValueText,
    Payment,
    PaymentContainer,
    PaymentText,
    PaymentTextBold,
    BackgroundPayment,
    PaymentButton,
    ShippingContent,
    ShippingContentStreet,
    ShippingPrice,
    ShippingPriceValue,
    TotalShipping,
    TotalShippingText
} from './styles';

interface ICepProps {
    uf: string;
    logradouro: string;
    bairro: string;
}

export function Cart() {
    const navigate = useNavigation();
    const { products } = useCart();

    const [cep, setCep] = useState('');
    const [cepValue, setCepValue] = useState<ICepProps>({} as ICepProps);
    const [shippingTax, isShippingTax] = useState('');

    const [isVisible, setIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);

    function handlePayment() {
        setIsVisible(true);
    }

    async function onSubmit() {
        const existsProductsOnCart = products.length;

        if (existsProductsOnCart === 0) {
            Alert.alert('Escolha um produto para continuar!');
            return;
        }

        if (cep.length != 8) {
            Alert.alert('CEP inválido!');
            return;
        }

        try {
            const response = await cepApi.get(`/${cep}/json`);
            
            const error = response.data.erro;
            
            if (error) {
                Alert.alert('Não foi possível achar o CEP!');
                return;
            }

            setIsDisabled(false);
            setCepValue(response.data);
            isShippingTax(response.data.uf);
        } catch(err) {
            Alert.alert('Digitação inválida!');
            return;
        }
    }

    const totalItens = products.reduce((accumulator, current) => {
        return accumulator += current.quantity;
    }, 0);

    const totalProducts = products.reduce((accumulator, current) => {
        const price = currencyToNumber(String(current.price), ',');

        // if (current.quantity % 3 === 0) {
        //     console.log("3");
        //     return accumulator += (price * current.quantity)*0.75;
        // } 

        if (shippingTax) {
            if (shippingTax === 'PE') {
                return accumulator += (price * current.quantity)+100;
            } 
            return accumulator += (price * current.quantity)+200;
        }

        return accumulator += (price * current.quantity);
    }, 0);

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            enabled
        >
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
                        <CartProducts data={item} />
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
                                        value={cep}
                                        onChangeText={setCep}
                                        placeholder="Seu CEP"
                                        keyboardType="numeric"
                                    />
                                    <ShippingButton onPress={() => {onSubmit()}}>
                                        <FindIcon height="20"/>
                                    </ShippingButton>
                                </ShippingContainer>
                                {   !isDisabled 
                                    &&
                                    <ShippingContent>
                                        <ShippingContentStreet>
                                            {`${cepValue.logradouro}, ${cepValue.bairro}`}
                                        </ShippingContentStreet>
                                        <ShippingPrice>
                                            valor do frete:
                                            <ShippingPriceValue>
                                                {cepValue.uf === 'PE' ? 'R$ 100,00' : 'R$ 200,00'}
                                            </ShippingPriceValue>
                                        </ShippingPrice>
                                    </ShippingContent>
                                }
                                <TotalContainer>
                                    {!isDisabled && 
                                        <Total>
                                            <TotalShipping>frete</TotalShipping>
                                            <TotalShippingText>{cepValue.uf === 'PE' ? 'R$ 100,00' : 'R$ 200,00'}</TotalShippingText>
                                        </Total>
                                    }

                                    <Total>
                                        <TotalItensText>{`${totalItens} itens`}</TotalItensText>
                                        <TotalValueText>{`${formatNumberToCurrency(totalProducts)}`}</TotalValueText>
                                    </Total>
                                </TotalContainer>
                            </Shipping>
                        </Preview>
                        <Payment>
                            <PaymentContainer>
                                <PaymentText isDisabled={!!isDisabled}>Finalizar <PaymentTextBold isDisabled={!!isDisabled}>Compra</PaymentTextBold></PaymentText>
                                <PaymentButton disabled={isDisabled} onPress={handlePayment}>
                                    <CartCheckIcon height="24" width="24"/>
                                </PaymentButton>
                            </PaymentContainer>
                        </Payment>
                    </BackgroundPayment>
                </Footer>
                <View style={{backgroundColor: 'rgba(52, 52, 52, 0.6)', zIndex: 1}}>
                    <PaymentSelect isVisible={isVisible} total={totalProducts} /> 
                </View>
            </Container>
        </KeyboardAvoidingView>
    )
}