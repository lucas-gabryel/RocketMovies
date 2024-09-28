import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;

    width: max-content;
    height: 56px;

    border-radius: 10px;
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_SECONDARY} /* #262529 */;
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.PARAGRAPH : theme.COLORS.WHITE};
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.PARAGRAPH}` : "none"};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE };
        background-color: transparent;

        border: none;
    }
`;