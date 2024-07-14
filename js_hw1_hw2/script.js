/*
Определите переменные str, sum, num, flag и txt со значениями «Привет», 123, 15.8,
true, «true», соответственно. При помощи оператора определения типа (typeof)
убедитесь, что переменные принадлежат типам: string, number или boolean. Выведите в
консоль (console.log()) типы операторов.
*/

let str= 'Привет',
    sum='123',
    num='15.8',
    flag=true,
    txt="true";

console.log('Тип данных значения " ' + str + '" :' , typeof str);
console.log('Тип данных значения " ' + sum + '" :' , typeof sum);
console.log('Тип данных значения " ' + num + '" :' , typeof num);
console.log('Тип данных значения " ' + flag + '" :' , typeof flag);
console.log('Тип данных значения " ' + txt + '" :' , typeof txt);

/*
Создайте переменные с числовыми значениями и выведите результат их сложения, вычитания, умножения и деления в консоль.
*/

let a=10;
let b=2;
console.log('разность=', a-b);
console.log('сумма равна=',a+b);
console.log('произведение=',a*b);
console.log('частное=',a/b);

/*
Создайте переменные a1, a2, a3, a4, a5, a6, a7 (нужна для решения 4 задания), a8, a9,
a10, a11, a12, a13, a14, a15, a16, a17, a18. Поместите в них и выведите в консоль
результат выражений: 
*/
let a1=5%3,
    a2=3%5,
    a3=5+'3',
    a4='5'-3,
    a5=75+'кг',
    a6=785*653,
    a7=100/25,
    a8=0*0,
    a9=0/2,
    a10=89/0,
    a11=98+2,
    a12=5-98,
    a13=(8+56*4)/5,
    a14=(9-12)*7/(5+2),
    a15=+"123",
    a16=1||0,
    a17=false||true,
    a18=true>0;

 console.log(a1, typeof a1);
 console.log(a2, typeof a2);
 console.log(a3, typeof a3);
 console.log(a4, typeof a4);
 console.log(a5, typeof a5);
 console.log(a6, typeof a6);
 console.log(a7, typeof a7);
 console.log(a8, typeof a8);
 console.log(a9, typeof a9);
 console.log(a10, typeof a10);
 console.log(a11, typeof a11);   
 console.log(a12, typeof a12);
 console.log(a13, typeof a13);
 console.log(a14, typeof a14);
 console.log(a15, typeof a15);
 console.log(a16, typeof a16);
 console.log(a17, typeof a17);
 console.log(a18, typeof a18);

 /*
 Напишите скрипт, который находит площадь прямоугольника высотой 23см и
шириной 10см, значение высоты и ширины должны хранится в width и height,
соответственно, а значение площади должно хранится в числовой переменной SPryam. 
 */

let height=23;
let width=10;
let SPryam=height*width;

console.log('Площадь равна ',SPryam);

/*
Напиши скрипт, который находит объем цилиндра высотой 10м и диаметром
основания равным значению переменной a7 из задания 2, результат поместите в
переменную VCilindra. 
*/

let h=10;
let VCilindra=3.14*h*a7*a7/4;

console.log(VCilindra);

/*
Найдите площадь круга (SKruga) с радиусом 5см (r)
*/

let r=5;
let SKruga=3.14*5*5;

console.log(SKruga);

/*
Найдите площадь трапеции (STrap) с основаниями 5см (a) и 7см (b), и высотой 10см
(h). 
*/

{
    let a=5;
    let b=7;
    let h=10;
    let STrap=0.5*(a+b)/h;

    console.log(STrap);
}

/*
Даны: размер ипотечного кредита (S - 2 млн. руб), процентная годовая ставка (p - 10%),
кол-во лет (years - 5). Найти переплату по кредиту, значение переплаты должно
содержаться в переменной Pereplata. 
*/

let S=2000000;
let p=0.1;
let years=5;
let Pereplata=S*(p+p/((1+p)**years-1));

