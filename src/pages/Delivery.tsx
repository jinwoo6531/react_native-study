import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Complete from './Complete';
import Ing from './Ing';

const Stack = createNativeStackNavigator();

const Delivery = () => {
  return (
    <Stack.Navigator initialRouteName="Ing">
      <Stack.Screen name="여수" component={Ing} />
      <Stack.Screen
        name="Complete"
        component={Complete}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Delivery;
