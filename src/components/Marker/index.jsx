import { FiPlus, FiX } from "react-icons/fi"
import { Container } from "./styles"

export function Marker({ isNew, value, onClick, ...rest }){
    return(
        <Container isNew={isNew}>
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                placeholder="Novo marcador"
                {...rest}
            />

            <button 
            type="button"
            onClick={onClick}>
                { isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}