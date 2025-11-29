// import { useState, useEffect } from 'react';
// import { getEvent } from '../services/evento';
// import { getCarteira } from '../services/carteira';
import { Image, StyleSheet, FlatList } from 'react-native';
import { SlimSimpleButton, SmallAccentButton } from '../components/Buttons';
import { Card, CardElement, GradientCard } from '../components/Cards';
import { Section } from '../components/Alignments';
import { Header, Subtext, Text, Title } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';

const DATA = [
    { id: 1, titulo: 'Excursão', dataInicio: 'Em 3 dias', categoria: 'Escola' },
    { id: 2, titulo: 'Reunião de pais', dataInicio: 'Em 5 dias', categoria: 'Escola' },
    { id: 3, titulo: 'Prova', dataInicio: 'Em 7 dias', categoria: 'Matemática' }
]

function goToViewStatement(navigation) {
    navigation.navigate('ViewStatement');
}

function goToAddCredit(navigation) {
    navigation.navigate('AddCredit');
}

export default ({ navigation }) => {
    // const [eventos, setEventos] = useState([]);
    // const [carteira, setCarteira] = useState({ saldo: 0 });

    // async function fetchData() {
    //     try {
    //         const data = await getCarteira();
    //         setCarteira(data);
    //     } catch (error) {
    //         console.error('Falha ao carregar a carteira', error);
    //         setCarteira({ saldo: 0 });
    //     }
    // }

    // async function loadEvent() {
    //     try {
    //         const lista = await getEvent();
    //         setEventos(lista || []);
    //     } catch (error) {
    //         console.error('Erro ao carregar eventos:', error);
    //     }
    // }

    // useEffect(() => {
    //     loadEvent();
    //     fetchData();
    // }, []);

    const renderEvent = ({ item }) => (
        <CardElement horizontal spaceBetween centerVertical>
            <Section>
                <Text>{item.titulo}</Text>
            </Section>
            <Section alignRight>
                <Text accented>{item.dataInicio}</Text>
                <Subtext>{item.categoria}</Subtext>
            </Section>
        </CardElement>
    );

    return (
        <SimpleScreen tabScreen>
            <Title>Resumo</Title>
            <GradientCard gap={15}>
                <CardElement gap={15}>
                    <Section horizontal gap={10} centerVertical>
                        <Image style={localStyles.pfp} source={require('../assets/pfp.png')} />
                        <Header centerVertical style={{ color: '#FFF' }}>Hoje tem aula!</Header>
                    </Section>

                    <SlimSimpleButton>Liberar aluno</SlimSimpleButton>
                </CardElement>
            </GradientCard>

            <Card label={'Eventos'}>
                <FlatList
                    data={DATA}
                    keyExtractor={(i) => i.id}
                    renderItem={renderEvent}
                    ItemSeparatorComponent={<Divider />}
                />

                <Divider />

                <CardElement>
                    <SmallAccentButton>Verificar agenda completa</SmallAccentButton>
                </CardElement>

            </Card>


            <Card label={'Crédito da pulseira'}>
                <CardElement>
                    <Text>Crédito disponível</Text>
                    {/* <Text accented>R$ {Number(carteira.saldo || 0).toFixed(2)}</Text> */}
                    <Text accented>R$ {Number(0).toFixed(2)}</Text>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton onPress={() => goToViewStatement(navigation)}>Visualizar extrato</SmallAccentButton>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton onPress={() => goToAddCredit(navigation)}>Adicionar crédito</SmallAccentButton>
                </CardElement>
            </Card>

        </SimpleScreen>
    );
}

const localStyles = StyleSheet.create({
    pfp: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    }
})