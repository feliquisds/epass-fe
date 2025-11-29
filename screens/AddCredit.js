import { TitleWithBackButton, Header, Subtext } from '../components/Texts';
import { RoundInput, SimpleScreen, Input, Divider } from '../components/Interface';
import React, { useState, useEffect } from "react";

import { Image, StyleSheet, Alert, Text } from 'react-native';
import { Card, CardElement } from '../components/Cards';
import { BigAccentButton, SmallSimpleButton, SlimSimpleButton } from '../components/Buttons';

export default ({ navigation }) => {
    const [carteira, setCarteira] = useState({ saldo: 0 });

    useEffect(() => {
        async function fetchData() {
        try {

            const data = await getCarteira(); 
            setCarteira(data);
        } catch (error) {
            // Lidar com o erro
            console.error("Falha ao carregar a carteira", error);
            setCarteira({ saldo: 0 });
        } 
        }

        fetchData();
    }, []);

    const saldoAtual = carteira.valorDisponivel;
    return (
        <SimpleScreen tabScreen={true}>
            <TitleWithBackButton style={{ color: 'fff' }} navigation={navigation}>Adicionar Crédito</TitleWithBackButton>

            <Card>
                <CardElement >
                    <Header style={{ color: '#fff' }}>Quanto quer adicionar?</Header>
                    <Subtext style={{ color: 'gray' }} accented={true}>Crédito disponivel: R${Number(saldoAtual || 0).toFixed(2)}</Subtext>
                    <Input style={{ fontSize: '25' }} label="Email:" placeholder="R$ 0,00"  />
                    <Divider/>
                    
                </CardElement>
            </Card>

            <Card>
                <CardElement >
                    <Header style={{ color: '#fff' }}>Como quer adicionar?</Header>
                </CardElement>
                <CardElement>
                    <SlimSimpleButton>Pix</SlimSimpleButton>
                    <SlimSimpleButton>Crédito</SlimSimpleButton>
                    <SlimSimpleButton>Débito</SlimSimpleButton>
                </CardElement>
            </Card>

            <Card>
                <CardElement >
                    <Header style={{ color: '#fff' }}>Informações do cartão</Header>
                </CardElement>
                <CardElement>
                    <Input style={localStyle.Input} label=":" placeholder="Nome do cartão"  />
                    <Input style={localStyle.Input} label=":" placeholder="Número"  />
                    <Input style={localStyle.Input} label=":" placeholder="Validade"  />
                    <Input style={localStyle.Input} label=":" placeholder="CVC"  />

                </CardElement>
            </Card>
        </SimpleScreen>
    );
};

const localStyle = StyleSheet.create({

    pfp: {
        height: 70,
        width: 70,
        resizeMode: 'contain'
    },
    Input: {
          
        borderBottomColor: '#DFDFEC',
        borderBottomWidth: 1,
        marginVertical: 10
  
    }
});