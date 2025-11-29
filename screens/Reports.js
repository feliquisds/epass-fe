import { FlatList, Image, StyleSheet } from 'react-native';
import { Divider, SimpleScreen } from '../components/Interface';
import { Header, Title, Text, Subtext } from '../components/Texts';
import { Card, CardElement, GradientCard } from '../components/Cards';
import { SlimSimpleButton, SmallAccentButton } from '../components/Buttons';
import { Section } from '../components/Alignments';
import globalColors from '../styles/Colors';

const DATA = [
    { id: '1', title: 'Multiplicação', date: '10 de set.', score: '5,00', subject: 'Matemática' },
    { id: '2', title: 'História do Brasil', date: '9 de set.', score: '8,00', subject: 'História' },
    { id: '3', title: 'Verbos', date: '8 de set.', score: '9,00', subject: 'Português' },
];

function goToAIReport(navigation) {
    navigation.navigate('AIReport')
}

export default ({ navigation }) => {
    const renderNote = ({ item }) => (
        <CardElement horizontal spaceBetween centerVertical>
            <Section>
                <Text>{item.title}</Text>
                <Subtext>{item.date}</Subtext>
            </Section>
            <Section alignRight>
                <Header>{item.score}</Header>
                <Subtext>{item.subject}</Subtext>
            </Section>
        </CardElement>
    );

    return (
        <SimpleScreen tabScreen>
            <Title>Relatório</Title>

            <GradientCard gradient={globalColors().ai}>
                <CardElement gap={15}>
                    <Section horizontal spaceBetween centerVertical gap={5}>
                        <Header style={{ color: 'white', width: '70%' }}>Dificuldade em matemática</Header>
                        <Image style={localStyles.sparkle} source={require('../assets/sparkle.png')} />
                    </Section>
                    <Text style={{ color: 'white' }}>Acompanhe o desempenho de seu filho com nossa IA</Text>
                    <SlimSimpleButton gradient={globalColors().ai} onPress={() => goToAIReport(navigation)}>Ver análise de desempenho</SlimSimpleButton>
                </CardElement>
            </GradientCard>

            <Card label={'Notas'}>
                <FlatList
                    data={DATA}
                    keyExtractor={(i) => i.id}
                    renderItem={renderNote}
                    ItemSeparatorComponent={<Divider />}
                />

                <Divider />

                <CardElement>
                    <SmallAccentButton>Verificar atividades recentes</SmallAccentButton>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Verificar boletim</SmallAccentButton>
                </CardElement>
            </Card>

        </SimpleScreen>
    );
}

const localStyles = StyleSheet.create({
    sparkle: {
        height: 80,
        width: 80,
        margin: -10
    }
})