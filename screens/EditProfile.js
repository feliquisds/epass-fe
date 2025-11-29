import { TitleWithBackButton } from '../components/Texts';
import { RoundInput, ImageScreen } from '../components/Interface';
import { Image, StyleSheet, Alert } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { BigAccentButton } from '../components/Buttons';

export default ({ navigation }) => {
    const handlePress = () => {
        Alert.alert('', 'Suas informações foram salvas!');
    };

    return (
        <ImageScreen tabScreen>
            <TitleWithBackButton style={localStyles.colorOverride} navigation={navigation}>Editar Informações</TitleWithBackButton>

            <Image source={require('../assets/parentPfp.webp')} style={localStyles.profilePicture} />

            <Card gap={10} style={localStyles.cardUnderPicture}>
                <CardElement gap={15}>
                    <RoundInput label='Nome Completo:' placeholder='Alexia Martins Castro' value='Alexia Martins Castro' editable={false} />
                    <RoundInput label='Email:' placeholder='alexia.martins@gmail.com' value='alexia.martins@gmail.com' />
                </CardElement>
            </Card>

            <Card label='Informações adicionais' gap={10}>
                <CardElement gap={15}>
                    <RoundInput label='CPF:' placeholder='123.456.789-09' value='123.456.789-09' editable={false} />
                    <RoundInput label='Endereço:' placeholder='Rua A, 123 , Jardim ABC - FV/SP' value='Rua A, 123 , Jardim ABC - FV/SP' />
                    <RoundInput label='Telefone:' placeholder='11 99999-9999' value='11 99999-9999' editable />
                    <RoundInput label='Filhos(as):' placeholder='Gabriela Martins' value='Gabriela Martins' editable={false} />
                </CardElement>
            </Card>

            <BigAccentButton onPress={handlePress}>Salvar</BigAccentButton>
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