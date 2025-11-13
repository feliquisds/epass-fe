import { Image, StyleSheet } from 'react-native';
import { SlimSimpleButton, SmallAccentButton } from "../components/Buttons";
import { CardElement, GradientCard, SubtitleCard } from "../components/Cards";
import { Section } from '../components/Alignments';
import { Header, Subtext, Text } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';
import styles from "../styles/Styles";

export default function Summary({ navigation }) {
    return (
        <SimpleScreen scrollPadding={true}>

            <Text style={[styles().title, styles().textHorizontalMargins]}>Resumo</Text>

            <GradientCard gradient={styles().colors.accent} style={styles().gap15}>
                <CardElement gap={15}>
                    <Section horizontal={true} gap={10}>
                        <Image style={styles().pfp} source={require('../../assets/pfp.png')} />
                        <Header centerVertical={true}>Hoje tem aula!</Header>
                    </Section>

                    <SlimSimpleButton>Liberar aluno</SlimSimpleButton>
                </CardElement>
            </GradientCard>


            <SubtitleCard subtitle={'Eventos'}>
                <CardElement>
                    <Section horizontal={true} spaceBetween={true} centerVertical={true}>
                        <Text>Excursão</Text>
                        <Section alignRight={true}>
                            <Text accented={true}>Em 3 dias</Text>
                            <Subtext>Escola</Subtext>
                        </Section>
                    </Section>
                </CardElement>

                <Divider />

                <CardElement>
                    <Section horizontal={true} spaceBetween={true} centerVertical={true}>
                        <Text>Reunião de pais</Text>
                        <Section alignRight={true}>
                            <Text accented={true}>Em 5 dias</Text>
                            <Subtext>Escola</Subtext>
                        </Section>
                    </Section>
                </CardElement>

                <Divider />

                <CardElement>
                    <Section horizontal={true} spaceBetween={true} centerVertical={true}>
                        <Text>Prova</Text>
                        <Section alignRight={true}>
                            <Text accented={true}>Em 7 dias</Text>
                            <Subtext>Matemática</Subtext>
                        </Section>
                    </Section>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Verificar agenda completa</SmallAccentButton>
                </CardElement>

            </SubtitleCard>

            <SubtitleCard subtitle={'Crédito da pulseira'}>
                <CardElement>
                    <Text>Crédito disponível</Text>
                    <Text accented={true}>R$ 30,00</Text>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Visualizar extrato</SmallAccentButton>
                </CardElement>

                <Divider />

                <CardElement>
                    <SmallAccentButton>Adicionar crédito</SmallAccentButton>
                </CardElement>
            </SubtitleCard>

        </SimpleScreen>
    );
}

const summaryStyle = StyleSheet.create({
    pfp: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    }
})