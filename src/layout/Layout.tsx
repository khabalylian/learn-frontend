import styles from './Layout.module.css';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import React, { FunctionComponent, PropsWithChildren} from 'react';
import { AppContextProvider } from '../context/app.context';
import { IAppContext } from '../context/app.context';

import { AnimatePresence } from 'framer-motion';

const Layout = ({children}: PropsWithChildren): JSX.Element => {
	return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
                <div className={styles.main}>
					<AnimatePresence mode='wait'>
						{children}
					</AnimatePresence>
                </div>
            <Sidebar className={styles.sidebar} />
        </div>
    );
};

export const withLayout =<T extends Record<string, unknown> & IAppContext> (Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
            <AppContextProvider>
				<Layout>
					<Component {...props} />
				</Layout>
            </AppContextProvider>
        );
	};
};