import { Container } from "./styles";

import { FiMail } from "react-icons/fi";

import { Input } from "../../components/Input"

export function SignIn(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input icon={FiMail} placeholder="nome"/>

        </Container>
    )
}