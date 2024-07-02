import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 116px;

    display: flex;
    gap: 64px;
    align-items: center;
    justify-content: center;

    padding: 0 80px;
    border-bottom: 1px solid #3E3B47;

    > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    > div {
        text-align: end;

        h2 {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
            white-space: nowrap;
        }

        a {
            text-decoration: none;
            color: ${({ theme }) => theme.COLORS.PARAGRAPH};
        }
    }

    > img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 50%;
    }
`;