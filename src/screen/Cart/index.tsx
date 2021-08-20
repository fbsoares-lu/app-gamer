import React, { useState, useCallback } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Platform, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { CartList } from '../../components/CartList';
import cepApi from '../../services/cep';
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
import { PaymentSelect } from '../../components/PaymentSelect';
interface ICepProps {
    uf: string;
    logradouro: string;
    bairro: string;
}

const schema = yup.object().shape({
    cep: yup.number().integer().positive().required()
});

export function Cart() {
    const navigate = useNavigation();
    const { products } = useCart();

    const [cep, setCep] = useState('');
    const [cepValue, setCepValue] = useState<ICepProps>({} as ICepProps);
    const [isCep, setIsCep] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    // const { control, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema)
    // });

    // function onSubmit(data: ICepProps) {
    //     setCep(data);
    // }

    const cepContent = useCallback(async() => {
        try{
            const response = await cepApi.get(`/${cep}/json`);
            console.log(response.data);
            setCepValue(response.data);
            setIsCep(true);
            return;
        } catch(err) {
            console.log(err);
            setCep('');
            return;
        }
    }, []);

    // const onSubmit = useCallback(async data => {
    //     try {
    //         const response = await cep.get(`/${data}/json`);
    //         console.log(response);
    //         return;
    //     } catch(error) {
    //         Alert.alert("Informe um CEP válido")
    //         return;
    //     }
    // }, []);

    const totalItens = products.reduce((accumulator, current) => {
        return accumulator += current.quantity;
    }, 0);

    const totalProducts = products.reduce((accumulator, current) => {
        return accumulator += (current.quantity * current.price);
    }, 0);

    function handlePayment() {
        setIsVisible(true);
    }

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
                                    {/* <Controller
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <ShippingInput 
                                                isErrored={!!errors.cep}
                                                value={value}
                                                onChangeText={onChange}
                                                placeholder="Seu CEP"
                                                keyboardType="numeric"
                                            />
                                        )}
                                        name="cep"
                                        defaultValue=""
                                    /> */}

                                        <ShippingInput 
                                            value={cep}
                                            onChangeText={setCep}
                                            placeholder="Seu CEP"
                                            keyboardType="numeric"
                                        />
                                    
                                    <ShippingButton 
                                        onPress={cepContent}
                                    >
                                        <FindIcon height="20"/>
                                    </ShippingButton>
                                </ShippingContainer>
                                {/* {   isCep 
                                    &&
                                    <ShippingContent>
                                        <ShippingContentStreet>
                                            Rua Comendador Sá Barreto, Piedade - Jab
                                        </ShippingContentStreet>
                                        <ShippingPrice>
                                            valor do frete:
                                            <ShippingPriceValue>
                                                RS 100,00
                                            </ShippingPriceValue>
                                        </ShippingPrice>
                                    </ShippingContent>
                                } */}
                                <TotalContainer>
                                    {/* <Total>
                                        <TotalShipping>frete</TotalShipping>
                                        <TotalShippingText>{`R$ 100`}</TotalShippingText>
                                    </Total> */}

                                    <Total>
                                        <TotalItensText>{`${totalItens} itens`}</TotalItensText>
                                        <TotalValueText>{`R$ ${totalProducts}`}</TotalValueText>
                                    </Total>
                                </TotalContainer>
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
                {/* <PaymentSelect isVisible={isVisible} total={totalProducts} />  */}
            </Container>
        </KeyboardAvoidingView>
    )
}