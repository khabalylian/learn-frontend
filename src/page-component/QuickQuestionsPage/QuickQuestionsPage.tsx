import { useState } from 'react';

import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

import styles from './QuickQuestionsPage.module.css';
import { MotionWrapper } from '../../helpers/helpers';


const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

export const QuickQuestionsPage = () => {
	const [select, setSelect] = useState<string | false>(false);

   const handleChange =
       (panel: string) =>
       (event: React.SyntheticEvent, newExpanded: boolean) => {
           setSelect(newExpanded ? panel : false);
       };

    return (
		<MotionWrapper>
			<div className={styles.quickQuestions}>
				<span>JS:</span>
				<div className={styles.js}>
					<Accordion
						expanded={select === 'panel1'}
						onChange={handleChange('panel1')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>
								Що таке JS та які його основні функції
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Динамічна, об'єктно-орієнтована прототипна мова
								програмування. Реалізація стандарту ECMAScript.
								Найчастіше використовується для створення сценаріїв
								вебсторінок, що надає можливість на боці клієнта
								взаємодіяти з користувачем, керувати браузером,
								асинхронно обмінюватися даними з сервером, змінювати
								структуру та зовнішній вигляд вебсторінки.
								<br />
								<br />
								Мова JavaScript використовується для:
								<li>
									Написання сценаріїв вебсторінок для надання їм
									інтерактивності.
								</li>
								<li>
									створення односторінкових та прогресивних
									вебзастосунків (React, AngularJS, Vue.js)
								</li>
								<li>
									програмування на боці сервера (Node.js
									Express.js)
								</li>
								<li>
									мобільних застосунків (React Native, Cordova)
								</li>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel2'}
						onChange={handleChange('panel2')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке DOM?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								DOM - об'єктна модель документа (Document Object
								Model).
								<br />
								<br />
								Браузер створює DOM для того щоб за допомогою
								JavaScript можна було швидко маніпулювати
								веб-документом: шукати потрібний елемент, додавати
								нові елементи, отримати наступний дочірний елемент і
								т.п.. DOM має деревоподібну ієархію.
								<br />
								<br />
								Документ DOM складається з вузлів Node. Кожен вузол
								може містити у собі вбудований вузол, елемент, текст
								чи коментар.
								<br />
								<br />
								Кожен вузол DOM формується з HTML тегу і отримує
								властивості, події, стилі які вказані у самих
								атрибутах тегу, CSS стилях і в JavaScript коді. DOM
								підтримує об'єктно орієнтоване представлення
								веб-сторінки і дозволяє змінювати документ
								веб-сторінки за допомогою JavaScript. У JavaScript
								для роботи з DOM є об'єкт document, який містить
								методи і властивості для роботи з документом.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel3'}
						onChange={handleChange('panel3')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке hoisting</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Hoisting являє собою процес доступу до змінних до їх
								визначення. Можливо, ця концепція виглядає трохи
								дивно, але вона пов'язана з роботою компілятора
								JavaScript. Компіляція коду відбувається у два
								проходи. При першому проході компілятор отримує всі
								оголошення змінних, усі ідентифікатори. При цьому
								код не виконується, методи не викликаються. При
								другому проході відбувається виконання. І навіть
								якщо змінна визначена після безпосереднього
								використання, помилки не виникне, оскільки при
								першому проході компілятор вже відомі всі змінні.
								<br />
								<br />
								Тобто начебто відбувається підняття коду з
								визначенням змінних та функцій до їх безпосереднього
								використання. Підняття англійською перекладається як
								hoisting, тому цей процес так і називається.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel4'}
						onChange={handleChange('panel4')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>
								Яка різниця між var та let і const
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								У JavaScript змінні за областю видимості поділяються
								на: глобальні і локальні.
								<br />
								<br />
								Глобальна змінна - це змінна яка доступна для всього
								коду веб-сторінки.
								<br />
								<br />
								Локальна змінна - це змінна яка доступна в певній
								функції або блоку коду. Якщо об'являти змінну за
								допомогою var то змінна локальна в функції, якщо ж
								за допомогою let, const то змінна локальна у блоці.
								<br />
								<br />
								Глобальна змінна існує доки завантажена
								веб-сторінка, якщо перезавантажити сторінку то
								змінна обновиться. А локальна змінна існує доки
								виконується функція або є блок.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel5'}
						onChange={handleChange('panel5')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>
								Що таке Cross-Origin Resource Sharing (CORS)
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Механізм безпеки сучасних браузерів, який дозволяє
								вебсторінкам використовувати дані, що знаходяться на
								інших доменах. Тобто реалізує захист для
								вебсторінок, які не відповідають політиці одного
								походження.
								<br />
								<br />
								Раніше для отримання доступу до ресурсів з інших
								адрес використовувався JSONP, проте він має суттєве
								обмеження підтримує тільки GET запити. Використання
								CORS дозволяє вебпрограмісту використовувати
								звичайний XMLHttpRequest, який дозволяє кращу
								обробку помилок ніж JSONP. З іншого боку, JSONP
								працює на застарілих браузерах, які не мають
								підтримки CORS. CORS підтримується більшістю
								сучасних браузерів
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel6'}
						onChange={handleChange('panel6')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>
								У чому різниця між синхронним і асинхронним кодом
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Синхронний код
								<br />
								<br />
								У синхронних програмах, якщо у вас є два рядки коду
								(Рядок2 після Рядка1), то Рядок2 не може працювати
								до тих пір, поки Рядок1 не завершить своє виконання.
								<br />
								Наприклад, ви знаходитесь в черзі людей, які
								чекають, щоб купити квитки на поїзд. Ви не можете
								купити квиток на поїзд, коли всі люди перед вами ще
								не купили їх. Так само, як люди за вами не можуть
								купити квитки, поки ви ще не придбали ваш
								<br />
								<br />
								Асинхронний код
								<br />
								<br />
								В асинхронних програмах, ви можете мати два рядки
								коду (Рядок2 після Рядка1), де Рядок1 містить
								команди, які будуть виконуватися в майбутньому, а
								Рядок2 працює до завершення команди в Рядок1.
								<br />
								<br />
								Гарним прикладом є ситуація, коли ви їсте у
								ресторані. Інші люди можуть замовити їжу, але ви
								також можете її замовити. Вам не потрібно чекати,
								поки люди до вас завершать своє замовлення, щоб
								зробити те, щоб вам треба, і навпаки. Всі отримають
								свої замовлення, як тільки їжа буде приготована.
								<br />
								<br />
								Послідовність, в якій люди отримують їжу часто
								корелюють з послідовністю, в якій вони замовили їжу,
								але ці послідовності не завжди повинні бути
								ідентичні. Наприклад, якщо ви замовляєте стейк,
								після чого я замовив склянку води, то, ймовірно, я
								отримаю моє замовлення першим, тому що, як правило,
								принести стакан води не займає так багато часу, як
								приготувати стейк.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel7'}
						onChange={handleChange('panel7')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке REST API</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								REST (RESTful) - це загальні принципи організації
								взаємодії програми/сайту із сервером у вигляді
								протоколу HTTP. Особливість REST у тому, що сервер
								не запам'ятовує стан користувача між запитами - у
								кожному запиті передається інформація, що
								ідентифікує користувача (наприклад, token, отриманий
								через OAuth-авторизацію) та всі параметри,
								необхідних виконання операції.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
				<span>HTML&CSS:</span>
				<div className={styles.htmlCss}>
					<Accordion
						expanded={select === 'panel8'}
						onChange={handleChange('panel8')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>
								Що таке HTML та які базові елементи HTML
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								HTML - Стандартизована мова розмітки документів для
								перегляду веб-сторінок у браузері. Веб-браузери
								отримують HTML документ від сервера за протоколами
								HTTP/HTTPS або відкривають з локального диска, далі
								інтерпретують код в інтерфейс, який
								відображатиметься на екрані монітора.
								<br />
								<br />
								Елементи HTML є будівельними блоками сторінок HTML.
								За допомогою конструкцій HTML, зображення та інші
								об'єкти, такі як інтерактивні форми, можуть бути
								вбудовані у візуалізовану сторінку. HTML надає
								засоби для створення структурованих документів,
								позначаючи структурну семантику тексту, наприклад
								заголовки, абзаци, списки, посилання, цитати та інші
								елементи.
								<br />
								<br />
								Основні Елементи:p, div, noscript, blockquote, form,
								hr, table, h1, h2, h3, h4, h5, h6, ol, ul, img,
								button, script, span, input, textarea.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel12'}
						onChange={handleChange('panel12')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке CSS</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								CSS окреслює стиль веб-сторінки HTML. Це мова, за
								допомогою якої ми можемо встановити поведінку
								веб-сторінки HTML. Він описує, як вміст HTML буде
								відображатися на екрані.CSS називається каскадним
								таблицею
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel9'}
						onChange={handleChange('panel9')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке box model CSS</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								У мові CSS є спеціальна боксова модель (також
								блокова модель або блокова модель, англ. box model),
								яка описує, з чого складається бокс і які
								властивості впливають на його розміри. У кожного
								боксу є 4 області: margin (зовнішні відступи),
								border (рамка), padding (внутрішні відступ), і
								content (контент чи вміст).
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel10'}
						onChange={handleChange('panel10')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Різниця між margin та padding</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Щоб відсунути рамку потрібен padding – внутрішній
								простір між вмістом елемента та його межею border.
								<br />
								<br />
								Margin – простір від border, відступ елемента до
								сусідніх елементів.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel11'}
						onChange={handleChange('panel11')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Схлопування Margin</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Схлопування margin означає, що коли після заголовка,
								що має нижній margin, слідує параграф, що має
								верхній margin, ці два відступи не сумуються,
								утворюючи величезний розрив між елементами.
								<br />
								Коли два margin хлопаються, простір між елементами
								стає рівним більшому з цих двох відступів. Менший
								відступ, фактично, закінчується всередині більшого
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={select === 'panel13'}
						onChange={handleChange('panel13')}
						sx={{ backgroundColor: '#27476e', color: '#bbd1ea' }}
					>
						<AccordionSummary
							aria-controls='panel1d-content'
							id='panel1d-header'
						>
							<Typography>Що таке специфіка CSS?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								Специфіка - це спосіб, за допомогою якого браузери
								визначають, які значення властивостей CSS найбільше
								відповідають елементу і, отже, будуть застосовані.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</MotionWrapper>
    );
};
