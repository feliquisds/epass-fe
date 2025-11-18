import { Title } from '../components/Texts';
import { SimpleScreen, RoundInput } from '../components/Interface';
import { ImageBackground, Image, StyleSheet, Alert } from 'react-native';
import { Card, CardElement, SubtitleCard } from '../components/Cards';
import { BigAccentButton } from '../components/Buttons';
import { Section } from '../components/Alignments';

export default ({ navigation }) => {
    const handlePress = () => {
        Alert.alert('', 'Suas informações foram salvas!');
    };

    return (
        <SimpleScreen tabScreen={true} style={{ padding: 0 }}>
            <ImageBackground source={require('../assets/telaPerfil_v2.png')} style={localStyle.background} resizeMode="cover">
                <Section style={localStyle.contentWrapper} gap={15}>

                    <Title>Editar Informações</Title>

                    <Section style={localStyle.imgContainer}>
                        <Image source={require('../assets/imagem_ilustrativa_de_pessoa_atraente-27352370.webp')} style={localStyle.Image} />
                    </Section>

                    <Card gap={10} style={{ paddingTop: 20 }}>
                        <CardElement gap={15}>
                            <RoundInput label="Nome Completo:" placeholder="Alexia Martins Castro" value="Alexia Martins Castro" editable={false} />
                            <RoundInput label="Email:" placeholder="alexia.martins@gmail.com" value="alexia.martins@gmail.com" />
                        </CardElement>
                    </Card>

                    <SubtitleCard subtitle="Informações Adicionais" gap={10}>
                        <CardElement gap={15}>
                            <RoundInput label="CPF:" placeholder="123.456.789-09" value="123.456.789-09" editable={false} />
                            <RoundInput label="Endereço:" placeholder="Rua A, 123 , Jardim ABC - FV/SP" value="Rua A, 123 , Jardim ABC - FV/SP" />
                            <RoundInput label="Telefone:" placeholder="11 99999-9999" value="11 99999-9999" editable={true} />
                            <RoundInput label="Filhos(as):" placeholder="Gabriela Martins" value="Gabriela Martins" editable={false} />
                        </CardElement>
                    </SubtitleCard>

                    <BigAccentButton onPress={handlePress}>Salvar</BigAccentButton>
                </Section>
            </ImageBackground>
        </SimpleScreen>
    );
};

const localStyle = StyleSheet.create({
    background: {
        flex: 1,
        marginHorizontal: -15,
        marginVertical: -15,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    contentWrapper: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 30,
    },
    imgContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: -45,
        zIndex: 1,
    },
    Image: {
        height: 138,
        width: 138,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#fee971',
    },
});