import React, { 
    createContext, 
    ReactNode, 
    useContext,
    useState,
    useEffect,
    useCallback,
    useMemo
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface Product {
    id: number;
    image: Object;
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
    price: number
    quantity: number;
}

interface ICartContext {
    products: Product[];
    addCart(item: Omit<Product, 'quantity'>): void;
    increment(id: number): void;
    decrement(id: number): void;
    removeCart(id: number): void;
}

interface ICartContextProps {
    children: ReactNode;
}

const dataKey = '@appgamer:products';
const CartContext = createContext<ICartContext>({} as ICartContext);

function CartProvider( { children } : ICartContextProps) {
    const [products, setProducts] = useState<Product []>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const products = await AsyncStorage.getItem(dataKey);

            const currentProducts = products ? JSON.parse(products) : [];
            setProducts(currentProducts);
        }
        loadProducts();
    }, []);

    const addCart = useCallback(async product => {
        const productExists = products.find(item => item.id === product.id);

        if (productExists) {
            setProducts(
                products.map(p => 
                    p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
                ),
            );
        } else {
            setProducts([...products, {...product, quantity: 1}]);
        }

        await AsyncStorage.setItem(dataKey, JSON.stringify(products));
    }, [products]);

    const removeCart = useCallback(async id => {
        const productExists = products.findIndex(item => item.id === id);

        if (productExists != -1) {
            products.splice(productExists, 1);
            await AsyncStorage.removeItem(dataKey)
        }
    }, [products]);

    const increment = useCallback(async id => {
        const productIncrement = products.map(product => 
            product.id === id && product.price > 0 
            ? {...product, quantity: product.quantity + 1}
            : product,
        );

        setProducts(productIncrement);

        await AsyncStorage.setItem(dataKey, JSON.stringify(productIncrement));
    }, [products]);

    const decrement = useCallback(async id => {
        const productIncrement = products.map(product => 
            product.id === id && product.quantity > 1 
            ? {...product, quantity: product.quantity - 1}
            : product,
        );

        setProducts(productIncrement);

        await AsyncStorage.setItem(dataKey, JSON.stringify(productIncrement));
    }, [products]);

    const value = useMemo(() => ({ addCart, products, increment, decrement, removeCart}), [products, addCart, increment, decrement, removeCart]);

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

function useCart(): ICartContext {
    const context = useContext(CartContext);

    return context;
}

export { CartProvider, useCart };