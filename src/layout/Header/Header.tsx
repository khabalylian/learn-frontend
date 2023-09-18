import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { useEffect, useLayoutEffect, useState } from 'react';

import { InView } from 'react-intersection-observer';

const HeaderPage = [
    { title: 'Довідник', path: 'handbook' },
    { title: 'Швидкі питання', path: 'quickQuestions' },
    { title: 'Література', path: 'literature' },
    { title: 'Тести', path: 'test' },
    { title: 'Вправи', path: 'exp' }
];

export const Header = ({ className }: { className: string }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const pathname = useLocation()
        .pathname.split('/')
        .filter(item => item);

    const handleMouseMove = (event: MouseEvent) => {
        setPosition({
            x: event.clientX / 220 > 8.7 ? 8.7 : event.clientX / 220,
            y: event.clientY / 100 > 9 ? 9 : event.clientY / 100
        });
    };


	useEffect(() => {
        const menu = document.getElementsByClassName(styles.menu)[0];
        const burger = document.getElementsByClassName(styles.burger)[0];
		const menuElements = menu.querySelectorAll('li');
		
		Array.from(menuElements).forEach(item => {
			item.addEventListener('click', animBurger);
		})

		function animBurger() {
			menu.classList.toggle(styles.active)
            burger.classList.toggle(styles.burgerActive);
		}
	
		burger?.addEventListener('click', animBurger);

		return () => {
			Array.from(menuElements).forEach(item => {
                item.removeEventListener('click', animBurger);
            });
			burger?.removeEventListener('click', animBurger);
		}
    }, []);

    useEffect(() => {
        document.body.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, [position]);


    return (
        <header className={cn(className, styles.header)}>
            <Link to='/' className={styles.logo}>
                <InView>
                    {({ inView, ref }) => (
                        <svg
                            ref={ref}
                            width='75px'
                            height='75px'
                            viewBox='0 0 64 64'
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            aria-hidden='true'
                            role='img'
                            className='iconify iconify--emojione-monotone'
                            preserveAspectRatio='xMidYMid meet'
                        >
                            <circle
                                cx='44.125'
                                cy='22.625'
                                r='5'
                                fill='#000000'
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px)`
                                }}
                            ></circle>
                            <circle
                                cx='17.875'
                                cy='22.625'
                                r='5'
                                fill='#000000'
                                style={{
                                    transform: `translate(${position.x}px, ${position.y}px)`
                                }}
                            ></circle>
                            <path
                                d='M45.234 5.86c-.103 0-.202.014-.305.016a18.617 18.617 0 0 0 2.07-2.999s-7.947 6.131-15-.877c-7.053 7.008-15 .877-15 .877a18.673 18.673 0 0 0 2.068 2.999c-.102-.002-.201-.016-.304-.016C9.521 5.86 2 13.381 2 22.625c0 4.715 1.963 8.974 5.106 12.022c.437 5.116 2.25 13.268 9.003 18.447c-.744.209-1.356.791-1.356 1.758c0 2.469 2 6.147 2 6.147s1.108-2.041 1.675-4.103c.567 2.57 1.668 5.104 1.668 5.104s1.102-2.534 1.67-5.103C22.332 58.959 23.439 61 23.439 61s.729-1.343 1.306-2.948A19.539 19.539 0 0 0 32 59.457c2.54 0 4.979-.499 7.254-1.405c.578 1.605 1.305 2.948 1.305 2.948s1.109-2.041 1.676-4.103C42.802 59.466 43.902 62 43.902 62s1.102-2.534 1.67-5.103C46.139 58.959 47.246 61 47.246 61s2-3.679 2-6.147c0-.967-.611-1.549-1.355-1.758c6.752-5.18 8.565-13.331 9.002-18.447C60.036 31.599 62 27.34 62 22.625C62 13.381 54.479 5.86 45.234 5.86M34.26 10.291c1.039-2.07 2.428-3.604 2.428-3.604s-.289 1.827-1.324 3.896a18.048 18.048 0 0 1-2.426 3.604s.287-1.827 1.322-3.896M32 3.875s.469 2.52.469 5.625S32 15.125 32 15.125s-.469-2.52-.469-5.625S32 3.875 32 3.875m-9.082 41.079l1.549-1.752l1.55 1.752l1.549 1.752l-1.549 1.752l-1.55 1.753l-1.549-1.753l-1.55-1.752l1.55-1.752m-2.217.997l-1.55-1.752l-1.549-1.752l2.774-3.14c.195-.019.385-.053.578-.078l2.845 3.218l-1.55 1.752l-1.548 1.752m4.434-3.504l3.098-3.505l3.1 3.505l-1.55 1.752l-1.55 1.752l-1.549-1.752l-1.549-1.752m1.549 6.767l1.549-1.753l1.55 1.753l1.55 1.752l-3.1 3.505l-3.098-3.505l1.549-1.752m3.766-.756l-1.55-1.752l1.55-1.752L32 43.202l1.549 1.752l1.55 1.752l-1.55 1.752L32 50.211l-1.55-1.753m2.217-6.011l3.099-3.505l3.098 3.505l-1.549 1.752l-1.549 1.752l-1.549-1.752l-1.55-1.752m1.55 6.767l1.549-1.753l1.549 1.753l1.549 1.752l-3.098 3.505l-3.099-3.505l1.55-1.752m3.765-.756l-1.549-1.752l1.549-1.752l1.549-1.752l1.55 1.752l1.55 1.752l-1.55 1.752l-1.55 1.753l-1.549-1.753m3.766-4.259l-1.549-1.752l2.845-3.218c.192.025.382.06.577.078l2.775 3.14l-1.549 1.752l-1.55 1.752l-1.549-1.752m-2.217-2.507l-3.766-4.26L32 41.692l-3.768-4.26l-3.766 4.26l-2.336-2.643a16.517 16.517 0 0 0 6.348-2.799a11.353 11.353 0 0 0 2.887 3.589l.635.521l.634-.521a11.34 11.34 0 0 0 2.887-3.589a16.54 16.54 0 0 0 6.348 2.799l-2.338 2.643M32 37.724c-1.781-1.753-2.789-4.137-2.789-6.661s1.008-4.908 2.789-6.661c1.781 1.753 2.787 4.137 2.787 6.661S33.781 35.971 32 37.724m-2.262-27.433c1.035 2.069 1.324 3.896 1.324 3.896s-1.389-1.534-2.428-3.604c-1.035-2.069-1.322-3.896-1.322-3.896s1.389 1.534 2.426 3.604M5.75 22.625C5.75 15.378 11.628 9.5 18.875 9.5c6.968 0 12.654 5.438 13.083 12.299l-.593.486a11.314 11.314 0 0 0-4.154 8.777c0 .536.051 1.064.124 1.587a13.056 13.056 0 0 1-8.46 3.101c-7.247 0-13.125-5.878-13.125-13.125m11.335 16.68a16.65 16.65 0 0 0 1.68.085c.072 0 .143-.01.216-.011l-1.926 2.178a41.02 41.02 0 0 1 .03-2.252m.038 4.11l1.361 1.539l1.549 1.752l-1.549 1.752l-.557.63a36.156 36.156 0 0 1-.804-5.673m2.181 8.792a21.515 21.515 0 0 1-.76-.751a40.774 40.774 0 0 1-.328-1.184l.936-1.059l1.55-1.753l1.549 1.753l1.55 1.752l-1.967 2.225c-.491-1.072-1.627-1.401-2.53-.983m19.255 2.646c0 .396.057.826.143 1.265c-2.1.864-4.354 1.34-6.701 1.34s-4.602-.476-6.702-1.34c.087-.438.142-.868.142-1.265c0-1.289-1.085-1.886-2.125-1.828l1.152-1.304l3.766 4.26L32 51.721l3.766 4.26l3.766-4.26l1.153 1.304c-1.04-.058-2.126.538-2.126 1.828m6.896-3.397c-.248.257-.502.508-.76.751c-.902-.418-2.039-.089-2.529.983l-1.967-2.225l1.549-1.752l1.55-1.753l1.55 1.753l.936 1.059c-.111.424-.221.818-.329 1.184m.617-2.368l-.558-.63l-1.55-1.752l1.55-1.752l1.361-1.539c-.138 2.21-.449 4.1-.803 5.673m-1.054-9.709c.074.001.145.011.217.011c.567 0 1.127-.029 1.68-.085c.031.78.041 1.531.03 2.253l-1.927-2.179m.107-3.629a13.056 13.056 0 0 1-8.461-3.101c.073-.522.123-1.051.123-1.587c0-3.412-1.514-6.611-4.153-8.777l-.593-.486C32.47 14.938 38.156 9.5 45.125 9.5c7.246 0 13.125 5.878 13.125 13.125S52.371 35.75 45.125 35.75'
                                fill='#2F4F4F'
                            ></path>
                        </svg>
                    )}
                </InView>
            </Link>

            <ul id='menu' className={styles.menu}>
                {HeaderPage.map(item => (
                    <li
                        key={item.path}
                        className={cn(styles.menuItem, {
                            [styles.menuItemActive]: pathname[0] === item.path
                        })}
                    >
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>

            <div id='burger' className={styles.burger}>
                <span></span>
            </div>
        </header>
    );
};
