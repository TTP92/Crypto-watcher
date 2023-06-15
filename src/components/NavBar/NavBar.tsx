import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { globalColors } from '../../global/styles';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer/loginSlice';
import { useMemo } from 'react';

const PADDING = 15;

const StyledNavLink = styled(NavLink)<{appendActive?: boolean}>`
    padding: ${PADDING}px;
    color: ${globalColors.white};
    text-decoration: none;
    font-size: 20px;
    &:hover {
        background-color: ${globalColors.blue};
        padding: ${PADDING}px;
        border-radius: 5px;
    }
    ${props =>
        props.appendActive &&
        css`
            &.active {
                color: ${globalColors.white};
                text-decoration: underline;
            }
        `
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
const Nav = styled.nav``;

const Navigations = [
    {route: '/', label: 'Overview', type: 'navLink'},
    {route: '/about', label: 'About', type: 'navLink'},
    {route: '/', label: 'Sign out', type: 'signOut'},
]

export const NavBar: React.FC = () => {
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(login('NOT_SUCCESS'));
    };

    return (
        <Nav>
            <StyledUl>
                {Navigations.map((nav) => {
                    const isSignOut = useMemo(() => nav.type === 'signOut',[]);
                    return <StyledLi key={nav.label}>
                            <StyledNavLink 
                                to={nav.route}
                                appendActive={isSignOut ? false: true}
                                onClick={isSignOut ? signOut : () => {}}
                            >
                                {nav.label}
                            </StyledNavLink>
                        </StyledLi>
                    }
                )}
            </StyledUl>
        </Nav>
    );
};