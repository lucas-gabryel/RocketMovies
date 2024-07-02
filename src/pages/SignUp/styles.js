import styled from "styled-components";

import saladecinema from "../../assets/saladecinema.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 136px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        color: ${({ theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.PARAGRAPH};
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};

        margin-block: 48px;
    }

    > a {
        font-size: 16px;
        font-weight: 400;
        color: ${({ theme}) => theme.COLORS.PINK};

        margin-top: 42px;

        display: flex;
        gap: 8px;
        justify-content: center;
        align-items: center;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${saladecinema}) no-repeat center center;
    background-size: cover;
`;