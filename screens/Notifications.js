import { FlatList } from "react-native";
import { Section } from "../components/Alignments";
import { Card, GradientCard, CardElement } from "../components/Cards";
import { Text, Subtext, Title } from "../components/Texts";
import { MaterialIcons, Entypo, Octicons } from "@expo/vector-icons";
import { SimpleScreen } from "../components/Interface";
import colors from "../styles/Colors";

const DATA = [
    {
        id: "1",
        title: "Atividades extraclasse",
        subtitle: "Vivências culturais",
        author: "Professora Gisele",
        type: "info",
    },
    {
        id: "2",
        title: "Regularização dos uniformes",
        subtitle: "",
        author: "Administração acadêmica",
        type: "warning",
    },
    {
        id: "3",
        title: "Ciclos de atividades não entregues",
        subtitle: "Matemática",
        author: "Professora Márcia",
        type: "info",
    },
    {
        id: "4",
        title: "Conversas paralelas",
        subtitle: "Geografia",
        author: "Professora Suelen",
        type: "danger",
    },
];

function Badge({ type }) {
    return (
            <Section
                centerVertical
                style={{
                    width: 54,
                    height: 54,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {
                    type === "info" ? <MaterialIcons name="info-outline" size={48} color="#5B5B5B" />
                    : type === "warning" ? <Octicons name="megaphone" size={40} color="#6a3e00" />
                    : type === "danger" ? <Entypo name="warning" size={48} color="#710000ff" />
                    : null
                }
            </Section>
        );
}

function AvisoCard({ item }) {
    const gradient =
        item.type === "warning"
            ? [colors().foreground, "#FFB300"]
            : item.type === "danger"
                ? [colors().foreground, "#E53935"]
                : null;

    const Wrapper = gradient ? GradientCard : Card;

    return (
        <Wrapper gradient={gradient} start={{ x: 0.6, y: 1 }} end={{ x: 1, y: 0.5 }}>
            <CardElement>
                <Section horizontal centerVertical spaceBetween>

                    <Section style={{ flex: 1 }} gap={5}>
                        <Text accented={true}>{item.title}</Text>

                        <Section>
                            {item.subtitle && <Subtext style={{ color: colors().text }}>{item.subtitle}</Subtext>}
                            <Subtext>{item.author}</Subtext>
                        </Section>

                    </Section>

                    <Badge type={item.type} />

                </Section>
            </CardElement>
        </Wrapper>
    );
}

export default () => {
    return (
        <SimpleScreen tabScreen={true}>
            <Section gap={15}>
                <Title>Avisos</Title>

                <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <AvisoCard item={item} />}
                    contentContainerStyle={{ gap: 15, height: '100%' }}
                />
            </Section>
        </SimpleScreen>
    );
}