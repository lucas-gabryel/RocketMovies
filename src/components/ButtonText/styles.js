import styled from "styled-components";

export const Container = styled.button`
    height: 56px;

    display: flex;
    gap: 8px;
    align-items: center;
    

    border: none;
    background: transparent;

    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PINK};

    margin-top: 16px;

    &:disabled {
        opacity: .5px;
    }
`;