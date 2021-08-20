import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight} from 'react-native-iphone-x-helper';

import styled from 'styled-components/native';
interface Props {
    isErrored?: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeButton = styled(TouchableOpacity)`
    margin-top: ${getStatusBarHeight()+ 20}px;
    padding-bottom: 30px;
`;

export const Title = styled.Text`
    padding: 0 16px;
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
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.shipping_text};
    margin-bottom: 5px;
    margin-left: 16px;
`;

export const ShippingContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ShippingInput = styled.TextInput<Props>`
    flex: 1;
    height: 52px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme, isErrored }) => isErrored ? theme.colors.error : theme.colors.primary};
    border-radius: 50px;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 0 16px;
    margin-right: 10px;
`;

export const ShippingButton = styled(TouchableOpacity)<Props>`
    height: 44px;
    width: 44px;
    background-color: ${({ theme, isErrored }) => isErrored ? theme.colors.error : theme.colors.primary};
    border-radius: 22px;

    align-items: center;
    justify-content: center;
`;

export const TotalContainer = styled.View`
    margin-top: 20px;
    margin-bottom: 30px;
`;

export const Total = styled.View`
    margin: 0 16px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const TotalShipping = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_item};
`;

export const TotalShippingText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const TotalItensText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text_item};
`;

export const TotalValueText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(20)}px;
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
    color: ${({ theme }) => theme.colors.primary_light};
`;

export const PaymentTextBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.primary_light};
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

export const ShippingContent = styled.View`
    width: 100%;
    height: 80px;

    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.card_background};
    margin-top: 10px;
`;

export const ShippingContentStreet = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-bottom: 10px;
`;

export const ShippingPrice = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ShippingPriceValue = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 10px;
`;






