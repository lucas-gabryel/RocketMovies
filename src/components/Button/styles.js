import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    
    border-radius: 10px;
    border: none;

    font-weight: 500;
    
    margin-top: 16px;
    padding: 32px;
    /* background-color: ${(props) => props.color || props.theme.COLORS.PINK}; */

    &:disabled {
        opacity: .5px;
    }

    ${(props) => props.secondary ? `
    background-color: #0D0C0F;
    color: ${props.theme.COLORS.PINK};
    ` : `
    background-color: ${props.theme.COLORS.PINK};
    color: #312E38;
    `};
`;