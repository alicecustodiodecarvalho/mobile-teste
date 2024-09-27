import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
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
import Sidebar from './pages/Sidebar';
import MinhasCompras from './pages/MinhasCompras';
import RegistroAdm from './pages/admPages/RegistroAdm';
import CadastrarVeiculo from './pages/CadastrarVeiculo';
import Teste from './pages/TestImage'

const Stack = createNativeStackNavigator();

export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [currentRoute, setCurrentRoute] = useState();

  const noFooterRoutes = ['Login', 'Registro', 'LocalizacaoCarro', 'DescricaoCarro', 'DescricaoCarro2', 'Enviar', 'AtualizarAnuncio', 'AtualizarDados', 'SobreNos', 'Anuncio', 'DetalhesVendedor', 'Comprar', 'AdmRegistro', 'CadastrarVeiculo'];

  useEffect(() => {
    const unsubscribe = navigationRef.addListener('state', () => {
      const route = navigationRef.getCurrentRoute();
      setCurrentRoute(route?.name);
    });

    return unsubscribe;
  }, [navigationRef]);

  return (
    <NavigationContainer ref={navigationRef} onReady={() => {
      const route = navigationRef.getCurrentRoute();
      setCurrentRoute(route?.name);
    }}>
      <Stack.Navigator initialRouteName="Login" screenOptions={({ route }) => ({
          headerShown: false, // Esconde o cabeçalho em todas as telas
          // Adicione qualquer outra configuração global aqui
        })}
      >
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Catalogo" component={CatalogoCarros} />
        <Stack.Screen name="LocalizacaoCarro" component={LocalizacaoCarro} />
        <Stack.Screen name="SideBarUser" component={SideBarUser} />
        <Stack.Screen name="MeusVeiculos" component={MeusVeiculos} />
        <Stack.Screen name="DescricaoCarro" component={DescricaoCarro} />
        <Stack.Screen name="DescricaoCarro2" component={DescricaoCarro2} />
        <Stack.Screen name="Regras" component={Regras} />
        <Stack.Screen name="Anuncio" component={DetalhesAnuncio} />
        <Stack.Screen name="Enviar" component={EnviarProposta} />
        <Stack.Screen name="AtualizarAnuncio" component={AtualizarAnuncio} />
        <Stack.Screen name="AtualizarDados" component={AtualizarDadosUser} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="DetalhesVendedor" component={DetalhesVendedor} />
        <Stack.Screen name="Comprar" component={CompraCarro} />
        <Stack.Screen name="Sidebar" component={Sidebar} />
        <Stack.Screen name="Compras" component={MinhasCompras} />
        <Stack.Screen name="AdmRegistro" component={RegistroAdm} />
        <Stack.Screen name="CadastrarVeiculo" component={CadastrarVeiculo} />
        <Stack.Screen name="Teste" component={Teste} />
      </Stack.Navigator>

      {/* Renderizar o Footer condicionalmente */}
      {!noFooterRoutes.includes(currentRoute) && <Footer />}

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
