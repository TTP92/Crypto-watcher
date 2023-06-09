import { styled } from 'styled-components';
import NavBar from '../nav-bar';
import { globalColors } from '../../global/styles';

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
