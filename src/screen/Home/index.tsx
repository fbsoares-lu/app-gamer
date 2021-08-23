import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState} from 'react';
import { FlatList} from 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import CartClick from '../../assets/icons/cart-click.svg';
import Logo from '../../assets/logo.svg';

import { GameCard } from '../../components/GameCard';
//import { product } from '../../utils/data';
import { server } from '../../services/cep';
import { ProductDTO } from '../../dtos/ProductDTO';

import {
    Container,
    Header,
    Title,
    TitleBold,
    CartButton,
    Footer
} from './styles';
import { Load } from '../../components/Load';



export function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await server.get('/products');
                setProducts(response.data);
            } catch(err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, []);
    
    const productsFormatted = products.map(products => {
        
        const price = products.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        const plataform = products.plataform.map(item => item.name).join('/');

        return {
            ...products,
            plataform,
            price
        }
    });
    
    return(
        <Container>
            <Header>
                <Logo height="50" width="143"/>
                <CartButton onPress={() => navigation.navigate('Cart')}>
                    <CartClick />
                </CartButton>
            </Header>

            <Title>Games {'\n'}
                <TitleBold>Populares</TitleBold>
            </Title>

            {   loading ? <Load /> :

                <FlatList 
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={{
                        flexDirection: 'column', 
                    }}
                    data={productsFormatted}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => 
                        <GameCard data={item} />
                    }
                />
            }
            <Footer />
        </Container>
    )
}