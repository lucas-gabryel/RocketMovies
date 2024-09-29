import styled from "styled-components";

export const Container = styled.div`
    > header {
        display: flex;
        align-items: center;

        width: 100%;
        height: 144px;

        padding: 64px 144px;

        background-color: rgba(255, 133, 155, .05);
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 360px;

    margin: auto;
`;

export const Avatar = styled.div`
    position: relative;
    margin: -92px auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};


        }
    }
`;