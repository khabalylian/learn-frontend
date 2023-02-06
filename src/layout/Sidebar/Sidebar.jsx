import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import { useEffect, useRef} from 'react';

export const Sidebar = ({className}) => {
	const sidebar = useRef(null);

	useEffect(() => {
		const scrollAnimation = window.addEventListener('scroll', e => {
            const scroll = window.scrollY;

            if (scroll > 1) {
                sidebar.current.style.top = 0;
            } 
			
			if(scroll < 50) {
				sidebar.current.style.top = '50px';

			}
        });
        return () => window.removeEventListener('scroll', scrollAnimation);
    }, []);

	return (
        <div className={cn(className, styles.sidebar)} ref={sidebar}>
			<Menu/>
        </div>
    );
}