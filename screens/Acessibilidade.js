import { View } from "react-native";
import { TitleWithBackButton, Text, Subtext } from "../components/Texts";
import { Section } from "../components/Alignments";
import { GradientCard } from "../components/Cards";
import { SimpleScreen, Divider } from "../components/Screens";
import colors from "../styles/Colors";
import { MaterialIcons } from "@expo/vector-icons";

export default function Acessibilidade({ navigation }) {

    return (
        <SimpleScreen containerStyle={{ paddingTop: 20 }}>

        
            <Section
                style={{
                    backgroundColor: colors().foreground,
                    padding: 20,
                    borderRadius: 35,
                }}
                gap={15}
            >
                <TitleWithBackButton navigation={navigation}>
                    Acessibilidade
                </TitleWithBackButton>

                
                <Section centerVertical style={{ alignItems: "center", marginTop: 10 }}>
                    <GradientCard
                        gradient={colors().accent}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 60,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <MaterialIcons
                            name="accessibility-new"
                            size={60}
                            color="white"
                        />
                    </GradientCard>
                </Section>
            </Section>

          
            <GradientCard
                gradient={colors().accent}
                style={{
                    marginTop: -40,
                    paddingVertical: 40,
                    paddingHorizontal: 25,
                    borderRadius: 40,
                }}
                gap={20}
            >

      
                <Section centerVertical style={{ alignItems: "center" }}>
                    <Text style={{ fontWeight: "600", color: "white" }}>
                        Tamanho da Fonte
                    </Text>
                </Section>

    
                <Section horizontal centerVertical spaceBetween style={{ paddingHorizontal: 10 }}>
                    <MaterialIcons name="text-fields" size={22} color="white" />
                    <View style={{ flex: 1, height: 2, backgroundColor: "#ffffff80", marginHorizontal: 10 }} />
                    <MaterialIcons name="text-fields" size={28} color="white" />
                </Section>

                <Divider style={{ backgroundColor: "#ffffff60", marginVertical: 10 }} />

            
                <Section horizontal spaceBetween centerVertical>
                    <Text style={{ color: "white" }}>Leitor de Tela</Text>

                    <View style={{
                        width: 50,
                        height: 28,
                        backgroundColor: "#ffffff60",
                        borderRadius: 20
                    }} />
                </Section>

                <Divider style={{ backgroundColor: "#ffffff60", marginVertical: 10 }} />

           
                <Section horizontal spaceBetween centerVertical>
                    <Text style={{ color: "white" }}>Contraste</Text>

                    <View style={{
                        width: 50,
                        height: 28,
                        backgroundColor: "#ffffff60",
                        borderRadius: 20
                    }} />
                </Section>

            </GradientCard>

        </SimpleScreen>
    );
}
