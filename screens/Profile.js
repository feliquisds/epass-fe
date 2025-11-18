import { Header, Subtext, Title } from '../components/Texts';
import { SimpleScreen, Divider } from '../components/Interface';
import { Image, StyleSheet } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { SmallSimpleButton } from '../components/Buttons';
import { Section } from '../components/Alignments';

function handleLogout(navigation) {
    navigation.replace('Login');
}

function editProfile(navigation) {
    navigation.navigate('EditProfile');
}

export default ({ navigation }) => {
    return (
        <SimpleScreen tabScreen={true}>
            <Title>Perfil</Title>

            <Card>
                <CardElement horizontal={true} gap={15}>
                    <Image source={require('../assets/parentPfp.webp')} style={localStyle.profilePicture} />
                    <Section style={{ alignSelf: 'center' }}>
                        <Header>Alexia Martins</Header>
                        <Subtext>Responsável</Subtext>
                    </Section>
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton onPress={() => editProfile(navigation)}>Editar informações</SmallSimpleButton>
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton>Solicitar documentos</SmallSimpleButton>
                </CardElement>
            </Card>

            <Card>
                <CardElement>
                    <SmallSimpleButton>Acessibilidade</SmallSimpleButton>
                </CardElement>
                <Divider />
                <CardElement>
                    <SmallSimpleButton style={{ color: "#FF002F", textAlign: 'center' }} onPress={() => handleLogout(navigation)}>Sair</SmallSimpleButton>
                </CardElement>
            </Card>
        </SimpleScreen>
    );
};

const localStyle = StyleSheet.create({
    profilePicture: {
        zIndex: 1,
        height: 90,
        width: 90,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#FF5B8F',
    },
});