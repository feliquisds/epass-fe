import React from "react";
import { FlatList, Pressable } from "react-native";
import { Section } from "../components/Alignments";
import { Card, GradientCard } from "../components/Cards";
import { Text, Subtext } from "../components/Texts";
import colors from "../styles/Colors";
import { MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

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
    subtitle: "Administração acadêmica",
    author: "",
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

function BadgeRight({ type }) {
  if (type === "info") {
    return (
      <Section
        centerVertical
        style={{
          width: 54,
          height: 100,
          borderRadius: 14,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialIcons name="info-outline" size={22} color="#5B5B5B" />
      </Section>
    );
  }

  if (type === "warning") {
    return (
      <Section
        centerVertical
        style={{
          width: 54,
          height: 100,
          borderRadius: 14,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="megaphone" size={22} color="#6a3e00" />
      </Section>
    );
  }

  if (type === "danger") {
    return (
      <Section
        centerVertical
        style={{
          width: 54,
          height: 100,
          borderRadius: 14,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Entypo name="warning" size={22} color="#fff" />
      </Section>
    );
  }

  return null;
}

function AvisoCard({ item }) {
  const gradient =
    item.type === "warning"
      ? ["#FFF8E1", "#FFD54F", "#FFB300"]
      : item.type === "danger"
      ? ["#FFEBEE", "#FF8A80", "#E53935"]
      : null;

  const Wrapper = gradient ? GradientCard : Card;

  return (
    <Pressable style={{ marginBottom: 12 }}>
      <Wrapper gap={10} gradient={gradient}>
        <Section horizontal centerVertical spaceBetween>
          <Section style={{ flex: 1 }}>
            <Text accented={false} style={{ fontWeight: "700", fontSize: 16 }}>
              {item.title}
            </Text>

            <Subtext style={{ fontSize: 14 }}>{item.subtitle}</Subtext>

            {item.author ? (
              <Subtext style={{ fontSize: 12, color: colors().subtext }}>
                {item.author}
              </Subtext>
            ) : null}
          </Section>

          <Section>
            <BadgeRight type={item.type} />
          </Section>
        </Section>
      </Wrapper>
    </Pressable>
  );
}

export default function Notifications() {
  return (
    <Section gap={15} style={{ paddingHorizontal: 18, paddingTop: 20 }}>
      <Text accented style={{ fontSize: 28, fontWeight: "700" }}>
        Avisos
      </Text>

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AvisoCard item={item} />}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </Section>
  );
}
