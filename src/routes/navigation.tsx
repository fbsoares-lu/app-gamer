import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screen/Home';
import { Cart } from '../screen/Cart';

const { Navigator, Screen } = createNativeStackNavigator();

export function Navigation() {
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Cart" component={Cart} />
        </Navigator>
    )
}