import { Container, SubHeader, Cards } from "./styles";

import { Link } from "react-router-dom";

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
                <Link to="/createmovie"><Button title="Adicionar filme" icon={FiPlus}/></Link>
            </SubHeader>
            <Cards>
                <Link to="/moviepreview/1"><Card/></Link>
                <Link to="/moviepreview/1"><Card/></Link>
                <Link to="/moviepreview/1"><Card/></Link>
            </Cards>
        </Container>
    )
}