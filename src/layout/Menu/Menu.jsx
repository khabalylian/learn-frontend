import {  useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import styles from './Menu.module.css';

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = useLocation()
        .pathname.split('/')
        .filter(item => item);
		
    console.log(pathname);
  

    const objMenu = [
        {
            name: 'JS',
            secondLevel: [
                {
                    name: 'Вступ',
                    path: 'Introduction',
                    thirdLevel: [
                        {
                            name: 'Вступ в JavaScript',
                            path: 'IntroductionJavaScript'
                        },
                        { name: 'Редактор коду', path: 'CodeEditor' }
                    ]
                },
                {
                    name: 'Основи',
                    path: 'foundations',
                    thirdLevel: [
                        {
                            name: 'Підключення script',
                            path: 'ConnectionScript'
                        },
                        {
                            name: 'Структура коду',
                            path: 'CodeStructure'
                        },
                        {
                            name: 'Use Strict',
                            path: 'UseStrict'
                        },
                        {
                            name: 'Змінні',
                            path: 'Variables'
                        },
                        {
                            name: 'Типи даних',
                            path: 'DataTypes'
                        },
                        {
                            name: 'Перетворення типів',
                            path: 'TransformationTypes'
                        },
                        {
                            name: 'Базові оператори',
                            path: 'BasicOperators'
                        },
                        {
                            name: 'Оператори порівняння',
                            path: 'ComparisonOperators'
                        }
                    ]
                }
            ]
        }
    ];

    function firstLevel(arr) {
        return arr.map(item => (
            <div key={item.name}>
                <h2
                    className={cn(styles.title, {
                        [styles.borderActive]: item.name === pathname[0]
                    })}
                    onClick={() => setIsOpen(isOpen)}
                >
                    <Link
                        to={
                            pathname.length >= 0 && pathname[0] !== item.name
                                ? `/${item.name}`
                                : '/'
                        }
                    >
                        {item.name}
                    </Link>
                </h2>
                {pathname[0] === item.name && (
                    <AnimatePresence>
                        {secondLevel(item.secondLevel)}
                    </AnimatePresence>
                )}
            </div>
        ));
    }

    function secondLevel(arr) {
        return arr.map(item => (
            <motion.div 
			key={item.name}
			initial={{height: 0}}
			animate={{height: 'auto'}}
			transition={{duration: 0.2}}
			>
                <h3 className={cn(styles.subTitle, {
                        [styles.borderActive]: item.path === pathname[1]
                    })}>
                    <Link
                        to={
                            pathname.length >= 1 && pathname[1] !== item.path
                                ? `${pathname[0]}/${item.path}`
                                : `/${pathname[0]}`
                        }
                    >
                        {item.name}
                    </Link>
                </h3>
                {item.path === pathname[1] && thirdLevel(item.thirdLevel)}
            </motion.div>
        ));
    }

    function thirdLevel(arr) {
        return arr.map(item => (
            <motion.div
                key={item.name}
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
            >
                <h4
                    className={cn(styles.itemMenu, {
                        [styles.active]: item.path === pathname[2]
                    })}
                >
                    <Link to={`/${pathname[0]}/${pathname[1]}/${item.path}`}>
                        {item.name}
                    </Link>
                </h4>
            </motion.div>
        ));
    }

    return (
        <div className={styles.menu}>
            {useMemo(() => firstLevel(objMenu), [pathname])}
        </div>
    );
};
