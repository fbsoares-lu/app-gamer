import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList, TouchableOpacity } from 'react-native';

export const Container = styled.View`
    flex: 1;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 35px 0;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_400};
    font-size: ${RFValue(32)}px;
    margin-bottom: 38px;
`;

export const TitleBold = styled.Text`
    font-family: ${({ theme }) => theme.fonts.openSans_700};
    font-size: ${RFValue(32)}px;
`;

export const CardList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,

})`
    flex-direction: column;
`;

export const CartButton = styled(TouchableOpacity)``;