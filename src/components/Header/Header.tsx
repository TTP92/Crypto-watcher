import { styled } from 'styled-components';
import { globalColors } from '../../global/styles';
import { NavBar } from '../NavBar';

const HeaderContainer = styled.div`
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    align-items: center;
    background-color: ${globalColors.blue2};
`;

export const Header = () => {
    return (
        <HeaderContainer>
            <NavBar />
        </HeaderContainer>
    );
};
