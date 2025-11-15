import { useState } from 'react'
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Title } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { BigSimpleButton, SmallSimpleButton } from '../components/Buttons';
import { Divider, GradientScreen, Input } from '../components/Interface';
import { Section } from '../components/Alignments';
import styles from "../styles/Styles";

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

export async function ProcessLogin(navigation, activity, email, pass) {
    activity(true)
    await timeout(1000)

    // if (email == 'admin' && pass == 'admin') navigation.navigate('Summary')

    navigation.navigate('Tabs')
    activity(false)
}

export default function Login({ navigation }) {
    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')

    return (
        <GradientScreen fill={true}>
            <Image style={loginStyle.logo} source={require('../../assets/logo.png')} />

            <Section spaceBetween={true}>
                <Section gap={15}>
                    <Title style={{ color: styles().lightColors.foreground }}>Acesse sua conta</Title>

                    <Card style={{ backgroundColor: styles().lightColors.foreground }}>
                        <CardElement>
                            <Input
                                style={{ color: styles().lightColors.text }}
                                placeholder="Email"
                                placeholderTextColor={styles().lightColors.subtext}
                                value={getEmail}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </CardElement>

                        <Divider style={{ borderColor: styles().lightColors.divider }} />

                        <CardElement>
                            <Input
                                style={{ color: styles().lightColors.text }}
                                placeholder="Senha"
                                placeholderTextColor={styles().lightColors.subtext}
                                secureTextEntry={true}
                                value={getPass}
                                onChangeText={(value) => setPass(value)}
                            />
                        </CardElement>
                    </Card>

                    <SmallSimpleButton style={[styles().textHorizontalMargins, { color: styles().lightColors.foreground }]} onPress={() => navigation.navigate('Recovery')}>
                        Esqueci a senha
                    </SmallSimpleButton>
                </Section>

                <BigSimpleButton onPress={() => ProcessLogin(navigation, changeShowActivityIndicator, getEmail, getPass)}>
                    {showActivityIndicator ? <ActivityIndicator color={'#000'} /> : 'Entrar'}
                </BigSimpleButton>

            </Section>
        </GradientScreen>
    );
}

const loginStyle = StyleSheet.create({
    logo: {
        marginTop: 25,
        marginBottom: 35,
        alignSelf: 'center',
        height: 225,
        width: '100%',
        resizeMode: 'contain'
    }
})