import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack({token, navigation}) {
    return (
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomeScreen">
                {(screenProps) => <HomeScreen {...screenProps} token={token} />}
            </Stack.Screen>
        </Stack.Navigator>
        );
}


