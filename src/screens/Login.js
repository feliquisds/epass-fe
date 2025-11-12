import { useState } from 'react'

import { Text, View, TextInput, Image, Pressable, ActivityIndicator, ScrollView, useColorScheme } from 'react-native';

import styles from "../styles/Generic";

function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
}

async function ProcessLogin(navigation, activity, email, pass) {
    activity(true)
    await timeout(1000)

    // if (email == 'admin' && pass == 'admin') navigation.navigate('Summary')

    navigation.navigate('Summary')
    activity(false)
}

export default function Login({ navigation }) {
    const [showActivityIndicator, changeShowActivityIndicator] = useState(false)
    const [getEmail, setEmail] = useState('')
    const [getPass, setPass] = useState('')
    const theme = useColorScheme()

    return (
        <ScrollView style={styles().screen} contentContainerStyle={[styles().gap15, { height: '100%' }]}>
            <Image style={styles().logo} source={theme == 'dark' ? require('../../assets/logo_dark.png') : require('../../assets/logo_light.png')} />

            <View style={styles().space_between}>

                <View style={styles().gap15}>
                    <Text style={[styles().title, styles().textHorizontalMargins]}>Acesse sua conta</Text>

                    <View style={styles().card}>
                        <TextInput
                            style={[styles().card_element, styles().input]}
                            placeholder="Email"
                            placeholderTextColor={styles().colors.subtext}
                            value={getEmail}
                            onChangeText={(value) => setEmail(value)}
                        />
                        <View style={styles().divider} />
                        <TextInput
                            style={[styles().card_element, styles().input]}
                            placeholder="Senha"
                            placeholderTextColor={styles().colors.subtext}
                            secureTextEntry={true}
                            value={getPass}
                            onChangeText={(value) => setPass(value)}
                        />
                    </View>

                    <Pressable style={[styles().smallButton, styles().textHorizontalMargins]} onPress={() => navigation.navigate('Recovery')}>
                        <Text style={styles().smallButton}>Esqueci a senha</Text>
                    </Pressable>
                </View>

                <Pressable style={styles().bigButton} onPress={() => ProcessLogin(navigation, changeShowActivityIndicator, getEmail, getPass)}>
                    <View style={{ display: showActivityIndicator ? 'none' : 'flex' }}>
                        <Text style={styles().bigButtonText}>Entrar</Text>
                    </View>
                    <ActivityIndicator color='white' style={{ display: showActivityIndicator ? 'flex' : 'none' }} />
                </Pressable>

            </View>

        </ScrollView>
    );
}