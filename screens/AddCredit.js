import { TitleWithBackButton, Header, Subtext } from '../components/Texts';
import { SimpleScreen, Input, Divider } from '../components/Interface';
import { useState, useEffect } from 'react';
import { Card, CardElement } from '../components/Cards';
import { BigAccentButton, SlimAccentButton } from '../components/Buttons';
import { Section } from '../components/Alignments';

export default ({ navigation }) => {
    const [getCarteira, setCarteira] = useState({ saldo: 0 });

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const data = await getCarteira();
    //             setCarteira(data);
    //         } catch (error) {
    //             console.error('Falha ao carregar a carteira', error);
    //             setCarteira({ saldo: 0 });
    //         }
    //     }

    //     fetchData();
    // }, []);

    return (
        <SimpleScreen scrollPadding>
            <TitleWithBackButton navigation={navigation}>
                Adicionar Crédito
            </TitleWithBackButton>

            <Card>
                <CardElement gap={15}>
                    <Section>
                        <Header>Quanto quer adicionar?</Header>
                        <Subtext>Crédito disponivel: R${Number(getCarteira.saldo || 0).toFixed(2)}</Subtext>
                    </Section>
                    <Section horizontal gap={10} centerVertical>
                        <Header>R$</Header>
                        <Input style={{ fontSize: 24 }} placeholder={'0.00'} />
                    </Section>
                </CardElement>
                <Divider />
                <CardElement>
                    <Subtext>Mínimo para adicionar: R$ 5,00</Subtext>
                </CardElement>
            </Card>

            <Card>
                <CardElement>
                    <Header>Como quer adicionar?</Header>
                </CardElement>
                <CardElement gap={5}>
                    <SlimAccentButton>Pix</SlimAccentButton>
                    <SlimAccentButton>Crédito</SlimAccentButton>
                    <SlimAccentButton>Débito</SlimAccentButton>
                </CardElement>
            </Card>

            <Card>
                <CardElement>
                    <Header>Informações do cartão</Header>
                </CardElement>
                <CardElement>
                    <Input placeholder='Nome no cartão' />
                </CardElement>
                <Divider />
                <CardElement>
                    <Input placeholder='Número' />
                </CardElement>
                <Divider />
                <CardElement>
                    <Input placeholder='Validade' />
                </CardElement>
                <Divider />
                <CardElement>
                    <Input placeholder='CVC' />
                </CardElement>
                <Divider />
                <CardElement />
            </Card>

            <BigAccentButton>Confirmar</BigAccentButton>
        </SimpleScreen>
    );
};