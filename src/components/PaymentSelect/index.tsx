import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Modal } from "react-native";
import { useCart } from "../../hooks/cart";

import {
    Container,
    ModalContainer,
    ModalText,
    ModalTextBold,
    ModalDescription,
    Payment,
    PaymentText,
    PaymentValue,
    PaymentButton,
    PaymentButtonText
} from './styles';

interface Props {
    isVisible: boolean;
    total: number;
}

export function PaymentSelect({ isVisible, total }: Props) {
    const navigation = useNavigation();
    return (
        <Container>
            <Modal
                animationType="none"
                transparent={true}
                statusBarTranslucent={true}
                visible={isVisible}
            >
            <Container>
                <ModalContainer>
                    <ModalText>Compra{'\n'}<ModalTextBold>Finalizada</ModalTextBold></ModalText>
                    <ModalDescription>Sua compra foi finalizada com sucesso!</ModalDescription>
                    <Payment>
                        <PaymentText>valor da compra:</PaymentText>
                        <PaymentValue>{`R$ ${total}`}</PaymentValue>
                    </Payment>
                    <PaymentButton onPress={() => {navigation.navigate('Home')}}>
                        <PaymentButtonText>
                            Voltar para a Home
                        </PaymentButtonText>
                    </PaymentButton>
                </ModalContainer>
            </Container>
            </Modal>
        </Container>
  );
};