import styled from "styled-components";

export const Container = styled.div`

`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0 80px;

    > p {
        text-align: justify;
    }
`;

export const Title = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    > h3 {
        font-size: 36px;
        font-weight: 500;
    }

    > div {
        display: flex;
        gap: 4px;

        > svg {
        font-size: 18px;
        color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Data = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;

    > div:first-child {
        display: flex;
        gap: 8px;
        align-items: center;

        img {
            width: 16px;
            height: 16px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    > div:last-child {
        display: flex;
        gap: 8px;
        align-items: center;

        svg {
            width: 16px;
            height: 16px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }
`;

export const Tags = styled.div`
    display: flex;
    gap: 8px;

    margin-block: 40px;
`;