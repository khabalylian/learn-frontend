import styles from './Header.module.css';
import cn from 'classnames';

export const Header = ({className}) => {
	return (
		<header className={cn(className, styles.header)}>

		</header>
	)
}