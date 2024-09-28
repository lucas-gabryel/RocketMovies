import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;

    margin-block: 40px;

    h3 {
        font-size: 20px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PARAGRAPH_TWO};

        margin-bottom: 24px;
    }
`;

export const MarkerItem = styled.div`
    display: flex;
    gap: 24px;

    width: 100%;
    height: 88px;

    border-radius: 8px;

    padding: 16px;
    background-color: #0D0C0F;
`;