import Bogdan from "./assets/Богдан Хмельницький.png";
import Gufnitsia from "./assets/Гуфниця.png";
import Bulava from "./assets/Булава 34.png";
import Lulka from "./assets/Люлька.jpg";
import Gun from "./assets/Пістоль.jpg";
import Knife from "./assets/Ніж.png";
import Zhytomyr from "./assets/Битва під житомиром.png";
import Seagull from "./assets/Чайка.jpg";
import Flag from "./assets/Прапор.gif"
import Bandera from "./assets/Бандура.jpg"

const homePageContent = [
    {
        title: 'Богдан Хмельницький',
        info: 'Богдан Хмельницький був видатним українським державним і військовим діячем, гетьманом Війська Запорозького. Він очолив Національно-визвольну війну українського народу проти польського панування, що мала на меті звільнення українських земель від соціального, національного і релігійного гніту. Хмельницький також сприяв відновленню української православної церкви та захисту прав українського народу. Його постать залишається символом боротьби за свободу та незалежність України.',
        image: Bogdan,
        id: "tribune",
    },
    {
        title: "Битва під Житомиром",
        info: "Під час кампаній 1648 року Богдан Хмельницький, на чолі козацько-селянського війська, організував низку успішних боїв проти Речі Посполитої, зокрема битви під Жовтими Водами, Корсунем та Пилявцями. Історичні джерела свідчать, що битва під Житомиром була частиною ширшої кампанії, яка сприяла поширенню повстання на території Волині. У цьому контексті вона мала значення для загальної стратегії Хмельницького, спрямованої на звільнення українських земель від польського гніту.",
        image: Zhytomyr,
        id: "cup",
    },
];
const gunsPageContent = [
    {
        title: 'Гуфниця',
        info: 'Гуфниця — це старовинна артилерійська зброя, яка використовувалася запорозькими козаками під час бойових дій. Назва походить від німецького слова "Haufnice", що означає вид гармати. Вона призначалася для стрільби ядрами або картеччю по укріпленнях і ворогах на полі бою.',
        image: Gufnitsia,
        id: "club",
    },
    {
        title: "Козацький ніж",
        info: "Козацький ніж — це багатофункціональна холодна зброя, яка була важливим атрибутом кожного козака. Він використовувався як у побуті, так і в бойових ситуаціях. Завдяки своїй універсальності та міцності ніж став незамінним інструментом у козацькому житті.",
        image: Knife,
        id: "stadium",
    },
    {
        title: 'Козацький пістоль',
        info: 'Козацький пістоль — це вогнепальна зброя, яка була широко використовувана козаками в бойових діях та особистому захисті. Пістолі входили до стандартного озброєння козака і слугували як компактна, ефективна зброя для ближнього бою.',
        image: Gun,
        id: "scarf",
    },
    {
        title: "Булава",
        info: "Булава — це символ влади й командування, який використовували козацькі гетьмани та старшини. У козацькій традиції булава не лише виконувала функції зброї, але й слугувала важливим атрибутом, що підкреслював статус її власника.",
        image: Bulava,
        id: "gallery",
    },
];

const gifPageContent = [
    {
        title: "GIF-анімація",
        info: "Це анімація, де прапор рухається від пориву вітру залишаючи тінь на землі.",
        image: Flag,
        id: "gif",
    },
];

const attributesPageContent = [
    {
        title: "Кобза",
        info: 'Кобза — традиційний український струнний щипковий музичний інструмент. Кобза вважається предком бандури та є символом української музичної культури.',
        image: Bandera,
        id: "scoreboard",
    },
    {
        title: "Люлька",
        info: "Люлька — це не лише особистий предмет побуту запорозького козака, а й важливий символ їхньої культури, статусу і традицій. Вона слугувала засобом для куріння, елементом спілкування під час рад, а також символом мудрості та спокою.",
        image: Lulka,
        id: "pitch",
    },
    {
        title: "Козацька чайка",
        info: "Козацька чайка — це традиційне судно, яке використовували запорозькі козаки для морських та річкових походів. Чайка була надзвичайно ефективним і універсальним кораблем, пристосованим для швидких нападів, маневрів і тривалих подорожей.",
        image: Seagull,
        id: "goal",
    },
];

const navigation = [
    { name: "Атрибути", path: "/attributes" },
    { name: "Зброя", path: "/weapons" },
    { name: "GIF-анімація", path: "gif-animation" },
];

export { homePageContent, navigation, gunsPageContent, gifPageContent, attributesPageContent };
