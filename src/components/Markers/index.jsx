import { Container, MarkerItem } from "./styles"

export function Markers({ children }){
    return(
        <Container>
             <h3>Marcadores</h3>
             <MarkerItem>
                {children}
             </MarkerItem>
        </Container>
    )
}