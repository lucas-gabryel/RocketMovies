import { Container } from "./styles";

export function Button({title, icon: Icon, secondary}) {
    return(
        <Container type="button" secondary={secondary}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}