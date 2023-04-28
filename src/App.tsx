import { withLayout } from './layout/Layout';
import { Main } from './page-component/Main/Main';
import { Test } from './page-component/TestPage/Test';
import { LiteraturePage } from './page-component/LiteraturePage/LiteraturePage';
import { QuickQuestionsPage } from './page-component/QuickQuestionsPage/QuickQuestionsPage';
import { Handbook } from './page-component/Handbook/Handbook';
import { Route, Routes } from 'react-router-dom';
import { TestingComponent } from './components/index.jsx';

const App = (): JSX.Element => {

    return (
        <div className='app'>
            <Routes>
                <Route
                    path='/'
                    element={<h2>Виберіть тему для вивчення!</h2>}
                />
                <Route path=':id'>
                    <Route
                        index
                        element={<h2>Виберіть тему для вивчення!</h2>}
                    />
                    <Route path=':title'>
                        <Route
                            index
                            element={<h2>Виберіть тему для вивчення!</h2>}
                        />
                        <Route path=':typeId' element={<Main />} />
                    </Route>
                </Route>
                <Route path='/test'>
                    <Route index element={<Test />} />
                    <Route path=':select' element={<TestingComponent />} />
                </Route>
                <Route path='literature' element={<LiteraturePage />} />
                <Route path='quickQuestions' element={<QuickQuestionsPage />} />
                <Route path='handbook' element={<Handbook />} />
            </Routes>
        </div>
    );
};

export default withLayout(App);