console.log(Pereplata);

/*
Решите уравнения (найдите неизвестный x), где a = 8, b = 3:
a+2(x-b)=16;
b(x+15)=a+6x;
x+2x+ax+bx=23780
*/
{
let a=8;
let b=3;

console.log((16-a)/2+b);
console.log((a-15*b)/(b-6));
console.log(23780/(3+a+b));
}

/*
Выведите в консоль стихотворение (соблюдайте все переносы и абзацы):
*/

console.log('   Бывало, спит у ног собака,');
console.log('   костер занявшийся гудит,');
console.log('   и женщина из полумрака');
console.log('   глазами зыбкими глядит.');
console.log('');
console.log('');
console.log('   Потом под пихтою приляжет');
console.log('   на куртку рыжую мою');
console.log('   и мне, задумчивая, скажет:');
console.log('');
console.log('');
console.log('   "А ну-ка, спой!.."- и я пою.');

/*
Есть восемь текстовых строк (создайте 8 переменных), составьте из них грамотные по смыслу предложения (1 абзац, переменная text): 
*/

let str1=' индо земля зашаталась под ногами-и вырос,',
    str2=' и заревел он голосом диким…',
    str3=' блеснула молния и ударил гром,',
    str4=' а так какое-то чудище, страшное и мохнатое,',
    str5='  как будто из-под земли, перед купцом:',
    str6='Он подошёл и сорвал аленький цветочек.',
    str7='зверь не зверь, человек не человек,',
    str8=' В ту же минуту, безо всяких туч,';
let text=str6+str8+str3+str1+str5+str7+str4+str2;

console.log(text);

/*
Выведите приветственное сообщение с именем пользователя, которое пользователь введет в программу через prompt(), используя функцию alert().
Запросите у пользователя имя, возраст и место жительства. Выведите их значения в консоль.


let userName=prompt("Введите ваше имя:");
let userAge=prompt("Введите ваш возраст:");
let userHome=prompt("Введите ваш город:");

console.log('Имя: ',userName);
console.log('Возраст: ',userAge);
console.log('Место жительства: ',userHome);
console.log(`${userName} ${userAge} лет, живет в городе ${userHome}`);
*/


/*
Создайте переменную с массивом чисел и выведите их сумму в консоль.
*/

let arr=[3,212,0,-3];
let sumArr=arr[0]+arr[1]+arr[2]+arr[3];
console.log(sumArr);

/*
Создайте переменную с объектом, содержащим информацию о вашем любимом фильме (название, жанр, год выпуска) и выведите эту информацию в консоль.
*/

let film={
    name: "Один дома",
    genre: "комедия",
    year: "1991"
}

console.log(film);

/*
Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме
вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 
*/

{
   let str='123322'
   
   if ((str[0] + str[1] + str[2]) == (str[3] + str[4] + str[5])) {
    console.log('Верно')
   }  else {
    console.log('Неверно');
}
 
}

/*
Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 1, 0, -3. 
*/
{
    let a=1;

    if (a>0) {
        console.log('Верно') 
    } else {
        console.log('Неверно');
    }
}

{
    let a=0;
    
    if (a>0) {
        console.log('Верно') 
    } else {
        console.log('Неверно');
    }
}

{
    let a=-3;
    
    if (a>0) {
        console.log('Верно') 
    } else {
        console.log('Неверно');
    }
}

/*Если переменная a больше 2 и меньше 11, или переменная b больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'. 
*/
{
    let a=3,
        b=7;
    if (( a > 2 && a < 11) || (b >= 6 && b < 14)) {
        console.log('Верно') 
    } else {
        console.log('Неверно');
    }
}

 /*
 Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат. 
*/

{
let a=10;
let b=2;
console.log('разность=', a-b);
console.log('сумма равна=',a+b);
console.log('произведение=',a*b);
console.log('частное=',a/b);

if (a+b > 1) {
    console.log((a+b)**2)
}
}

