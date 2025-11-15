import { useState } from 'react'
import { Image, ActivityIndicator, StyleSheet } from 'react-native';
import { Title } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { BigSimpleButton, SmallSimpleButton } from '../components/Buttons';
import { Divider, GradientScreen, Input } from '../components/Interface';
import { Section } from '../components/Alignments';
import globalStyles from "../styles/Styles";

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

async function processLogin(navigation, activity, email, pass) {
    activity(true)
    await timeout(1000)

    // if (email == 'admin' && pass == 'admin') navigation.navigate('Tabs')

    navigation.navigate('Tabs')
    activity(false)
}

export default ({ navigation }) => {
    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')

    return (
        <GradientScreen fill={true}>
            <Image style={LocalStyle.logo} source={require('../assets/logo.png')} />

            <Section spaceBetween={true}>
                <Section gap={15}>
                    <Title style={{ color: globalStyles().lightColors.foreground }}>Acesse sua conta</Title>

                    <Card style={{ backgroundColor: globalStyles().lightColors.foreground }}>
                        <CardElement>
                            <Input
                                style={{ color: globalStyles().lightColors.text }}
                                placeholder="Email"
                                placeholderTextColor={globalStyles().lightColors.subtext}
                                value={getEmail}
                                onChangeText={(value) => setEmail(value)}
                            />
                        </CardElement>

                        <Divider style={{ borderColor: globalStyles().lightColors.divider }} />

                        <CardElement>
                            <Input
                                style={{ color: globalStyles().lightColors.text }}
                                placeholder="Senha"
                                placeholderTextColor={globalStyles().lightColors.subtext}
                                secureTextEntry={true}
                                value={getPass}
                                onChangeText={(value) => setPass(value)}
                            />
                        </CardElement>
                    </Card>

                    <SmallSimpleButton style={[globalStyles().textHorizontalMargins, { color: globalStyles().lightColors.foreground }]} onPress={() => navigation.navigate('Recovery')}>
                        Esqueci a senha
                    </SmallSimpleButton>
                </Section>

                <BigSimpleButton onPress={() => processLogin(navigation, changeShowActivityIndicator, getEmail, getPass)}>
                    {showActivityIndicator ? <ActivityIndicator color={'#000'} /> : 'Entrar'}
                </BigSimpleButton>

            </Section>
        </GradientScreen>
    );
}

const LocalStyle = StyleSheet.create({
    logo: {
        marginTop: 25,
        marginBottom: 35,
        alignSelf: 'center',
        height: 225,
        width: '100%',
        resizeMode: 'contain'
    }
})