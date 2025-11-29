import { useState } from 'react';
import { TitleWithBackButton, Text } from '../components/Texts';
import { Section } from '../components/Alignments';
import { CardElement, GradientCard } from '../components/Cards';
import { SimpleScreen, Divider } from '../components/Interface';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { AccentToggle } from '../components/Toggles';

export default ({ navigation }) => {
    const [getScreenReader, setScreenReader] = useState(false)
    const [getContrast, setContrast] = useState(false)

    return (
        <SimpleScreen fill>
            <TitleWithBackButton navigation={navigation}>
                Acessibilidade
            </TitleWithBackButton>

            <Section centerVertical>
                <GradientCard style={localStyles.accessibilityIcon}>
                    <MaterialIcons name='accessibility-new' size={60} color='white' />
                </GradientCard>
            </Section>

            <GradientCard style={{ height: '100%' }}>

                <CardElement>
                    <Section centerVertical style={{ alignItems: 'center' }}>
                        <Text accented style={{ color: 'white' }}>
                            Tamanho da Fonte
                        </Text>
                    </Section>
                    <Section horizontal centerVertical spaceBetween gap={10}>
                        <MaterialIcons name='text-fields' size={22} color='white' />
                        <Divider style={localStyles.textSizeLine} />
                        <MaterialIcons name='text-fields' size={28} color='white' />
                    </Section>
                </CardElement>

                <Divider style={{ borderColor: '#ffffff60' }} />

                <CardElement>
                    <Section horizontal spaceBetween centerVertical>
                        <Text style={{ color: 'white' }}>Leitor de Tela</Text>

                        <AccentToggle value={getScreenReader} onValueChange={() => setScreenReader(!getScreenReader)} />
                    </Section>
                </CardElement>

                <Divider style={{ borderColor: '#ffffff60' }} />

                <CardElement>
                    <Section horizontal spaceBetween centerVertical>
                        <Text style={{ color: 'white' }}>Contraste</Text>

                        <AccentToggle value={getContrast} onValueChange={() => setContrast(!getContrast)} />
                    </Section>
                </CardElement>

            </GradientCard>

        </SimpleScreen>
    );
}

const localStyles = StyleSheet.create({
    textSizeLine: {
        flex: 1,
        borderColor: '#ffffff80',
        borderBottomWidth: 2
    },
    accessibilityIcon: {
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: 10
    }
})