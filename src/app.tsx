import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { styled } from 'styled-components';
import { Overview } from './pages/Overview';
import { useSelector } from 'react-redux'
import { Login } from './pages/Login';

const RouteWrapper = styled.div`
    padding-right: 32px;
    padding-left: 32px;
`;

const App: React.FC = () => {
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

    return (
        !isLoggedIn
        ? <Login/>
        : <>
            <Header />
            <RouteWrapper>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/about" element={<>ABOUT</>} />
                </Routes>
            </RouteWrapper>
        </>
    );
};
export default App;
