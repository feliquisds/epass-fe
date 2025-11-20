import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SlimSimpleButton, SmallAccentButton } from "../components/Buttons";
import { Card, CardElement, GradientCard } from "../components/Cards";
import { Section } from '../components/Alignments';
import { Header, Subtext, Text, Title } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';
import  api  from '../services/evento';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default ({ navigation }) => {

    const [token, setToken] = useState(null);
    const [events, setEvents] = useState([]); // Estado para armazenar os eventos

    // --- Efeitos de Carregamento (Não alterados) ---
    
    // 1. Carrega o Token
    useEffect(() => {
        async function loadToken() {
            const storedToken = await AsyncStorage.getItem("token");
            setToken(storedToken);
        }
        loadToken();
    }, []);

    // Configuração de headers para a API
    const config = token ? {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    } : {};

    // Função para buscar eventos
    async function getEvents() {
        try {
            if (token) {
                const eventsFromApi = await api.get('/evento/findAll', config);
                setEvents(eventsFromApi.data); // Define o estado com os dados
                console.log("Eventos carregados:", eventsFromApi.data);
            }
        } catch (error) {
            console.error("Erro ao buscar eventos:", error);
        }
    }

    // 2. Busca Eventos (roda assim que o token é carregado)
    useEffect(() => {
        getEvents();
    }, [token]);


    // --- Funções de Renderização e Formatação ---

    // Função auxiliar para formatar a data (ex: transforma '2025-11-25T10:00:00' em '25/11')
    const formatDate = (dateString) => {
        if (!dateString) return 'Sem data';
        try {
            const date = new Date(dateString);
            // Formato DD/MM
            return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }); 
        } catch (e) {
            return dateString;
        }
    };

    // Função auxiliar para renderizar cada evento
    const renderEvent = (event, index, totalEvents) => {
        // Tenta várias chaves para ser mais robusto contra variações na API
        const eventName = event.nome || event.titulo || event.title || 'Evento sem nome';
        const eventDate = event.data || event.prazo || event.schedule || event.start_date;
        const eventCategory = event.tipo || event.categoria || event.category || 'Geral'; 
        
        const formattedDate = formatDate(eventDate);

        return (
            <React.Fragment key={event.id || index}> 
                <CardElement>
                    <Section horizontal={true} spaceBetween={true} centerVertical={true}>
                        <Text>{eventName}</Text> 
                        
                        <Section alignRight={true}>
                            <Text accented={true}>{formattedDate}</Text> 
                            <Subtext>{eventCategory}</Subtext>
                        </Section>
                    </Section>
                </CardElement>
                
                {/* Adiciona um Divider se não for o último item da lista filtrada */}
                {index < totalEvents - 1 && <Divider />} 
            </React.Fragment>
        );
    };

    // --- Renderização Principal ---

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
                {events.length > 0 ? (
                    // FILTRAGEM: Apenas renderiza eventos que possuem nome em alguma das chaves
                    events
                        .filter(event => event.nome || event.titulo || event.title) 
                        .map((event, index, filteredArr) => 
                            renderEvent(event, index, filteredArr.length) 
                        )
                ) : (
                    // Placeholder se a lista estiver vazia ou se todos forem filtrados
                    <CardElement>
                        <Section horizontal={true} spaceBetween={true} centerVertical={true}>
                            <Text>Nenhum evento agendado.</Text>
                        </Section>
                    </CardElement>
                )}

                <CardElement>
                    <SmallAccentButton onPress={() => navigation.navigate('AgendaScreen')}>Verificar agenda completa</SmallAccentButton>
                </CardElement>

            </Card>

            <Card label={'Crédito da pulseira'}>
                <CardElement>
                    <Text>Crédito disponível</Text>
                    <Text accented={true}>R$ 30,00</Text>
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
});