import { useState, useEffect } from 'react';
import EventoService from '../services/EventoService';
import CarteiraService from '../services/CarteiraService';
import { Image, StyleSheet, FlatList } from 'react-native';
import { SlimSimpleButton, SmallAccentButton } from '../components/Buttons';
import { Card, CardElement, GradientCard } from '../components/Cards';
import { Section } from '../components/Alignments';
import { Header, Subtext, Text, Title } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';

// const DATA = [
//     { id: 1, titulo: 'Excursão', dataInicio: 'Em 3 dias', categoria: 'Escola' },
//     { id: 2, titulo: 'Reunião de pais', dataInicio: 'Em 5 dias', categoria: 'Escola' },
//     { id: 3, titulo: 'Prova', dataInicio: 'Em 7 dias', categoria: 'Matemática' }
// ]

function goToViewStatement(navigation) {
    navigation.navigate('ViewStatement');
}

function goToAddCredit(navigation) {
    navigation.navigate('AddCredit');
}

function goToQRCode(navigation) {
    navigation.navigate('QRCode');
}

export default ({ navigation }) => {
    const [eventos, setEventos] = useState([]);
    const [carteira, setCarteira] = useState({ saldo: null });

    async function fetchCarteira() {
        try {
            const carteiraService = new CarteiraService();
            const data = await carteiraService.getCarteira();
            if (data != null) setCarteira({ saldo: data.valorDisponivel });
            else setCarteira(null);
        } catch (error) {
            console.error('Falha ao carregar a carteira: ', error);
        }
    }

    async function fetchEventos() {
        try {
            const eventoService = new EventoService();
            const lista = await eventoService.getEventos();
            setEventos(lista || []);
        } catch (error) {
            console.error('Erro ao carregar eventos:', error);
        }
    }

    useEffect(() => {
        fetchEventos();
        fetchCarteira();
    }, []);

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

                    <SlimSimpleButton onPress={() => goToQRCode(navigation)}>Liberar aluno</SlimSimpleButton>
                </CardElement>
            </GradientCard>

            <Card label={'Eventos'}>
                <FlatList
                    data={eventos}
                    keyExtractor={(i) => i.id}
                    renderItem={renderEvent}
                    ItemSeparatorComponent={<Divider />}
                />

                <Divider />

                <CardElement>
                    <SmallAccentButton>Verificar agenda completa</SmallAccentButton>
                </CardElement>

            </Card>

            {
                carteira != null &&
                <Card label={'Crédito da pulseira'}>
                    <CardElement>
                        <Text>Crédito disponível</Text>
                        <Text accented>R$ {Number(carteira.saldo || 0).toFixed(2)}</Text>
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
            }

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