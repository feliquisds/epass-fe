import { TitleWithBackButton, Text } from '../components/Texts';
import { SimpleScreen, Input } from '../components/Interface';
import { ScrollView, ImageBackground, View, Image, StyleSheet, Alert, Pressable } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { Section } from '../components/Alignments';

// Hardcoding colors and styles to bypass the invalid hook call in external dependencies (color.js)
// This ensures the component can render while maintaining the desired aesthetic.

const HARDCODED_COLORS = {
    // Valores de tema 'light' deduzidos do 'color.js' anterior
    subtext: '#75758A', 
    divider: '#DFDFEC',
    inactive: '#ADADB5',
    buttonText: '#FFFFFF',
    accent: ['#FF5B8F', '#FF9A4E'], // Gradient
};

// --- COMPONENTE LOCAL: BigAccentButton ---
// Recriado aqui para evitar a dependência do arquivo buttons.js, que importa o colors() quebrado.
import { LinearGradient } from 'expo-linear-gradient';

const BigAccentButton = ({ children, onPress }) => {
    // Estilo global do bigButton hardcoded para uso local
    const bigButtonStyle = {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 50,
        borderRadius: 30,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    };
    
    return (
        <Pressable onPress={onPress}>
            <LinearGradient style={bigButtonStyle} colors={HARDCODED_COLORS.accent}>
                <Text style={{ color: HARDCODED_COLORS.buttonText, fontWeight: '700' }}>{children}</Text>
            </LinearGradient>
        </Pressable>
    );
};


// --- NOVO COMPONENTE LOCAL: CustomInput ---
// Simula o input com label e o estilo arredondado/borda, usando o componente Input importado.
const CustomInput = ({ label, placeholder, value, editable, style }) => {
    
    const labelStyle = {
        color: HARDCODED_COLORS.subtext,
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 15,
        fontWeight: 'normal',
    };

    const inputColor = editable ? undefined : HARDCODED_COLORS.inactive;

    return (
        <View style={styles.customInputContainer}>
            {label && <Text style={labelStyle}>{label}</Text>}
            <Input
                placeholder={placeholder}
                value={value}
                editable={editable}
                // Aplica o estilo customizado que define a aparência arredondada
                style={[
                    styles.customTextInput, 
                    { 
                        color: inputColor, // Define a cor do texto para campos não editáveis
                        borderColor: HARDCODED_COLORS.divider, // Borda
                    },
                    style
                ]} 
            />
        </View>
    );
};
// --- FIM DOS COMPONENTES LOCAIS ---


const App = ({ navigation }) => {
    const handlePress = () => {
        Alert.alert('', 'Suas informações foram salvas!');
    };

    return (
        <SimpleScreen tabScreen={true} fill={true} style={{ padding: 0 }} containerStyle={{ padding: 0 }}>
            <ImageBackground
                source={require('../assets/telaPerfil_v2.png')}
                style={styles.background}
                resizeMode="cover"
            >
                {/* O contentWrapper aplica o espaçamento lateral e superior */}
                <View style={styles.contentWrapper}>
                    
                    {/* Título com back button */}
            <TitleWithBackButton navigation={navigation}>Editar Informações</TitleWithBackButton>

                    {/* Foto do usuário */}
                    <View style={styles.imgContainer}>
                        <Image
                            source={require('../assets/imagem_ilustrativa_de_pessoa_atraente-27352370.webp')}
                            style={styles.Image}
                        />
                    </View>

                    {/* Card com dados principais */}
                    <Card gap={10}>
                        {/* Usando o CustomInput local */}
                        <CustomInput label="Nome Completo:" placeholder="Alexia Martins Castro" value="Alexia Martins Castro" />
                        <CustomInput label="Email:" placeholder="alexia.martins@gmail.com" value="alexia.martins@gmail.com" />
                    </Card>

                    {/* Título da seção */}
                    <Text style={styles.text}>Informações pessoais</Text>

                    {/* Card com dados secundários */}
                    <Card>
                        {/* Usando o CustomInput local */}
                        <CustomInput 
                            label="CPF:" 
                            placeholder="123.456.789-09" 
                            value="123.456.789-09" 
                            editable={false} 
                        />
                        <CustomInput label="Endereço:" placeholder="Rua A, 123 , Jardim ABC - FV/SP" value="Rua A, 123 , Jardim ABC - FV/SP" />
                        <CustomInput label="Telefone:" placeholder="11 99999-9999" value="11 99999-9999" />
                        <CustomInput label="Filhos(as):" placeholder="Gabriela Martins" value="Gabriela Martins" />
                    </Card>

                    {/* Botão de salvar (agora funcional com o componente local) */}
                    <View style={styles.buttonContainer}>
                        <BigAccentButton onPress={handlePress}>SALVAR</BigAccentButton>
                    </View>
                </View>
            </ImageBackground>
        </SimpleScreen>
    );
};

export default App;

const styles = StyleSheet.create({
    // Estilos que dependem de variáveis globais foram hardcoded ou ajustados.
    
    // Anula o padding de 15px do SimpleScreen e usa flex:1
    background: {
        flex: 1,
        marginHorizontal: -15, 
        marginVertical: -15,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
    },
    
    
    contentWrapper: {
        flex: 1,
        paddingTop: 50, 
        paddingHorizontal: 30, 
    },

    imgContainer: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    Image: {
        height: 138,
        width: 138,
        borderRadius: 69,
        borderWidth: 5,
        borderColor: '#fee971',
    },
    
    
    text: {
        color: HARDCODED_COLORS.subtext,
        fontSize: 14,
        marginTop: 15,
        marginBottom: 5,
        marginLeft: 15, 
    },

    
    buttonContainer: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 100,
        paddingHorizontal: 20, 
    },

    
    customInputContainer: {
        marginVertical: 5,
    },
    
    customTextInput: {
        borderWidth: 1,
        borderRadius: 30, 
        height: 50, 
        paddingLeft: 15, 
        paddingRight: 15,
        fontSize: 16, 
        margin: 10,
    },
});