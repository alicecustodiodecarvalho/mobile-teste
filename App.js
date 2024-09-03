import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CatalogoCarros from './pages/CatalogoCarros';
import Home from './pages/Home';
import Footer from './components/Footer';
import LocalizacaoCarro from './pages/LocalizacaoCarro';
import SideBarUser from './pages/SideBarUser';
import MeusVeiculos from './pages/MeusVeiculos';
import DescricaoCarro from './pages/DescricaoCarro';
import DescricaoCarro2 from './pages/DescricaoCarro2';
import Registro from './pages/Registro';
import Login from './pages/Login';
import Regras from './pages/Regras';
import DetalhesAnuncio from './pages/DetalhesAnuncio';
import EnviarProposta from './pages/EnviarProposta';
import AtualizarDadosUser from './pages/AtualizarDadosUser';
import AtualizarAnuncio from './pages/AtualizarAnuncio';
import SobreNos from './pages/SobreNos';
import DetalhesVendedor from './pages/DetalhesVendedor';
import CompraCarro from './pages/CompraCarro';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Registro" 
          component={Registro} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
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
        <Stack.Screen 
          name="LocalizacaoCarro" 
          component={LocalizacaoCarro} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="SideBarUser" 
          component={SideBarUser} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="MeusVeiculos" 
          component={MeusVeiculos} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="DescricaoCarro" 
          component={DescricaoCarro} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="DescricaoCarro2" 
          component={DescricaoCarro2} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="Regras" 
          component={Regras} 
          options={{ headerShown: false }}// Remove o título e a barra de navegação padrão
        />
        <Stack.Screen 
          name="Anuncio" 
          component={DetalhesAnuncio} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="Enviar" 
          component={EnviarProposta} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="AtualizarAnuncio" 
          component={AtualizarAnuncio} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="AtualizarDados" 
          component={AtualizarDadosUser} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="SobreNos" 
          component={SobreNos} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="DetalhesVendedor" 
          component={DetalhesVendedor} 
          options={{ headerShown: false }} // Remove o título e a barra de navegação padrão
          />
        <Stack.Screen 
          name="Comprar" 
          component={CompraCarro} 
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
