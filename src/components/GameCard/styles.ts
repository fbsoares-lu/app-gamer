import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 257px;
    background-color: ${({ theme }) => theme.colors.card_background};
    border-radius: 6px;
    flex: 1;
    margin: 5px;
`;

export const ContentCard = styled.View`
    width: 100%;
    padding: 10px 12px;
`;

export const ImageCard = styled.Image`
    width: auto;
    height: 78px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.openSans_700};
`;

export const Plataform = styled.Text`
    margin-top: 10px;

    font-size: ${RFValue(9)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.openSans_400};
`;

export const Category = styled.Text`
    font-size: ${RFValue(9)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.openSans_400};
`;

export const ButtonCard = styled(TouchableOpacity)`
    position: absolute;

    background-color: ${({ theme }) => theme.colors.primary};

    flex-direction: row;
    align-items: center;
    justify-content: center;

    bottom: 0;
    right: 0;
    left: 0;

    height: 37px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
`;

export const Price = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    margin-left: 10px;
`;

export const CategoryCard = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
`;

export const CardContent = styled.View`
    background-color: ${({ theme }) => theme.colors.title_background};
    border-radius: 3px;
    padding: 3px 5px;
    margin-right: 5px;
    margin-top: 3px;
`;

export const CardContentText = styled.Text`
    font-size: ${RFValue(9)}px;
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.openSans_400};
`;

