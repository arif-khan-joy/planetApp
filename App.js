import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './src/theme/colors';
import Text from './src/component/text/text';
import Home from './src/screen/home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './src/screen/item';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [loaded] = useFonts({
    'Antonio-Medium':require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Bold':require('./assets/fonts/Spartan-Bold.ttf'),
    'Spartan-Regular':require('./assets/fonts/Spartan-Regular.ttf')
  });
  
  if (!loaded) {
    return null;
  }
  
  return (
    
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
 
  },
});
