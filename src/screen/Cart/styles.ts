import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const HomeButton = styled(TouchableOpacity)`
    margin-top: 50px;
`;

export const Title = styled.Text`
    margin-top: 35px;
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(32)}px;
    margin-bottom: 25px;
`;

export const TitleBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(32)}px;
`;

export const Content = styled.View`
    margin-top: 25px;
    height: 110px;
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ImageCard = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 6px;
`;

export const ContainerText = styled.View`
    margin-left: 10px;
    width: 50%;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Price = styled.Text`
    margin-top: 5px;
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const ButtonCounter = styled.View`
    height: 60px;
    width: 36px;
    border-radius: 6px;
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.card_background};
    align-items: center;
    justify-content: space-between;
`;

export const Number = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;


