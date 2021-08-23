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
    price: number
    quantity: number;
}

interface ICartContext {
    products: Product[];
    addCart(item: Omit<Product, 'quantity'>): void;
    increment(id: number): void;
    decrement(id: number): void;
    removeCart(): void;
    removeEspecificItem(item: Omit<Product, 'quantity'>): void;
}

interface ICartContextProps {
    children: ReactNode;
}

const dataKey = '@appgamer:products';
const CartContext = createContext<ICartContext>({} as ICartContext);

function CartProvider( { children } : ICartContextProps) {
    const [products, setProducts] = useState<Product []>([]);

    useEffect(() => {
        console.log("vezes")
        async function loadProducts(): Promise<void> {
            const products = await AsyncStorage.getItem(dataKey);
            console.log(products);
            const product = products ? JSON.parse(products) : [];

            setProducts(product);
            
        }
        loadProducts();
    }, []);

    const addCart = useCallback(async product => {
        console.log(product.name)
        const productExists = products.find(item => item.id === product.id);

        if (productExists) {
            setProducts(
                products.map(p => 
                    p.id === product.id ? {...product, quantity: p.quantity + 1} : p,
                ),
            );
        } else {
            console.log("entrou no else")
            setProducts([...products, {...product, quantity: 1}]);
            console.log()
        }
        console.log("saiu else "+ JSON.stringify(products))
        await AsyncStorage.setItem(dataKey, JSON.stringify(products));
    }, [products]);

    const removeEspecificItem = useCallback(async product => {
        const newProduct = products.filter((item) => item.id != product.id);

        setProducts(newProduct);

        await AsyncStorage.setItem(dataKey, JSON.stringify(newProduct));
        
    }, [products]);

    const removeCart = useCallback(async () => {
        setProducts([]);
        
        await AsyncStorage.setItem(dataKey, JSON.stringify(products));
    }, [products]);

    const increment = useCallback(async id => {
        const productIncrement = products.map(product => 
            product.id === id && String(product.price) > 'R$0,00' 
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

    const value = useMemo(() => ({ addCart, products, increment, decrement, removeCart, removeEspecificItem}), [products, addCart, increment, decrement, removeCart, removeEspecificItem]);

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