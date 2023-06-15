import { FC, useMemo } from "react";
import { styled } from "styled-components";

const Label = styled.label<{size: string, weight: string}>`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
`;

type TitleType = 'H1' | 'H2' | 'H3';

interface Props {
    titleType: TitleType;
    children: React.ReactNode;
}

export const Title: FC<Props> = ({titleType, children}) => {
    const font = useMemo(()=> {
        if (titleType === 'H1') return {size: 22, weight: 700};
        else if (titleType === 'H2') return {size: 18, weight: 600};
        else return {size: 14, weight: 500};
    },[titleType])

    return (
        <Label 
            size={`${font.size}px`}
            weight={`${font.weight}`}
        >
            {children}
        </Label>
    );
};