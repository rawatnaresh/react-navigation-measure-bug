import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image, Text, View} from 'react-native';


const logoSrc = require('./logo.png');

export function Logo() {
  const [layout, setLayout] = React.useState({pageX: undefined, pageY: undefined});
  return (
    <View>
      <Image
        source={logoSrc}
        style={{
          height: 200,
          width: 200,
        }}
        resizeMode="contain"
        onLayout={event => {
          event.target.measure((x, y, width, height, pageX, pageY) => {
            setLayout({pageX, pageY});
            console.log('pageY::', pageY);
          });
        }}
        />
      <Text>Image is at pageX: {layout.pageX}, pageY: {layout.pageY}</Text>
    </View>
  );
}

const {Navigator, Screen} = createNativeStackNavigator();

export function WithNavigation() {
  return (
      <Logo />
  );
}

export default function App() {
  return (
    <NavigationContainer>
       <Navigator initialRouteName="Test">
        <Screen component={WithNavigation} name="Test" />
      </Navigator>
    </NavigationContainer>
  );
}