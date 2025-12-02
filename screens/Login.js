import { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthService from '../services/AuthService';
import AlunoService from '../services/AlunoService';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Title } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { BigSimpleButton, SmallSimpleButton } from '../components/Buttons';
import { Divider, GradientScreen, Input } from '../components/Interface';
import { Section } from '../components/Alignments';
import { globalStyleVariables } from '../styles/Styles';
import globalColors from '../styles/Colors';

async function handleLogin(navigation, activity, email, pass) {
    activity(true);
    try {
        const authService = new AuthService();
        const alunoService = new AlunoService();

        const data = await authService.login(email, pass);
        await AsyncStorage.setItem('token', data.token);
        
        const alunos = await alunoService.getAlunosByResponsavelId(data.id);

        await AsyncStorage.setItem('tipoUsuario', data.tipoUsuario);
        await AsyncStorage.setItem('id', String(data.id));
        await AsyncStorage.setItem('qtdAlunos', alunos.length.toString());
        await AsyncStorage.setItem('alunoAtual', alunos[0]?.id.toString() || '');

        navigation.navigate('Tabs');

    } catch (err) {
        alert(err.message);
    } finally {
        activity(false);
    }
}

async function handleAutoLogin(navigation) {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        navigation.replace('Tabs');
    }
}

// function timeout(delay) {
//     return new Promise(res => setTimeout(res, delay));
// }

// async function handleLogin(navigation, activity, email, pass) {
//     activity(true)
//     await timeout(1000)

//     navigation.replace('Tabs')
//     activity(false)
// }

export default ({ navigation }) => {
    handleAutoLogin(navigation);

    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')
    const activityIndicator = <ActivityIndicator color={globalColors('light').accent[0]} style={{ backgroundColor: 'white' }} />

    return (
        <GradientScreen fill>
            <Image style={localStyles.logo} source={require('../assets/logo.png')} />

            <Section spaceBetween>
                <Section gap={15}>
                    <Title style={{ color: globalColors('light').foreground }}>Acesse sua conta</Title>

                    <Card style={{ backgroundColor: globalColors('light').foreground }}>
                        <CardElement>
                            <Input
                                style={{ color: globalColors('light').text }}
                                placeholder='Email'
                                placeholderTextColor={globalColors('light').subtext}
                                value={getEmail}
                                onChangeText={(value) => setEmail(value)}
                                autoCapitalize='none'
                                keyboardType='email-address'
                            />
                        </CardElement>

                        <Divider style={{ borderColor: globalColors('light').divider }} />

                        <CardElement>
                            <Input
                                style={{ color: globalColors('light').text }}
                                placeholder='Senha'
                                placeholderTextColor={globalColors('light').subtext}
                                secureTextEntry={true}
                                value={getPass}
                                onChangeText={(value) => setPass(value)}
                            />
                        </CardElement>
                    </Card>

                    <SmallSimpleButton style={{ color: globalColors('light').foreground, marginHorizontal: globalStyleVariables.screenMargin }} onPress={() => navigation.navigate('Recovery')}>
                        Esqueci a senha
                    </SmallSimpleButton>
                </Section>


                <BigSimpleButton onPress={() => handleLogin(navigation, changeShowActivityIndicator, getEmail, getPass)}>
                    {showActivityIndicator ? activityIndicator : 'Entrar'}
                </BigSimpleButton>

            </Section>
        </GradientScreen>
    );
}

const localStyles = StyleSheet.create({
    logo: {
        marginTop: 25,
        marginBottom: 35,
        alignSelf: 'center',
        height: 225,
        width: '100%',
        resizeMode: 'contain'
    }
})