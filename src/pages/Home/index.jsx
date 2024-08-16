import { Container, SubHeader, Cards } from "./styles";

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Card } from "../../components/Card"

import { FiPlus } from 'react-icons/fi';

export function Home(){
    return(
        <Container>
            <Header />
            <SubHeader>
                <h3>Meus filmes</h3>
                <Button title="Adicionar filme" icon={FiPlus}/>
            </SubHeader>
            <Cards>
                <Card/>
                <Card/>
                <Card/>
            </Cards>
        </Container>
    )
}