import { FC, PropsWithChildren } from "react";
import { styled } from "styled-components"
import { globalColors } from "../../global/styles";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${globalColors.red};
    border-radius: 15px;
    min-width: 220px;
    height: 40px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ErrorBox: FC<PropsWithChildren> = ({children}) => {
    return <Container>
        {children}
    </Container>
};

export default ErrorBox;