import { withLayout } from './layout/Layout';
import { Main } from './page-component/Main/Main';
import { Test } from './page-component/Test';
import { Route, Routes} from 'react-router-dom';


const App = (): JSX.Element => {

    return (
        <Routes>
            <Route path='/' element={<h2>Виберіть тему для вивчення!</h2>} />
            <Route path=':id/' element={<h2>Виберіть тему для вивчення!</h2>} />
            <Route
                path=':id/:title'
                element={<h2>Виберіть тему для вивчення!</h2>}
            />
            <Route path=':id/:title/:typeId' element={<Main />} />
			<Route path='test/:select' element={<Test/>} />
        </Routes>
    );
}

export default withLayout(App);
