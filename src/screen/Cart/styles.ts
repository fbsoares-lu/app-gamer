import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeButton = styled(TouchableOpacity)`
    margin-top: 50px;
    padding: 0 16px;
`;

export const Title = styled.Text`
    padding: 0 16px;
    margin-top: 35px;
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(32)}px;
    margin-bottom: 25px;
`;

export const TitleBold = styled.Text`
    padding: 0 16px;
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(32)}px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Footer = styled.View`
    width: 100%;
`;

export const Preview = styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`;

export const LineContainer = styled.View`
    align-items: center;
    padding: 0 16px;
`;

export const Line = styled.View`
    border-width: 4px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.title_background};
    border-radius: 50px;
    width: 20%;
    margin-bottom: 30px;
`;

export const Shipping = styled.View`
    padding: 0 16px;
`;

export const ShippingText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shipping_text};
    margin-bottom: 5px;
    margin-left: 16px;
`;

export const ShippingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ShippingInput = styled.TextInput`
    flex: 1;
    height: 52px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 16px;
    margin-right: 10px;
`;

export const ShippingButton = styled(TouchableOpacity)`
    height: 44px;
    width: 44px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 22px;

    align-items: center;
    justify-content: center;
`;

export const Total = styled.View`
    margin: 20px 16px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const TotalItensText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_item};
`;

export const TotalValueText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Payment = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
    margin: 25px 0;
    padding: 0 16px;
`;

export const PaymentContainer = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const PaymentText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const PaymentTextBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const PaymentButton = styled(TouchableOpacity)`
    height: 38px;
    width: 38px;
    background-color: ${({ theme }) => theme.colors.primary_light};
    border-radius: 22px;

    align-items: center;
    justify-content: center;
`;

export const BackgroundPayment = styled.View`
    background-color: ${({ theme }) => theme.colors.primary};
`;





