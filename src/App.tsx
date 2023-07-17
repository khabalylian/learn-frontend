import { withLayout } from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { TestingComponent } from './components/index.jsx';
import {
    ExercisesPage,
    Handbook,
    QuickQuestionsPage,
    LiteraturePage,
    Test,
    Main
} from './page-component/index';

const App = (): JSX.Element => {

    return (
		<div className='app'>
			<Routes>
				<Route path='/' />
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
				<Route
					path='quickQuestions'
					element={<QuickQuestionsPage />}
				/>
				<Route path='handbook' element={<Handbook />} />
				<Route path='exp' element={<ExercisesPage />} />
			</Routes>
		</div>
    );
};

export default withLayout(App);
