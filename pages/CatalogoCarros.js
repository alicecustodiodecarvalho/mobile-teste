import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import NavbarPesquisa from '../components/NavbarPesquisa';
import CardCarMaior from '../components/CardCarMaior';
import CardCarMenor from '../components/CardCarMenor';

export default function CatalogoCarros() {
    const [modoExibicao, setModoExibicao] = useState(true);
    const [veiculos, setVeiculos] = useState([])

    useEffect(() => {
        const getVeiculos = async () => {
            const response = await fetch('https://pi3-backend-i9l3.onrender.com/veiculos')
            console.log(response)
            if (response.ok) {
                const data = await response.json()
                console.log(data)
                setVeiculos(data.veiculos)
                return
            }
            console.log("Erro ao carregar veiculos")
            return
        }

        getVeiculos()
    }, [])

    return (
        <View style={styles.container}>
           <NavbarPesquisa alterarModoExibicao={() => setModoExibicao(!modoExibicao)} />
            <View style={styles.scro}>

                <ScrollView >
                    {veiculos.length === 0 && <Text>Carregando...</Text>}
                    {modoExibicao  ?
                        veiculos.map((veiculo) =>
                            <CardCarMaior
                                id={veiculo.id}
                                modelo={veiculo.modelo}
                                anoFabricacao={veiculo.anoFabricacao}
                                cor={veiculo.cor}
                                descricao={veiculo.descricao}
                                valor={veiculo.valor}
                                km={veiculo.km}
                                marca={veiculo.marca}
                                foto={veiculo.foto}
                                usuarioId={veiculo.usuarioId}
                                cidade={veiculo.cidade}
                                estado={veiculo.estado}
                                cep={veiculo.cep}
                                complemento={veiculo.complemento}
                                logradouro={veiculo.logradouro}
                                numero={veiculo.numero}
                                cambio={veiculo.cambio}
                                carroceria={veiculo.carroceria}
                                combustivel={veiculo.combustivel}
                            />
                        ) :

                        veiculos.map((veiculo) =>
                            <CardCarMenor
                                id={veiculo.id}
                                modelo={veiculo.modelo}
                                anoFabricacao={veiculo.anoFabricacao}
                                cor={veiculo.cor}
                                descricao={veiculo.descricao}
                                valor={veiculo.valor}
                                km={veiculo.km}
                                marca={veiculo.marca}
                                foto={veiculo.foto}
                                usuarioId={veiculo.usuarioId}
                                cidade={veiculo.cidade}
                                estado={veiculo.estado}
                                cep={veiculo.cep}
                                complemento={veiculo.complemento}
                                logradouro={veiculo.logradouro}
                                numero={veiculo.numero}
                                cambio={veiculo.cambio}
                                carroceria={veiculo.carroceria}
                                combustivel={veiculo.combustivel}
                            />
                        )
                    }

                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scro: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#ECECEC'
    },
})
