import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    border-radius: 10px;
    border: none;

    font-weight: 500;
    
    margin-top: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK};

    &:disabled {
        opacity: .5px;
    }
`;