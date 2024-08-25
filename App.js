import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogoCarros from './pages/CatalogoCarros';
import Home from './pages/Home';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="Catalogo" 
          component={CatalogoCarros} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
