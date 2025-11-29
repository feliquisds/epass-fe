import { Image, StyleSheet } from 'react-native';
import { TitleWithBackButton, Text } from '../components/Texts';
import { BigSimpleButton } from '../components/Buttons';
import { GradientScreen } from '../components/Interface';
import { Section } from '../components/Alignments';
import globalColors from '../styles/Colors';

export default ({ navigation }) => {
    return (
        <GradientScreen fill>
            <TitleWithBackButton navigation={navigation} style={{ color: globalColors('light').foreground }}>
                Liberar aluno
            </TitleWithBackButton>

            <Image style={localStyles.qrCode} source={require('../assets/qrCode.png')} />

            <Section spaceBetween>
                <Section gap={15}>
                    <Text style={{ color: globalColors('light').foreground }}>
                        Use esse código QR para liberar seu aluno.
                    </Text>

                    <Text style={{ color: globalColors('light').foreground }}>
                        Caso outra pessoa for buscar o aluno, compartilhe o código QR.
                    </Text>
                </Section>

                <BigSimpleButton>Compartilhar</BigSimpleButton>
            </Section>
        </GradientScreen>
    );
}

const localStyles = StyleSheet.create({
    qrCode: {
        alignSelf: 'center',
        height: undefined,
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'contain'
    }
})