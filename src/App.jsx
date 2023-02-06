import '@code-hike/mdx/dist/index.css';
import { withLayout } from './layout/Layout';
import { Main } from './page-component/Main/Main';
import { Route, Routes} from 'react-router-dom';

function App() {

    return (
        <Routes>
            <Route path='/' element={<h2>Виберіть тему для вивчення!</h2>} />
            <Route path=':id/' element={<h2>Виберіть тему для вивчення!</h2>} />
            <Route
                path=':id/:title'
                element={<h2>Виберіть тему для вивчення!</h2>}
            />
            <Route path=':id/:title/:typeId' element={<Main />} />
        </Routes>
    );
}

export default withLayout(App);
