import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    margin-bottom: 11px;
    height: 110px;
    width: 100%;
    padding: 0 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ImageContainer = styled.View`
    padding: 0;
`;

export const ImageContainerCard = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 6px;
`;

export const BorderIconTrash = styled(TouchableOpacity)`
    background-color: ${({ theme }) => theme.colors.trash};
    position: absolute;
    bottom: 5px; 
    left: 5px;

    border-radius: 5px;

    padding: 5px;
`;

export const ContentText = styled.View`
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
    width: 36px;
    border-radius: 6px;
    padding: 6px;
    background-color: ${({ theme }) => theme.colors.card_background};
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled(TouchableOpacity)`
    padding: 4px;
`;


export const Counter = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.title};
`;
