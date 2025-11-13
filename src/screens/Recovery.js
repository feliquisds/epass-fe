import { useState } from 'react'
import { ActivityIndicator } from 'react-native';
import { Divider, Input, SimpleScreen } from '../components/Interface';
import { Header, TitleWithBackButton, Text } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { Section } from '../components/Alignments';
import { BigAccentButton } from '../components/Buttons';

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

async function ProcessRecovery(navigation, activity, email) {
    activity(true)
    await timeout(1000)

    navigation.goBack()
    activity(false)
}

export default function Recovery({ navigation }) {
    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')

    return (
        <SimpleScreen fill={true}>

            <TitleWithBackButton navigation={navigation}>Recuperar acesso</TitleWithBackButton>

            <Section spaceBetween={true}>
                <Card>
                    <Section gap={5}>
                        <CardElement gap={10}>
                            <Header>Digite seu email</Header>
                            <Text>Caso seu email conste em nosso banco de dados, enviaremos um link para cadastro de uma nova senha</Text>
                        </CardElement>

                        <Divider />
                    </Section>

                    <CardElement>
                        <Input
                            placeholder="Email"
                            value={getEmail}
                            onChangeText={(value) => setEmail(value)}
                        />
                    </CardElement>
                </Card>

                <BigAccentButton onPress={() => ProcessRecovery(navigation, changeShowActivityIndicator, getEmail)}>
                    {showActivityIndicator ? <ActivityIndicator color={'#000'} /> : 'Entrar'}
                </BigAccentButton>
            </Section>

        </SimpleScreen>
    );
}