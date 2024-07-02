import { Container, Form, Background } from "./styles";

import { FiLock, FiMail } from "react-icons/fi";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignIn(){
    return(
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input icon={FiMail} placeholder="E-mail"/>
            <Input icon={FiLock} placeholder="Senha"/>

            <Button title="Entrar"/>

            <a href="/">Criar conta</a>
            </Form>
            <Background />
        </Container>
    )
}