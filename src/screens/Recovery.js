import { useState } from 'react'
import { Text, View, Pressable, ScrollView, ActivityIndicator, TextInput } from 'react-native';
import { BackButton } from '../components/Buttons'
import styles from "../styles/Styles";

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
        <ScrollView style={styles().screen} contentContainerStyle={[styles().gap15, { height: '100%' }]}>

            <View style={[styles().horizontal, styles().gap10]}>
                <BackButton navigation={navigation} />
                <Text style={styles().title}>Recuperar acesso</Text>
            </View>

            <View style={styles().space_between}>
                <View style={styles().card}>
                    <View style={[styles().card_element, styles().gap10]}>
                        <Text style={styles().header}>Digite seu email</Text>
                        <Text style={styles().text}>Caso seu email conste em nosso banco de dados, enviaremos um link para cadastro de uma nova senha</Text>
                    </View>
                    <View style={styles().divider} />
                    <TextInput
                        style={[styles().card_element, styles().input]}
                        placeholder="Email"
                        placeholderTextColor={styles().colors.subtext}
                        value={getEmail}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>

                <Pressable style={styles().bigButton} onPress={() => ProcessRecovery(navigation, changeShowActivityIndicator, getEmail)}>
                    <View style={{ display: showActivityIndicator ? 'none' : 'flex' }}>
                        <Text style={styles().bigButtonText}>Enviar</Text>
                    </View>
                    <ActivityIndicator color='white' style={{ display: showActivityIndicator ? 'flex' : 'none' }} />
                </Pressable>
            </View>

        </ScrollView>
    );
}