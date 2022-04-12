import * as aaa from 'node:readline/promises';
import { stdin as kulfon, monika } from 'node:process';

const rl = aaa.createInterface({ intput: kulfon, output: monika });
const imie = await rl.question(`Jak masz na imię: `);
let message = (`Witaj ${imie} comożemy zrobić dla ciebie w naszym banku`);
console.log(message);
const question = rl.question(`Chcesz się za (R)ejestrować czy za (L)logować`);
switch(question){
    case 'R':
        console.log('Chce się za (R)jestrować');
        break;
    case 'L':
        console.log('Chce się za (L)ogować');
        break;
    default:
        console.log('Wprować poprawną wartość');
        const question = rl.question(`Chcesz się za (R)ejestrować czy za (L)logować`);
        break;

}