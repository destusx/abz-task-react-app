import { useEffect } from 'react';
import FormBlock from './components/FormBlock/FormBlock';
import Header from './components/Header/Header';
import Promotion from './components/Promotion/Promotion';
import UserList from './components/User/UserList/UserList';
import './scss/app.scss';
import { useUserStore } from './store/useUserStore';

function App() {
    const getToken = useUserStore(state => state.getToken);

    useEffect(() => {
        getToken();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <Header />
            <Promotion />
            <UserList />
            <FormBlock />
        </main>
    );
}

export default App;
