import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '../Menu/Menu';
import React, { useEffect, useRef} from 'react';

export const Sidebar = ({className}: {className: string}) => {
	const sidebar = useRef(null);

	function animateScroll() {
		const scroll = window.scrollY;

		if(sidebar.current){
			
			if(scroll < 70) {
				(sidebar.current as HTMLElement).style.top = `${70 - scroll}px`;
			} 
			
			if (scroll > 70) {
				(sidebar.current as HTMLElement).style.top = '0px';
			}

		}
	}

	useEffect(() => {
		window.addEventListener('scroll', animateScroll);
		return () => window.removeEventListener('scroll', animateScroll)
    }, []);

	return (
        <div className={cn(className, styles.sidebar)} ref={sidebar}>
			<Menu/>
        </div>
    );
}