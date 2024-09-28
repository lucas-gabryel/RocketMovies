import { Container, Main, Form, Send } from "./styles"

import { FiArrowLeft } from "react-icons/fi"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Markers } from "../../components/Markers"
import { Marker } from "../../components/Marker"

export function CreateMovie(){
    return(
        <Container>
            <Header />
            <Main>
                <ButtonText title="voltar" icon={FiArrowLeft}/>
                <h2>Novo filme</h2>
                <Form>
                    <div>
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <Textarea placeholder="Observações"/>
                </Form>
                <Markers>
                    <Marker value="React"/>
                    <Marker isNew/>
                </Markers>
                <Send>
                    <Button title="Excluir filme" secondary={true}/>
                    <Button title="Salvar alterações" color="#0D0C0F" />
                </Send>
            </Main>
        </Container> 
    )
}