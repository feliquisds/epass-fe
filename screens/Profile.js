import ProfileService from '../services/ProfileService';
import AuthService from '../services/AuthService';
import { Header, Subtext, Title, Text } from '../components/Texts';
import { SimpleScreen, Divider } from '../components/Interface';
import { Image, StyleSheet, useColorScheme } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { SmallSimpleButton } from '../components/Buttons';
import { Section } from '../components/Alignments';
import { AccentToggle } from '../components/Toggles';
import { useState, useEffect } from 'react';

function handleLogout(navigation) {
    const authService = new AuthService();
    authService.logout();
    navigation.replace('Login');
}

function goToEditProfile(navigation) {
    navigation.navigate('EditProfile');
}

function goToAccessibility(navigation) {
    navigation.navigate('Accessibility');
}

export default function Profile({ navigation }) {
    const [nome, setNome] = useState('Carregando...');
    const colorScheme = useColorScheme();
    const [getCurrentTheme, setCurrentTheme] = useState(colorScheme.toString == 'dark' ? 'dark' : 'light');

    useEffect(() => {
        setCurrentTheme(colorScheme.toString());
    }, [colorScheme]);

    function changeTheme(isDarkMode) {
        if (isDarkMode) {
            setCurrentTheme('dark')
            console.log('modo escuro ativado')
        }
        else {
            setCurrentTheme('light')
            console.log('modo escuro desativado')
        }
    }

    async function loadName() {
        try {
            const profileService = new ProfileService();
            const profile = await profileService.getProfile();
            setNome(profile.nome);
        } catch (error) {
            console.error('Erro ao carregar perfil: ', error);
        }
    }

    useEffect(() => {
        loadName();
    }, []);

    return (
        <SimpleScreen tabScreen>
            <Title>Perfil</Title>

            <Card>
                <CardElement horizontal gap={15}>
                    <Image source={require('../assets/parentPfp.webp')} style={localStyles.profilePicture} />
                    <Section style={{ alignSelf: 'center' }}>
                        <Header>{nome}</Header>
                        <Subtext>Responsável</Subtext>
                    </Section>
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton onPress={() => goToEditProfile(navigation)}>Editar informações</SmallSimpleButton>
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton>Solicitar documentos</SmallSimpleButton>
                </CardElement>
            </Card>

            <Card>
                <CardElement>
                    <SmallSimpleButton onPress={() => goToAccessibility(navigation)}>Acessibilidade</SmallSimpleButton>
                </CardElement>
                <Divider />
                <CardElement horizontal spaceBetween>
                    <Text accented>Modo escuro</Text>
                    <AccentToggle value={getCurrentTheme === 'dark'} onValueChange={changeTheme} />
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton style={{ color: localColors.logout, textAlign: 'center' }} onPress={() => handleLogout(navigation)}>Sair</SmallSimpleButton>
                </CardElement>
            </Card>
        </SimpleScreen>
    );
}

const localStyles = StyleSheet.create({
    profilePicture: {
        zIndex: 1,
        height: 90,
        width: 90,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#FF5B8F',
    },
});

const localColors = {
    logout: '#FF002F'
}