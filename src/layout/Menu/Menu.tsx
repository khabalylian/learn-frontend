import {  useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import styles from './Menu.module.css';

interface FirstLevel {
	name:string,
	secondLevel: SecondLevel[]
}

interface SecondLevel {
	name: string,
	path: string,
	thirdLevel: ThirdLevel[]
}

interface ThirdLevel {
	name: string,
	path: string,
}

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = useLocation()
        .pathname.split('/')
        .filter(item => item)
		
	const variants ={
		visible: {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.05
			},
		},
		hidden:{
			margin: 0
		}
	}

	const variantsChildren ={
		visible: {
			height: 'auto',
			marginBottom: 10,
			opacity: 1,
		},
		hidden:{
			height: 0,
			opacity: 0,
			marginBottom: 0
		}
	}
  

    const objMenu: FirstLevel[]  = [
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
                            name: 'Умовні розгалуження: if, ?',
                            path: 'ConditionalBranching'
                        },
						{
                            name: 'Цикли',
                            path: 'Cycles'
                        },
						{
                            name: 'Switch',
                            path: 'Switch'
                        },
                    ]
                },
				{
					name: 'Оператори JavaScript',
					path: 'OperatorsJS',
					thirdLevel: [
						{
							name: 'Базові оператори',
							path: 'BasicOperators'
						},
						{
							name: 'Оператори порівняння',
							path: 'ComparisonOperators'
						},
						{
							name: 'Логічні оператори',
							path: 'LogicalOperators'
						},
					]
                },
				{
					name: 'Функції',
					path: 'Function',
					thirdLevel: [
						{
							name: 'Функції',
							path: 'BasicFunction'
						},
						{
							name: 'Рекурсія і Замикання',
							path: 'RecursionAndClosure'
						},
					]
                },
				{
					name: 'Об`єкти основи',
					path: 'BasicObjects',
					thirdLevel: [
						{
							name: 'Об`єкти',
							path: 'Objects'
						},
						{
							name: 'Копіювання об’єктів та посилання',
							path: 'CopyObject'
						},
						{
							name: 'Методи об’єкту, "this"',
							path: 'ObjectThis'
						},
						{
							name: 'Конструктори, оператор "new"',
							path: 'Constructors'
						},
						{
							name: 'Методи',
							path: 'ObjectMethod'
						},
						{
							name: 'Деструктуризація',
							path: 'Destructured'
						},
					]
                },
            ]
        }
    ];

    function firstLevel(arr: FirstLevel[]) {
        return arr.map(item => (
            <div key={item.name} 
			className={styles.firstBlock}
			>
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
				<motion.div 
					className="firstLevelBlock"
					layout
					variants={variants}
					initial={item.name === pathname[0] ? 'visible' : 'hidden'}
					animate={item.name === pathname[0] ? 'visible' : 'hidden'}
					transition={{duration: 0.1}}>
					{
						secondLevel(item.secondLevel)
					}
				</motion.div>
            </div>
        ));
    }

    function secondLevel(arr: SecondLevel[]) {

		return (
			<div className={styles.secondBlock}>
				{
					arr.map(item => (
						<motion.div 
							key={item.path} 
							className={styles.secondBlockItem}
							variants={variantsChildren}>
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
							<motion.div 
								layout
								variants={variants}
								initial={item.path === pathname[1] ? 'visible' : 'hidden'}
								animate={item.path === pathname[1] ? 'visible' : 'hidden'}
								transition={{duration: 0.1}}
								className={styles.secondLevelBlock}>
								{thirdLevel(item.thirdLevel)}
							</motion.div>
						</motion.div>
				))}
			</div>
		)
    }

    function thirdLevel(arr: ThirdLevel[]) {
        return( 
			arr.map(item => (
            <motion.div
				variants={variantsChildren}
                key={item.name}
				className={styles.thirdLevelBlock}
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
        )));
    }

    return (
        <div className={styles.menu}>
            {useMemo(() => firstLevel(objMenu), [pathname])}
        </div>
    );
};
