import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(52, 52, 52, 0.6);
`;

export const ModalContainer = styled.View`
    width: 315px;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    padding: 20px;
`;

export const ModalText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ModalTextBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ModalDescription = styled.Text`
    margin-top: 30px;
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Payment = styled.View`
    margin-top: 30px;

    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const PaymentText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_item};
`;

export const PaymentValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const PaymentButton = styled(TouchableOpacity)`
    height: 48px;
    align-items: center;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;

    margin-top: 16px;
`;

export const PaymentButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text};
`;

