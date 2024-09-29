import { Container, Profile } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input"

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input placeholder="Pesquisar pelo título"/>

            <Profile>
                <div>
                    <Link to="/profile"><h2>Lucas Gabryel</h2></Link>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/lucas-gabryel.png" alt="foto de perfil" />
            </Profile>
        </Container>
    )
}