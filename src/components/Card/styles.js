import styled from "styled-components";

export const Container = styled.div`
margin-top: 24px;
margin-inline: 80px;
padding: 32px;
border-radius: 16px;
background-color: #312E38;

>h4 {
    font-size: 24px;
    font-weight: 700;
    color: #F4EDE8               ;
}

>p {
    text-align: justify;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_TWO};
}
`;

export const Assessments = styled.div`
margin-top: 8px;
> div > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
}
`;
 
export const Tags = styled.div`
display: flex;
margin-top: 16px;
`;
