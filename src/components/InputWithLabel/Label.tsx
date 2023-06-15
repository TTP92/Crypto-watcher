import { FC } from "react";
import { styled } from "styled-components";


const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    max-width: 230px;
    margin-top: 24px;
`;

interface Props {
    text: string
    children: React.ReactNode
}


export const Label: FC<Props> = ({text, children}) => {
    return <StyledLabel>
        {text}
        {children}
    </StyledLabel>
}