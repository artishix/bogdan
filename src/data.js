import tribune from "./assets/трибуна.png";
import club from "./assets/logo_nyva.png";
import stadium from "./assets/stadium-bg-niva.jpg";
import scarf from "./assets/scarf-niva-stadium.jpg";
import scoreboard from "./assets/трибуна(монітор).png";
import monument from "./assets/трибуна(вивіска).png";
import grass from "./assets/поле.png";
import goal from "./assets/ворота.png";
import light from "./assets/projector.png";
import trophy from "./assets/trophy.png";

const SECTIONS = {
    TRIBUNE: "tribune",
    GALERY: "galery",
    SCOREBOARD: "scoreboard",
    GOAL: "goal",
    CUP: "cup",
};

export const content = [
    {
        title: 'Трибуна стадіону "Поділля"',
        info: 'На фото зображена головна трибуна одного з найвідоміших стадіонів Хмельниччини — "Поділля". Ця трибуна є центральною частиною стадіону, де розташовані місця для вболівальників, VIP-сектор, а також основні технічні служби. Стадіон "Поділля" слугує домашньою ареною для футбольного клубу "Поділля" (м.Хмельницький) та приймає різноманітні спортивні й культурні заходи регіону.',
        image: tribune,
        id: SECTIONS.TRIBUNE,
    },
    {
        title: 'Футбольний клуб "Нива" (Вінниця)',
        info: 'Оновлений логотип футбольного клубу "Нива" (Вінниця) символізує продовження багаторічної історії команди, заснованої в 1958 році. Клуб брав участь у вищій, першій і другій лігах чемпіонату України та одного разу представляв Україну в Кубку кубків УЄФА. Оновлений дизайн логотипу підкреслює сучасний підхід клубу, залишаючи вірність його традиціям і спадщині.',
        image: club,
        id: "club",
    },
    {
        title: "Центральний міський стадіон (Вінниця)",
        info: "Стадіон «Локомотив» на 12 тис. місць у Вінниці відкрили 1959 року, за рік після створення однойменної футбольної команди. Перший офіційний матч відбувся 16 квітня 1958 року. Вінницька «Нива», яка тоді мала назву «Локомотив», перемогла з рахунком 2:1 івано-франківський «Спартак». На матч завітало 7 тисяч глядачів.",
        image: stadium,
        id: "stadium",
    },
    {
        title: 'Атрибути клубу "Нива" (Вінниця)',
        info: 'Шарфи з емблемою клубу є популярним атрибутом серед уболівальників, символізуючи підтримку команди під час матчів. Це фото поєднує головні символи клубу з його домашньою ареною, створюючи візуальну ідентифікацію ФК "Нива".',
        image: scarf,
        id: "scarf",
    },
    {
        title: "Електронне табло",
        info: 'Табло на стадіоні є важливим елементом для інформування глядачів про хід матчу. Воно показує поточний рахунок, тривалість гри та інші важливі моменти, допомагаючи вболівальникам стежити за подіями на полі. На цьому зображенні табло фіксує рахунок 2:2 після завершення основного часу між командами "Нива" (Вінниця) та "Чорноморець" (Одеса), демонструючи важливу роль технологій у сучасному футболі.',
        image: scoreboard,
        id: SECTIONS.SCOREBOARD,
    },
    {
        title: "Галерея слави",
        info: "Галерея слави вінницького футболу — це символічне місце, де зібрано найбільш визначні моменти та постаті в історії місцевого футболу. У галереї представлені фотографії видатних гравців, тренерів, трофеїв і ключових подій, що формували футбольну спадщину регіону. Це місце вшанування досягнень футбольних команд Вінниччини, яке надихає нові покоління гравців та вболівальників.",
        image: monument,
        id: SECTIONS.GALERY,
    },
    {
        title: "Футбольне поле",
        info: "Футбольне поле є центральним елементом будь-якого стадіону, де відбуваються всі головні події гри. Це місце, де змагаються команди, проявляючи свою майстерність і тактику. Якість газону, його розмітка та загальний стан мають вирішальне значення для проведення матчів на високому рівні. Для гравців поле — це арена для досягнення перемог, а для вболівальників — символ динаміки та емоцій футбольних баталій.",
        image: grass,
        id: "pitch",
    },
    {
        title: "Ворота",
        info: "Футбольні ворота — один із найважливіших елементів поля, адже саме вони визначають головну мету гри. Команди намагаються забити м'яч у ворота суперника, щоб здобути перевагу в матчі. Ворота є символом напруги, боротьби та вирішальних моментів у кожному матчі, ставши місцем, де визначаються переможці та лузери.",
        image: goal,
        id: SECTIONS.GOAL,
    },
    {
        title: "Освітлення",
        info: "Прожектори є важливим елементом стадіону, що забезпечує освітлення поля під час вечірніх матчів та дозволяє вболівальникам бачити гру в деталях навіть у темний час доби. Вони створюють атмосферу великих спортивних подій, підкреслюючи драматизм і напругу на полі. Прожектори також допомагають телевізійним трансляціям передавати чітке зображення, роблячи матч доступним для широкої аудиторії.",
        image: light,
        id: "light",
    },
    {
        title: "Кубок другої ліги України",
        info: "Кубок Другої ліги України з футболу символізує досягнення команди, яка перемогла в цьому національному турнірі. Він є втіленням праці, майстерності та командного духу, що дозволяє клубам змагатися за підвищення у класі та визнання на всеукраїнському рівні. Перемога у Другій лізі — це важливий крок до розвитку команди, який відкриває нові можливості для виходу на вищий рівень чемпіонату України.",
        image: trophy,
        id: SECTIONS.CUP,
    },
];

export const navigation = [
    { name: "Трибуна", sectionRef: SECTIONS.TRIBUNE },
    { name: "Галерея слави", sectionRef: SECTIONS.GALERY },
    { name: "Табло", sectionRef: SECTIONS.SCOREBOARD },
    { name: "Футбольні ворота", sectionRef: SECTIONS.GOAL },
    { name: "Кубок другої ліги", sectionRef: SECTIONS.CUP },
];
