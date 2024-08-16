import { Container, Assessments, Tags } from "./styles";

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

import { Tag } from "../Tag"

export function Card(){
    return(
        <Container>
            <h4>Interestellar</h4>

            <Assessments>
                <div>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                </div>
            </Assessments>

            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de...</p>

            <Tags>
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
            </Tags>
        </Container>
    )
}