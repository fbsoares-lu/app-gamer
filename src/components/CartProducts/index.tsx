import React from 'react';

import { useCart } from '../../hooks/cart';

import PlusIcon from '../../assets/icons/plus-icon.svg';
import MinusIcon from '../../assets/icons/minus-icon.svg';
import TrashIcon from '../../assets/icons/trash.svg';

import {
    Container,
    Content,
    ImageContainer,
    BorderIconTrash,
    ImageContainerCard,
    ContentText,
    Text,
    Price,
    ButtonCounter,
    Counter,
    Button
} from './styles';

export interface IProducts {
    id: number;
    image: string;
    name: string;
    plataform: [
        {
            id: number,
            name: string;
        }
    ],
    category: [
        {
            id: number,
            name: string;
        }
    ],
    price: number;
    quantity: number;
}
interface Props {
    data: IProducts;
}

export function CartProducts({ data }: Props) {
    const { increment, decrement, removeEspecificItem } = useCart();
    
    function handleIncrement(id: number) {
        increment(id);
    }

    function handleDecrement(id: number) {
        decrement(id);
    }

    function handleRemoveItem(product: IProducts) {
        removeEspecificItem(product);
    }

    return(
        <Container>
            <Content style={{flexDirection: 'row', alignItems: 'center'}}>
                <ImageContainer>
                    <ImageContainerCard source={{ uri: `${data.image}`}} resizeMode="cover" />
                    <BorderIconTrash onPress={() => {handleRemoveItem(data)}}>
                        <TrashIcon height='16' />
                    </BorderIconTrash>
                </ImageContainer>

                <ContentText>
                    <Text>{data.name}</Text>
                    <Price>{data.price}</Price>
                </ContentText>
            </Content>

            <ButtonCounter>
                <Button onPress={() => handleIncrement(data.id)} >
                    <PlusIcon height={8} width={8} />
                </Button>
                <Counter>{data.quantity}</Counter>
                <Button onPress={() => handleDecrement(data.id)} >
                    <MinusIcon height={8} width={8} />
                </Button>
            </ButtonCounter>
        </Container>
    )
};