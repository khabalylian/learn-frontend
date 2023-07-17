import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useState } from 'react';
import { MotionWrapper } from '../../helpers/helpers';

interface Data {
    syntax: string;
    descr: string;
}

function createData(tag: string, description: string, data: Array<Data>) {
    return {
        tag,
        description,
        data
    };
}

function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell
                    sx={{
                        padding: 0,
                        borderBottom: '1px solid #aad',
                        width: '45px'
                    }}
                >
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell
                    sx={{
                        padding: 0,
                        color: 'rgb(224 224 224)',
                        borderBottom: '1px solid #aad',
                        width: '120px'
                    }}
                >
                    {row.tag}
                </TableCell>
                <TableCell
                    align='left'
                    sx={{
                        padding: 0,
                        color: '#bbd1ea',
                        borderBottom: '1px solid #aad'
                    }}
                >
                    {row.description}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                        borderBottom: '1px solid #aad'
                    }}
                    colSpan={6}
                >
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'
                                sx={{
                                    color: '#bbd1ea',
                                    borderBottom: 'none'
                                }}
                            >
                                Опис
                            </Typography>
                            <Table size='small' aria-label='purchases'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                fontWeight: 700,
                                                color: '#bbd1ea',
                                                borderBottom: '1px solid #aad'
                                            }}
                                        >
                                            Синтаксис
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                fontWeight: 700,
                                                color: '#bbd1ea',
                                                borderBottom: '1px solid #aad'
                                            }}
                                        >
                                            Опис тегу
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.data.map((historyRow: Data) => (
                                        <TableRow key={historyRow.syntax}>
                                            <TableCell
                                                component='th'
                                                scope='row'
                                                sx={{
                                                    width: '250px',
                                                    color: '#bbd1ea',
                                                    borderBottom: 'none'
                                                }}
                                            >
                                                {historyRow.syntax}
                                            </TableCell>
                                            <TableCell
                                                component='th'
                                                scope='row'
                                                sx={{
                                                    color: '#bbd1ea',
                                                    borderBottom: 'none'
                                                }}
                                            >
                                                {historyRow.descr}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const tag = [
    createData('<!--...-->', 'Визначає коментар в документі.', [
        {
            syntax: '<!-- текст -->',
            descr: 'HTML тег коментар використовується для вставки коментарів у коді html документа. Коментарі не відображаються в браузерах.'
        }
    ]),
    createData('<a>', 'Створює посилання.', [
        {
            syntax: '<a href="URL">...</a>',
            descr: 'HTML теґ <a> створює посилання на іншу сторіку(Зовнішне посилання) або на певний елемент цієї сторінки(Внутрішне посилання).'
        }
    ]),
    createData('<abbr>', 'Визначає абревіатуру чи акронім.', [
        {
            syntax: '<abbr>Скорочення</abbr>',
            descr: 'Тег <abbr> вказує, що послідовність символів є абревіатурою. За допомогою атрибута title дається розшифровка скорочення, що дозволяє розуміти абревіатуру тим людям, які з нею не знайомі. Крім того, пошукові системи індексують повнотекстовий варіант скорочення, що може використовуватися для підвищення рейтингу документа.'
        }
    ]),
    createData(
        '<article>',
        'Тег `<article>` визначає незалежний, самодостатній зміст від іншої частини сайту.',
        [
            {
                syntax: '<article></article>',
                descr: 'Тег <article> позначає важливі розділи контенту всередині веб-сторінки. Наприклад, в блозі кожен окремий пост являє собою значимий фрагмент контенту і саме ций контент має бути виділений за допомогою елемента <article>.'
            }
        ]
    ),
    createData('<aside>', 'Блок з додатковою інформацією.', [
        {
            syntax: '<aside> ... </aside>',
            descr: "HTML тег <aside> визначає блок збоку від контенту для розміщення рубрик, посилань на архів, міток та іншої інформації. Тег <aside> вказує, що контент, який міститься всередині цього елемента, пов'язаний з основним контентом даної сторінки, але не є його частиною."
        }
    ]),
    createData('<audio>', 'Додає аудіозапис на веб-сторінку.', [
        {
            syntax: `
					<audio src="URL"></audio>

					<audio>

						<source src="URL">

					</audio>
			`,
            descr: 'Шлях до файлу задається через атрибут src або вкладений тег <source>. Всередині контейнера <audio> можна написати текст, який буде виводитися в браузерах, які не працюють з цим тегом.'
        }
    ]),
    createData('<blockquote>', 'Довга цитата.', [
        {
            syntax: '<blockquote>Текст</blockquote>',
            descr: 'Текст, позначений тегом <blockquote>, відображається як блок з відступами зліва та справа (по 40 пікселів) та з відступами зверху та знизу.'
        }
    ]),
    createData('<body>', 'Визначає кордоти тіла веб-сторінки', [
        {
            syntax: `
			<body>
				...

				Весь зміст html-документу, що побачить користувач

				...

			</body>
			`,
            descr: 'Інформацію, яку слід виводити в документі, слід розташовувати саме всередині контейнера <body>. До такої інформації належить текст, зображення, теги, JavaScript скрипти і т. д.'
        }
    ]),
    createData('<br>', 'Створює перехід на новий рядок.', [
        {
            syntax: '<br>',
            descr: 'HTML тег <br> слід використовувати в текстовому блоці для позначення нового рядка, де речення (фраза, думка) не закінчена, наприклад у віршах.'
        }
    ]),
    createData('<button>', 'Визначає кнопку.', [
        {
            syntax: '<button type="button">Кнопка</button>',
            descr: 'На відміну від теґа <input type="button">, теґ <button> пропонує ширші можливості по створенню кнопок. Наприклад, в кнопці можна розміщувати будь-які елементи HTML, в тому числі зображення.'
        }
    ]),
    createData('<canvas>', 'Використовується як контейнер для графіки', [
        {
            syntax: `<canvas id="ідентифікатор">
					</canvas>
			`,
            descr: "Тег <canvas> використовується, щоб за допомогою скриптів, зазвичай JavaScript, динамічно створювати різні об'єкти, ігри, зображення, анімації, трансформувати їх та змінювати їх властивості."
        }
    ]),
    createData('<code>', 'Вказує, що зміст теґа - програмний код.', [
        {
            syntax: '<code>Текст</code>',
            descr: 'Теґ <code> визначає текст, який являє собою програмний код. Сюди відносяться імена змінних, ключові слова, функції і т.д.'
        }
    ]),
    createData(
        '<details>',
        'Визначає контент котрий користувач може приховати чи відобразити',
        [
            {
                syntax: '<details open>Текст</details>',
                descr: 'Початковий вміст елемента <details> приховано, замість нього виводиться текст «Детальніше», клацнувши на який ви приховаєте або відобразете вміст елемента.'
            }
        ]
    ),
    createData('<div>', 'Блок.', [
        {
            syntax: '<div>...</div>',
            descr: 'Тег <div> використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS.'
        }
    ]),
    createData('<!DOCTYPE>', 'Задає версію HTML.', [
        {
            syntax: '<!DOCTYPE [Елемент верхнього рівня] [Публічність] "[Реєстрація]//[Организація]//[Тип] [Ім’я]//[Мова]" "[URL]">',
            descr: '<!DOCTYPE> призначений для задання типу поточного документа - DTD (document type definition, опис типу документа). <!DOCTYPE> повинен бути першим елементом в вашому html-документі, він повинен йти перед тегом <html>.'
        }
    ]),
    createData('<footer>', 'Визначає футер (підвал) веб-сторінки', [
        {
            syntax: '<footer> ... </footer>',
            descr: "HTML тег <footer> задає нижній колонтитул документу або розділу, в ньому можуть міститися: ім'я автора, дата документа, контактна і правова інформація."
        }
    ]),
    createData('<form>', 'Визначає форму.', [
        {
            syntax: '<form action="URL"></form>',
            descr: 'HTML теґ <form> використовується для створення HTML форми на сторінці.'
        }
    ]),
    createData('<h1> - <h6>', 'Заголовок 6 рівнів', [
        {
            syntax: '<h1> Текст </h1> - <h6> Текст </h6>',
            descr: '<h1> визначає найбільш важливі заголовки, а <h6> визначає найменш важливі заголовки (<h1> заголовки повинні бути основними заголовками, потім слідують заголовки <h2> і так далі). Браузери автоматично додають порожній простір до і після кожного заголовка.'
        }
    ]),
    createData('<head>', 'Визначає інформацію про документ', [
        {
            syntax: `<html>
					<head>
						...
					</head>
				</html>
			`,
            descr: 'Також всередині контейнера <head> можуть знаходитися мета-теги, які використовуються для зберігання інформації призначеної для браузерів і пошукових систем, назву документа, скрипти, стилі і багато іншого.'
        }
    ]),
    createData('<header>', 'Позначає розділ HTML-сторінки як заголовок.', [
        {
            syntax: '<header>Заголовок</header>',
            descr: 'Тег <header> призначений для того, щоб позначити розділ HTML-сторінки як заголовок (контейнер для вступного вмісту) або набір навігаційних посилань.'
        }
    ]),
    createData('<hr>', 'Горизонтальна лінія.', [
        {
            syntax: '<hr>',
            descr: 'Теґ <hr> визначає тематичний поділ (поділ розділів, статей). Використовується для відокремлення змісту (або визначає зміну) HTML-сторінки.'
        }
    ]),
    createData('<html>', 'Вказує, що почався HTML-документ.', [
        {
            syntax: '<html>...</html>',
            descr: 'Теґ <html> є контейнером, який містить в собі весь вміст веб-сторінки, включаючи теґи <head> та <body>, крім теґа <!DOCTYPE>.'
        }
    ]),
    createData('<img>', 'Відображає графічне зображення на веб-сторінці', [
        {
            syntax: '<img src="URL" alt="альтернативний текст">',
            descr: 'Теґ <img> призначений для відображення зображення на Web-сторінці (формати зображень gif, jpeg, png та інші).'
        }
    ]),
    createData('<input>', 'Поле вводу даних', [
        {
            syntax: '<input атрибути>',
            descr: 'HTML теґ <input> є одним з різнобічних елементів форми і дозволяє створювати різні елементи інтерфейсу і забезпечити взаємодію з користувачем. Головним чином <input> призначений для створення текстових полів, різних кнопок, перемикачів і прапорців.'
        }
    ]),
    createData('<label>', 'Визначає мітку для елементу форми', [
        {
            syntax: `<form>

						<input id="ідентифікатор">

						<label for="ідентифікатор">Текст</label>

					</form>
			`,
            descr: 'Тег <label> (англ. - мітка) служить текстової міткою для елемента <input>. За своїм виглядом мітка нічим не відрізняється від звичайного тексту, але завдяки їй користувач може вибрати елемент форми кліком по тексту, розташованих у межах елемента <label>, а не по самому елементу <input>.'
        }
    ]),
    createData('<li>', 'Визначає елемент списку', [
        {
            syntax: `
				<ul>
					<li>текст</li>
				</ul>
			`,
            descr: 'Тег <li> (англ. list item - елемент списку) створює елемент впорядкованого (нумерованого) або маркованого (ненумерованого) списку. Тег <li> використовується у впорядкованих списках (<ol>), марковані списки (<ul>), а також в меню (<menu>).'
        }
    ]),
    createData(
        '<link>',
        "Тег `link` служить для зв'язку html-документа із зовнішнім файлом.",
        [
            {
                syntax: `<head>

						<link rel="stylesheet" type="text/css" href="style.css">

					</head>
			`,
                descr: "Наприклад, щоб зв'язати документ із файлом CSS стилів, потрібно атрибутом href вказати адресу файлу, а атрибутом rel вказати браузеру як використовувати підключений файл."
            }
        ]
    ),
    createData('<main>', 'Визначає основний зміст документа.', [
        {
            syntax: '<main></main>',
            descr: 'Тег <main> не повинен розташовуватися всередині елементів <article>, <aside>, <footer>, <header>, <nav> або <section>'
        }
    ]),
    createData('<menu>', 'Відображає список пунктів меню.', [
        {
            syntax: '<menu> <li>пункт меню</li> </menu>',
            descr: 'HTML теґ <menu> використовується для контекстного меню, панелей інструментів чи для включення в перелік елементів управління форми і команд.'
        }
    ])
];

export const Handbook = () => {
    return (
		<MotionWrapper>
			<TableContainer component={Paper} sx={{ backgroundColor: '#27476e' }}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell sx={{ borderBottom: '1px solid #aad' }} />
							<TableCell
								sx={{
									padding: '16px 16px 16px 0',
									color: '#bbd1ea',
									borderBottom: '1px solid #aad'
								}}
							>
								Теґ
							</TableCell>
							<TableCell
								align='left'
								sx={{
									padding: '16px 16px 16px 0',
									color: '#bbd1ea',
									borderBottom: '1px solid #aad'
								}}
							>
								Короткий опис
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{tag.map(row => (
							<Row key={row.tag} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</MotionWrapper>
    );
};
