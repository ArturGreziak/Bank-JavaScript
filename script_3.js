import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';

class Konsola {
    static rl;
    static init() {
        if (this.rl == undefined) {
            this.rl = readline.createInterface({ input: stdin, output: stdout });
        }
    }
    static zamknij() {
        this.rl.close();
    }
    static async spytaj(pytanie) {
        return await this.rl.question(pytanie);
    }
}

class Przywitanie {
    static async odpal() {
        const imie = await Konsola.spytaj("jak masz na imie?");
        let message = `Witaj ${imie} co możemy zrobić dla ciebie w naszym banku?`;
        console.log(`${message}!`);
    }
}

class GlownyStan {
    static async odpal() {
        let command = '';
        while (command != "koniec") {
            command = await Konsola.spytaj('Chcesz się za(R)ejestrować czy za(L)ogować? Czy (koniec)?: ');
            switch (command) {
                case 'R':
                    console.log(`Chcesz się zarejestrować! Nie zaimplementowane.`);
                    break;
                case 'L':
                    console.log(`Chcesz się zalogować! Nie działa.`);
                    break;
                case 'koniec':
                    break;
                default:
                    console.log(`Wprowadź poprawną wartość!`);
                    break;
            }
        }
    }
}

const usersOfTheBank = [
    
];

await main();

async function main() {
    Konsola.init();
    await Przywitanie.odpal();
    await GlownyStan.odpal();
    console.log(`Pa Pa`);
    Konsola.zamknij();
}
