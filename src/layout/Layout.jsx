import styles from './Layout.module.css';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }) => {
	return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.main}>
				{children}
			</div>
        </div>
    );
};

export const withLayout =(Component) => {
	return function withLayoutComponent(props) {
		return (
			<Layout>
				<Component {...props}/>
			</Layout>
		);
	};
};