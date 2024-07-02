import { Container, Form, Background } from "./styles";

import { FiArrowLeft, FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input"
import { Button } from "../../components/Button";

export function SignUp(){
    return(
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>

            <Input icon={FiUser} placeholder="Nome"/>
            <Input icon={FiMail} placeholder="E-mail"/>
            <Input icon={FiLock} placeholder="Senha"/>

            <Button title="Cadastrar"/>

            <a href="/">
                <FiArrowLeft/>
                <p>Voltar para fazer login</p>
            </a>
            </Form>
            <Background />
        </Container>
    )
}