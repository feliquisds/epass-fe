import { FlatList } from 'react-native';
import { Divider, SimpleScreen } from '../components/Interface';
import { Header, Text, Subtext } from '../components/Texts';
import { Card, CardElement } from '../components/Cards';
import { TitleWithBackButton } from '../components/Texts';
import { Section } from '../components/Alignments';

const DATA = [
    {
        id: 1, title: "Essa semana", data: [
            { id: '1', title: 'Pão de batata', date: '10 de set.', value: 3.5, change: 'NEG' },
            { id: '2', title: 'Pão de batata', date: '9 de set.', value: 3.5, change: 'NEG' },
            { id: '3', title: 'Croissaint', date: '8 de set.', value: 5, change: 'NEG' }
        ]
    },
    {
        id: 2, title: "Mês passado", data: [
            { id: '1', title: 'Pão de batata', date: '10 de ago.', value: 3.5, change: 'NEG' },
            { id: '2', title: 'Pão de batata', date: '9 de ago.', value: 3.5, change: 'NEG' },
            { id: '3', title: 'Croissaint', date: '8 de ago.', value: 5, change: 'NEG' },
            { id: '4', title: 'Crédito adicionado', date: '7 de ago.', value: 35, change: 'POS' }
        ]
    }
]

export default ({ navigation }) => {
    const renderNote = ({ item }) => {
        return (
            <CardElement horizontal spaceBetween centerVertical>
                <Section>
                    <Text>{item.title}</Text>
                    <Subtext>{item.date}</Subtext>
                </Section>
                <Section alignRight>
                    {
                        item.change == "POS" &&
                        <Header style={{ color: "green" }}>
                            R$ {Number(item.value).toFixed(2)}
                        </Header>
                    }
                    {
                        item.change == "NEG" &&
                        <Header>
                            -R$ {Number(item.value).toFixed(2)}
                        </Header>
                    }
                    <Subtext>{item.subject}</Subtext>
                </Section>
            </CardElement>
        );
    };

    const renderSection = ({ item }) => {
        return (
            <Card label={item.title}>
                <FlatList
                    data={item.data}
                    keyExtractor={(i) => i.id}
                    renderItem={renderNote}
                    ItemSeparatorComponent={<Divider />}
                />
            </Card>
        )
    }

    return (
        <SimpleScreen>
            <TitleWithBackButton navigation={navigation}>
                Extrato
            </TitleWithBackButton>

            <FlatList
                data={DATA}
                keyExtractor={(i) => i.id}
                renderItem={renderSection}
                contentContainerStyle={{ gap: 15 }}
            />
        </SimpleScreen>
    );
}
