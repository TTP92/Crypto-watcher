import { Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { OverviewPage } from './pages/overview';

const App: React.FC = () => {
    return (
        <>
            <Header />
            <div style={{ paddingRight: '32px', paddingLeft: '32px' }}>
                <Routes>
                    <Route path="/" element={<OverviewPage />} />
                    <Route path="/about" element={<>ABOUT</>} />
                </Routes>
            </div>
        </>
    );
};
export default App;
