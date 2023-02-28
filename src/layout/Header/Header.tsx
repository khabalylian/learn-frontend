import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import cn from 'classnames';

export const Header = ({className}: {className: string}) => {
	
	return (
        <header className={cn(className, styles.header)}>
            <Link to='literature'>
                <h3 className={styles.text}>Література</h3>
            </Link>
            <Link to='test'>
                <h3 className={styles.text}>Тести</h3>
            </Link>
        </header>
    );
}