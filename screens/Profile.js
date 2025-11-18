import { Subtext, Title } from '../components/Texts';
import { SimpleScreen, Input } from '../components/Interface';
import { ImageBackground, Image, StyleSheet, Alert } from 'react-native';
import { Card, CardElement, SubtitleCard } from '../components/Cards';
import { BigAccentButton } from '../components/Buttons';
import { Section } from '../components/Alignments';
import colors from '../styles/Colors';

const CustomInput = ({ label, placeholder, value, editable = false, style }) => {

    const inputColor = editable ? colors().text : colors().inactive;

    return (
        <Section gap={5}>
            {label && <Subtext>{label}</Subtext>}
            <Input
                placeholder={placeholder}
                value={value}
                editable={editable}
                style={[
                    styles.customTextInput,
                    {
                        color: inputColor,
                        borderColor: colors().divider,
                    },
                    style
                ]}
            />
        </Section>
    );
};


export default ({ navigation }) => {
    const handlePress = () => {
        Alert.alert('', 'Suas informações foram salvas!');
    };

    return (
        <SimpleScreen tabScreen={true} style={{ padding: 0 }}>
            <ImageBackground source={require('../assets/telaPerfil_v2.png')} style={styles.background} resizeMode="cover">
                <Section style={styles.contentWrapper} gap={15}>

                    <Title>Editar Informações</Title>

                    <Section style={styles.imgContainer}>
                        <Image source={require('../assets/imagem_ilustrativa_de_pessoa_atraente-27352370.webp')} style={styles.Image} />
                    </Section>

                    <Card gap={10}>
                        <CardElement gap={15}>
                            <CustomInput label="Nome Completo:" placeholder="Alexia Martins Castro" value="Alexia Martins Castro" />
                            <CustomInput label="Email:" placeholder="alexia.martins@gmail.com" value="alexia.martins@gmail.com" editable={true} />
                        </CardElement>
                    </Card>

                    <SubtitleCard subtitle="Informações Adicionais" gap={10}>
                        <CardElement gap={15}>
                            <CustomInput label="CPF:" placeholder="123.456.789-09" value="123.456.789-09" editable={false} />
                            <CustomInput label="Endereço:" placeholder="Rua A, 123 , Jardim ABC - FV/SP" value="Rua A, 123 , Jardim ABC - FV/SP" editable={true} />
                            <CustomInput label="Telefone:" placeholder="11 99999-9999" value="11 99999-9999" editable={true} />
                            <CustomInput label="Filhos(as):" placeholder="Gabriela Martins" value="Gabriela Martins" />
                        </CardElement>
                    </SubtitleCard>

                    <BigAccentButton onPress={handlePress}>Salvar</BigAccentButton>
                </Section>
            </ImageBackground>
        </SimpleScreen>
    );
};

const styles = StyleSheet.create({
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
        marginBottom: 5,
    },
    Image: {
        height: 138,
        width: 138,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#fee971',
    },

    customTextInput: {
        borderWidth: 1,
        borderRadius: 30,
        height: 50,
        paddingHorizontal: 15,
    },
});