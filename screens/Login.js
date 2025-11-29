import { useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { login as apiLogin } from '../services/auth';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Title } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { BigSimpleButton, SmallSimpleButton } from '../components/Buttons';
import { Divider, GradientScreen, Input } from '../components/Interface';
import { Section } from '../components/Alignments';
import { globalStyleVariables } from '../styles/Styles';
import globalColors from '../styles/Colors';

// async function handleLogin(navigation, activity, email, pass) {
//     activity(true);
//     try {
//         const data = await apiLogin(email, pass);

//         // 1. Salva token localmente
//         await AsyncStorage.setItem('token', data.token);

//         // 2. NOVO: Salva o nome do responsável localmente
//         if (data.nome) {
//             await AsyncStorage.setItem('user_name', data.nome);
//         }

//         if (data.id) {
//             await AsyncStorage.setItem('user_id', String(data.id));
//         }

//         // navega para Tabs
//         navigation.navigate('Tabs');

//     } catch (err) {
//         alert(err.message);
//     } finally {
//         activity(false);
//     }
// }

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

async function handleLogin(navigation, activity, email, pass) {
    activity(true)
    await timeout(1000)

    navigation.navigate('Tabs')
    activity(false)
}

export default ({ navigation }) => {
    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')
    const activityIndicator = <ActivityIndicator color={globalColors('light').accent[0]} style={{ backgroundColor: '' }} />

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
                                placeholder="Email"
                                placeholderTextColor={globalColors('light').subtext}
                                value={getEmail}
                                onChangeText={(value) => setEmail(value)}
                                autoCapitalize="none"
                                keyboardType="email-address"
                            />
                        </CardElement>

                        <Divider style={{ borderColor: globalColors('light').divider }} />

                        <CardElement>
                            <Input
                                style={{ color: globalColors('light').text }}
                                placeholder="Senha"
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