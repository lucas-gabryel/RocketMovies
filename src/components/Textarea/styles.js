import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    color: ${({ theme }) => theme.COLORS.PARAGRAPH};

    border: none;
    resize: none; //não deixa o usuário mexer no tamanho do textarea

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;
`;