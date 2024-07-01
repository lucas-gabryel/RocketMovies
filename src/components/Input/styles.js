import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    color: ${({ theme }) => theme.COLORS.PARAGRAPH};

    border-radius: 10px;
    
    
    > input {
        width: 100%;
        height: 56px;
        
        border: none;
        background: transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 16px;
    }

    > svg {
        margin-left: 16px;
    }
`;