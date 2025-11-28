import { FlatList } from 'react-native';
import { Divider, SimpleScreen } from '../components/Interface';
import { Header, Title, Text, Subtext } from '../components/Texts';
import { Card, CardElement, GradientCard } from '../components/Cards';
import { SlimSimpleButton, SmallAccentButton } from '../components/Buttons';
import { TitleWithBackButton } from '../components/Texts';
import { Section } from '../components/Alignments';


const weeknote = [
    { id: '1', title: 'Pão de batata', date: '10 de set.', score: '-R$ 3,50' },
    { id: '2', title: 'Pão de batata', date: '9 de set.', score: '-R$3,50'},
    { id: '3', title: 'Croissaint', date: '8 de set.', score: '-R$5,00' },
];
const monthnote = [
    { id: '1', title: 'Pão de batata', date: '10 de ago.', score: '-R$ 3,50'},
    { id: '2', title: 'Pão de batata', date: '9 de ago.', score: '-R$3,50' },
    { id: '3', title: 'Croissaint', date: '8 de ago.', score: '-R$5,00' },
    { id: '4', title: 'Crédito adicionado', date: '7 de ago.', score: '+R$35,00' },
];

export default function BankStatement({ navigation }) {

    const renderNote = ({ item }) => {
        // converte string moeda pra número
        const valor = parseFloat(
            item.score.replace("R$", "").replace(",", ".").replace(" ", "")
        );

        return (
            <CardElement horizontal={true} spaceBetween={true} centerVertical={true}>
                <Section>
                    <Text>{item.title}</Text>
                    <Subtext>{item.date}</Subtext>
                </Section>
                <Section alignRight={true}>
                    <Header style={{ color: valor > 0 ? "green" : "black" }}>
                        {item.score}
                    </Header>
                    <Subtext>{item.subject}</Subtext>
                </Section>
            </CardElement>
        );
    };

    return (
        <SimpleScreen tabScreen={true}>
            <TitleWithBackButton style={{ color: '#000000ff' }} navigation={navigation}>
                Extrato
            </TitleWithBackButton>

            <Card label={'Essa semana'}>
                <FlatList
                    data={weeknote}
                    keyExtractor={(i) => i.id}
                    renderItem={renderNote}
                    ItemSeparatorComponent={Divider}
                />
            </Card>

            <Card label={'Mês passado'}>
                <FlatList
                    data={monthnote}
                    keyExtractor={(i) => i.id}
                    renderItem={renderNote}
                    ItemSeparatorComponent={Divider}
                />
            </Card>
        </SimpleScreen>
    );
}
