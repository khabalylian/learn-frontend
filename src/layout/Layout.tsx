import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import React, { FunctionComponent, PropsWithChildren} from 'react';
import { AppContextProvider } from '../context/app.context';
import { IAppContext } from '../context/app.context';

const Layout = ({children}: PropsWithChildren): JSX.Element => {
	return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar} />
            <div className={styles.main}>
				{children}
			</div>
        </div>
    );
};

export const withLayout =<T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider>
				<Layout>
					<Component {...props}/>
				</Layout>
			</AppContextProvider>
		);
	};
};