/*
В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). 
*/
{
    let n=prompt("введите число от 0 до 59");
    if (n > 0 && n <= 15) {
        console.log('Первая четверть часа')
    } else if (n > 15 && n <= 30) {
        console.log('Вторая четверть часа')
    } else if (n > 30 && n <= 45) {
        console.log('Третья четверть часа')
    } else if (n > 45 && n <= 59) {
        console.log('Четверть четверть часа')
    } else {
        console.log('не верно ввели число')
    }
}

/*
В переменной day лежит число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). 
*/

{
    let day=prompt("введите число от 1 до 31");
    if (day >= 1 && day <= 10) {
        console.log('Первая декада месяца')
    } else if (day >= 11 && day <= 20) {
        console.log('Вторая декада месяца')
    } else if (day >= 21 && day <= 31) {
        console.log('Третья декада месяца')
    } else {
        console.log('не верно ввели число')
    }
}

/*
Напишите скрипт, который переводит дни в года (условно 1г = 365дн), в месяцы (условно 1м = 31день), в недели, в часы, в минуты и в секунды. Дробные результаты вычислений принимаются. Если кол-ва дней не хватает до полного года, месяца, недели, вывести сообщение «Меньше года», «Меньше месяца» и «Меньше недели», соответственно. 
*/

{
    let day=prompt('введите количество дней'),
        year=day/365,
        month=day/31,
        week=day/7,
        hour=day*24,
        minuts=day*24*60,
        seconds=day*24*60*60;

    if (year < 1) {
        console.log('меньше года')
        } else {
        console.log('year ',year)
    }

    if (month < 1) {
        console.log('меньше месяца')
        } else {
        console.log('month ',month)
    }

    if (week < 1) {
        console.log('меньше недели')
        } else {
        console.log('week ',week)
    }

    console.log('hour ',hour);
    console.log('minuts ',minuts);
    console.log('seconds ',seconds);
}
/*
Напишите скрипт, который по введенному дню (исп. значение переменной из 8
задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch. 
*/

{
    let day=prompt('Введите день от 1 до 365'),
        month=0;
    
    if ((day >= 1) && (day <= 31)) {
        month=1;
        console.log('month ',month);
    }

    if ((day >= 32) && (day <= 59)) {
        month=2;
        console.log('month ',month);
    }

    if ((day >= 60) && (day <= 90)) {
        month=3;
        console.log('month ',month);
    }

    if ((day >= 91) && (day <= 120)) {
        month=4;
        console.log('month ',month);
    }

    if ((day >= 121) && (day <= 151)) {
        month=5;
        console.log('month ',month);
    }

    if ((day >= 152) && (day <= 181)) {
        month=6;
        console.log('month ',month);
    }

    if ((day >= 182) && (day <= 212)) {
        month=7;
        console.log('month ',month);
    }

    if ((day >= 213) && (day <= 243)) {
        month=8;
        console.log('month ',month);
    }

    if ((day >= 244) && (day <= 273)) {
        month=9;
        console.log('month ',month);
    }

    if ((day >= 274) && (day <= 304)) {
        month=10;
        console.log('month ',month);
    }

    if ((day >= 305) && (day <= 334)) {
        month=11;
        console.log('month ',month);
    }

    if ((day >= 335) && (day <=365)) {
        month=12;
        console.log('month ',month);
    }

    switch(month) {
        case 1: console.log('winter');
        break;
        case 2: console.log('winter');
        break;
        case 3: console.log('spring');
        break;
        case 4: console.log('spring');
        break;
        case 5: console.log('spring');
        break;
        case 6: console.log('summer');
        break;
        case 7: console.log('summer');
        break;
        case 8: console.log('summer');
        break;
        case 9: console.log('autumn');
        break;
        case 10: console.log('autumn');
        break;
        case 11: console.log('autumn');
        break;
        case 12: console.log('winter');
        break;
    }
}