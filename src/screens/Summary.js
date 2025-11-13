import { Text, View, Pressable, ScrollView, Image } from 'react-native';
import { GradientText } from 'universal-gradient-text'
import { SlimSimpleButton } from "../components/Buttons";
import { GradientCard } from "../components/Cards";
import styles from "../styles/Styles";

export default function Summary({ navigation }) {
    return (
        <ScrollView style={styles().screen} contentContainerStyle={[styles().scrollPadding, styles().gap15]}>

            <Text style={[styles().title, styles().textHorizontalMargins]}>Resumo</Text>

            <GradientCard gradient={styles().colors.accent} style={styles().gap15}>

                    <View style={[styles().centerVertical, styles().horizontal, styles().gap15]}>
                        <Image style={styles().pfp} source={require('../../assets/pfp.png')} />
                        <Text style={[styles().header, { color: '#FFF' }]}>Hoje tem aula!</Text>
                    </View>

                    <SlimSimpleButton>Liberar aluno</SlimSimpleButton>

            </GradientCard>

            <View style={styles().gap5}>
                <Text style={[styles().subtext, styles().textHorizontalMargins]}>Eventos</Text>
                <View style={styles().card}>
                    <View style={[styles().card_element, styles().horizontal, styles().space_between, styles().centerVertical]}>
                        <Text style={styles().text}>Excursão</Text>
                        <View>
                            <Text style={[styles().accentText, styles().alignRight]}>Em 3 dias</Text>
                            <Text style={[styles().subtext, styles().alignRight]}>Escola</Text>
                        </View>
                    </View>
                    <View style={styles().divider} />
                    <View style={[styles().card_element, styles().horizontal, styles().space_between, styles().centerVertical]}>
                        <Text style={styles().text}>Reunião de pais</Text>
                        <View>
                            <Text style={[styles().accentText, styles().alignRight]}>Em 5 dias</Text>
                            <Text style={[styles().subtext, styles().alignRight]}>Escola</Text>
                        </View>
                    </View>
                    <View style={styles().divider} />
                    <View style={[styles().card_element, styles().horizontal, styles().space_between, styles().centerVertical]}>
                        <Text style={styles().text}>Prova</Text>
                        <View>
                            <Text style={[styles().accentText, styles().alignRight]}>Em 7 dias</Text>
                            <Text style={[styles().subtext, styles().alignRight]}>Matemática</Text>
                        </View>
                    </View>
                    <View style={styles().divider} />
                    <Pressable style={styles().card_element}>
                        <GradientText style={styles().smallButton} colors={['#FF5B8F', '#FF9A4E']}>Verificar agenda completa</GradientText>
                    </Pressable>
                </View>
            </View>

            <View style={styles().gap5}>
                <Text style={[styles().subtext, styles().textHorizontalMargins]}>Crédito da pulseira</Text>
                <View style={styles().card}>

                    <View style={styles().card_element}>
                        <Text style={styles().text}>Crédito disponível</Text>
                        <Text style={styles().accentText}>R$ 30,00</Text>
                    </View>

                    <View style={styles().divider} />

                    <Pressable style={styles().card_element}>
                        <GradientText style={styles().smallButton} colors={['#FF5B8F', '#FF9A4E']}>Visualizar extrato</GradientText>
                    </Pressable>

                    <View style={styles().divider} />

                    <Pressable style={styles().card_element}>
                        <GradientText style={styles().smallButton} colors={['#FF5B8F', '#FF9A4E']}>Adicionar crédito</GradientText>
                    </Pressable>
                </View>
            </View>

        </ScrollView>
    );
}