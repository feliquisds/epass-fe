import { Image, StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from "react";
import { SlimSimpleButton, SmallAccentButton } from "../components/Buttons";
import { Card, CardElement, GradientCard } from "../components/Cards";
import { Section } from '../components/Alignments';
import { Header, Subtext, Text, Title } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';
import { getEvent } from "../services/evento";
import { getCarteira } from "../services/carteira";


export default ({ navigation }) => {


    const [eventos, setEventos] = useState([]);
    const [carteira, setCarteira] = useState({ saldo: 0 });

    useEffect(() => {
        async function fetchData() {
        try {

            const data = await getCarteira(); 
            setCarteira(data);
        } catch (error) {
            // Lidar com o erro
            console.error("Falha ao carregar a carteira", error);
            setCarteira({ saldo: 0 });
        } 
        }

        fetchData();
    }, []);

    const saldoAtual = carteira.valorDisponivel;


    // Carrega os eventos ao abrir a tela
    async function loadEvent() {
        try {
            const lista = await getEvent();
            // console.log("Eventos carregados:", lista); 
            setEventos(lista || []); 
        } catch (error) {
            console.error("Erro ao carregar eventos:", error); 
        }
    }

    useEffect(() => {
        loadEvent();
    }, []);

    

    const renderEvent = ({ item }) => (
        <CardElement horizontal={true} spaceBetween={true} centerVertical={true}>
            <Section>
                <Text>{item.titulo}</Text>
            </Section>
            <Section alignRight={true}>
                <Text accented={true}>{item.dataInicio}</Text>
                <Subtext>{item.categoria}</Subtext>
            </Section>
        </CardElement>
    );

    return (

        



        <SimpleScreen tabScreen={true}>

            <Title>Resumo</Title>

            <GradientCard gap={15}>
                <CardElement gap={15}>
                    <Section horizontal={true} gap={10} centerVertical={true}>
                        <Image style={localStyle.pfp} source={require('../assets/pfp.png')} />
                        <Header centerVertical={true} style={{ color: '#FFF' }}>Hoje tem aula!</Header>
                    </Section>

                    <SlimSimpleButton>Liberar aluno</SlimSimpleButton>
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


            <Card label={'Crédito da pulseira'}>
                <CardElement>
                    <Text>Crédito disponível</Text>
                    <Text accented={true}>R$ {Number(saldoAtual || 0).toFixed(2)}</Text>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Visualizar extrato</SmallAccentButton>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Adicionar crédito</SmallAccentButton>
                </CardElement>
            </Card>

        </SimpleScreen>

        
    );
}

const localStyle = StyleSheet.create({
    pfp: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    }
})