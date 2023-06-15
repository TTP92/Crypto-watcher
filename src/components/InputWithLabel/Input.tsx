import { FC } from "react";
import { styled } from "styled-components";
import { Label } from "./Label";

const StyledInput = styled.input`
    margin-top: 5px;
`;

interface Props {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
}

export const Input: FC<Props> = ({onChange, label}) => {
    return <Label text={label ?? ''}>
        <StyledInput onChange={onChange}/>
    </Label> 
}
