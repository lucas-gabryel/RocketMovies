import { Container, Profile } from "./styles";

import { Input } from "../../components/Input"

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <h2>Lucas Gabryel</h2>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/lucas-gabryel.png" alt="foto de perfil" />
            </Profile>
        </Container>
    )
}