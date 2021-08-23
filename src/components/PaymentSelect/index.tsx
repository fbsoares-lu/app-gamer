import React, { useCallback } from "react";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
import { useCart } from "../../hooks/cart";
import { formatNumberToCurrency } from "../../utils/formatNumberToCurrency";

interface Props {
    isVisible: boolean;
    total: number;
    cepUf?: string;
}

export function PaymentSelect({ isVisible, total }: Props) {
    const navigation = useNavigation();
    const { removeCart } = useCart();

    const handleRemoveProduct = useCallback(() => {
        removeCart();
        navigation.navigate('Home');
    }, []);

    const totalWithShippingTax = formatNumberToCurrency(total);

    return (
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
                    <PaymentValue>{`${totalWithShippingTax}`}</PaymentValue>
                </Payment>
                <PaymentButton onPress={handleRemoveProduct}>
                    <PaymentButtonText>
                        Voltar para a Home
                    </PaymentButtonText>
                </PaymentButton>
            </ModalContainer>
        </Container>
        </Modal>
  );
};