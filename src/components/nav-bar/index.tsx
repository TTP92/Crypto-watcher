import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { globalColors } from '../../global/styles';

const PADDING = 15;

const StyledNavLink = styled(NavLink)`
    padding: ${PADDING}px;
    color: ${globalColors.white};
    text-decoration: none;
    font-size: 20px;
    &:hover {
        background-color: ${globalColors.blue};
        padding: ${PADDING}px;
        border-radius: 5px;
    }
    &.active {
        color: ${globalColors.white};
        text-decoration: underline;
    }
`;
const StyledUl = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: end;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 16px;
    padding-bottom: 16px;
`;
const StyledLi = styled.li`
    margin-right: 35px;
    display: flex;
    align-items: center;
`;

const NavBar: React.FC = () => {
    return (
        <nav>
            <StyledUl>
                <StyledLi>
                    <StyledNavLink to="/">Overview</StyledNavLink>
                </StyledLi>
                <StyledLi>
                    <StyledNavLink to="/about">About</StyledNavLink>
                </StyledLi>
            </StyledUl>
        </nav>
    );
};

export default NavBar;
