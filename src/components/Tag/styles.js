import styled from "styled-components";

export const Container = styled.div`
    width: max-content;
    font-size: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.PARAGRAPH};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`;