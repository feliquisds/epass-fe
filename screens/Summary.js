import { Image, StyleSheet } from 'react-native';
import { SlimSimpleButton, SmallAccentButton } from "../components/Buttons";
import { Card, CardElement, GradientCard } from "../components/Cards";
import { Section } from '../components/Alignments';
import { Header, Subtext, Text, Title } from '../components/Texts';
import { Divider, SimpleScreen } from '../components/Interface';

export default ({ navigation }) => {
    return (
        <SimpleScreen tabScreen={true}>

            <Title>Resumo</Title>

            <GradientCard gap={15}>
                <CardElement gap={15}>
                    <Section horizontal={true} gap={10}>
                        <Image style={localStyle.pfp} source={require('../assets/pfp.png')} />
                        <Header centerVertical={true} style={{ color: '#FFF' }}>Hoje tem aula!</Header>
                    </Section>

                    <SlimSimpleButton>Liberar aluno</SlimSimpleButton>
                </CardElement>
            </GradientCard>


            <Card label={'Eventos'}>
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

            </Card>

            <Card label={'Crédito da pulseira'}>
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
            </Card>

        </SimpleScreen>
    );
}

const localStyle = StyleSheet.create({
    pfp: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    }
})