import { FlatList } from 'react-native';
import { Divider, SimpleScreen } from '../components/Interface';
import { Header, Title, Text, Subtext } from '../components/Texts';
import { Card, CardElement, GradientCard } from '../components/Cards';
import { SlimSimpleButton, SmallAccentButton } from '../components/Buttons';
import { Section } from '../components/Alignments';

const DATA = [
    { id: '1', title: 'Multiplicação', date: '10 de set.', score: '5,00', subject: 'Matemática' },
    { id: '2', title: 'História do Brasil', date: '9 de set.', score: '8,00', subject: 'História' },
    { id: '3', title: 'Verbos', date: '8 de set.', score: '9,00', subject: 'Português' },
];

export default () => {
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
            <Title>Relatórios</Title>

            <GradientCard gradient={['#4c8dff', '#1e66ff']}>
                <CardElement gap={15}>
                    <Section gap={5}>
                        <Header style={{ color: '#fff' }}>Dificuldade em matemática</Header>
                        <Text style={{ color: '#fff' }}>Acompanhe o desempenho de seu filho com nossa IA</Text>
                    </Section>
                    <SlimSimpleButton gradient={['#4c8dff', '#1e66ff']}>Ver análise de desempenho</SlimSimpleButton>
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