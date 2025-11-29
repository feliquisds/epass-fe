import { StyleSheet } from 'react-native';
import { TitleWithBackButton, Text, Header } from '../components/Texts';
import { GradientScreen, Divider } from '../components/Interface';
import { Section } from '../components/Alignments';
import globalColors from '../styles/Colors';

export default ({ navigation }) => {
    return (
        <GradientScreen scrollPadding gradient={globalColors().ai}>
            <TitleWithBackButton navigation={navigation} style={localStyles.colorOverride}>
                Análise de desempenho
            </TitleWithBackButton>

            <Text style={localStyles.colorOverride}>
                As últimas atividades de seu filho foram analisadas, e foi percebido alta performance em vários tópicos.
            </Text>

            <Divider style={localStyles.customDivider} />

            <Header style={localStyles.colorOverride}>Resumo inteligente</Header>
            <Text style={localStyles.colorOverride}>Seu filho demonstrou um excelente domínio em português e um ótimo conhecimento em história.</Text>
            <Text style={localStyles.colorOverride}>Em relação à matemática, multiplicação foi um pouco mais desafiadora desta vez. Isso é normal e podemos focar nisso para aprimorar os resultados!</Text>

            <Divider style={localStyles.customDivider} />

            <Header style={localStyles.colorOverride}>Análise por disciplina</Header>

            <Section gap={5}>
                <Text accented style={localStyles.colorOverride}>{'Português -> Verbos'}</Text>
                <Text style={localStyles.colorOverride}>Seu filho mostrou que entende muito bem como usar os verbos.</Text>
                <Text accented style={localStyles.colorOverride}>Média das últimas atividades: 9,00</Text>
            </Section>

            <Section gap={5}>
                <Text accented style={localStyles.colorOverride}>{'História -> História do Brasil'}</Text>
                <Text style={localStyles.colorOverride}>O conhecimento sobre a história do nosso país é um ponto forte de seu filho.</Text>
                <Text accented style={localStyles.colorOverride}>Média das últimas atividades: 8,00</Text>
            </Section>

            <Section gap={5}>
                <Text accented style={localStyles.colorOverride}>{'Matemática -> Multiplicação'}</Text>
                <Text style={localStyles.colorOverride}>Houve bastante esforço nesta atividade. A multiplicação pode ser complicada no início, mas é uma habilidade que vamos conquistar juntos.</Text>
                <Text accented style={localStyles.colorOverride}>Média das últimas atividades: 5,00</Text>
            </Section>

            <Divider style={localStyles.customDivider} />

            <Header style={localStyles.colorOverride}>Sugestões inteligentes</Header>
            <Text style={localStyles.colorOverride}>Para aprimorar a confiança em matemática, que tal focarmos na multiplicação de uma forma diferente?</Text>

            <Section gap={5}>
                <Text accented style={localStyles.colorOverride}>Atividade recomendada</Text>
                <Text style={localStyles.colorOverride}>Experimente brincadeiras envolvendo a tabuada de forma divertida.</Text>
            </Section>

            <Section gap={5}>
                <Text accented style={localStyles.colorOverride}>Dica de estudo</Text>
                <Text style={localStyles.colorOverride}>Tente criar pequenas 'histórias de matemática' usando sua criatividade junto com seu filho. Por exemplo: 'Se 3 amigos ganharam 4 figurinhas cada, quantas figurinhas eles têm no total?'</Text>
            </Section>
        </GradientScreen>
    );
}

const localStyles = StyleSheet.create({
    customDivider: {
        borderColor: '#ffffff60',
        marginHorizontal: 0
    },
    colorOverride: {
        color: 'white'
    }
})