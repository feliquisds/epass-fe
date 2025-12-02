import ProfileService from '../services/ProfileService';
import { TitleWithBackButton } from '../components/Texts';
import { RoundInput, ImageScreen } from '../components/Interface';
import { Image, StyleSheet, Alert } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { BigAccentButton } from '../components/Buttons';
import { useEffect, useState } from 'react';

export default ({ navigation }) => {
    const [dadosEditaveis, setDadosEditaveis] = useState({
        email: '',
        endereco: '',
        telefone: ''
    });

    const [dadosFixos, setDadosFixos] = useState({
        nome: '',
        cpf: '',
        filhos: []
    });

    async function loadProfile() {
        try {
            const profileService = new ProfileService();
            const profile = await profileService.getProfile();
            setDadosEditaveis({
                email: profile.email || '',
                endereco: profile.endereco || '',
                telefone: profile.telefone || ''
            });
            setDadosFixos({
                nome: profile.nome || '',
                cpf: profile.cpf || '',
                filhos: profile.filhos || []
            });
        } catch (error) {
            console.error('Erro ao carregar perfil: ', error);
        }
    }

    async function saveProfile() {
        try {
            const profileService = new ProfileService();
            await profileService.editProfile(dadosEditaveis);
            Alert.alert('Sucesso!', 'Suas informações foram salvas!');
        } catch (error) {
            console.error('Erro ao salvar perfil: ', error);
            Alert.alert('Erro', 'Não foi possível salvar as informações.');
        }
    }

    useEffect(() => {
        loadProfile();
    }, []);

    return (
        <ImageScreen tabScreen>
            <TitleWithBackButton style={localStyles.colorOverride} navigation={navigation}>Editar Informações</TitleWithBackButton>

            <Image source={require('../assets/parentPfp.webp')} style={localStyles.profilePicture} />

            <Card gap={10} style={localStyles.cardUnderPicture}>
                <CardElement gap={15}>
                    <RoundInput label='Nome Completo:' placeholder='Alexia Martins Castro' value={dadosFixos.nome} editable={false} />
                    <RoundInput label='Email:' placeholder='alexia.martins@gmail.com' value={dadosEditaveis.email} />
                </CardElement>
            </Card>

            <Card label='Informações adicionais' gap={10}>
                <CardElement gap={15}>
                    <RoundInput label='CPF:' placeholder='123.456.789-09' value={dadosFixos.cpf} editable={false} />
                    <RoundInput label='Endereço:' placeholder='Rua A, 123 , Jardim ABC - FV/SP' value={dadosEditaveis.endereco} />
                    <RoundInput label='Telefone:' placeholder='11 99999-9999' value={dadosEditaveis.telefone} />
                    <RoundInput label='Filhos(as):' placeholder='Gabriela Martins' value={dadosFixos.filhos.join(', ')} editable={false} />
                </CardElement>
            </Card>

            <BigAccentButton onPress={saveProfile}>Salvar</BigAccentButton>
        </ImageScreen>
    );
};

const localStyles = StyleSheet.create({
    profilePicture: {
        alignSelf: 'center',
        marginBottom: -45,
        zIndex: 1,
        height: 138,
        width: 138,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#fee971',
    },
    cardUnderPicture: {
        paddingTop: 20
    },
    colorOverride: {
        color: 'white'
    }
});