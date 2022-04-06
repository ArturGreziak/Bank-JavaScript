import * as readline from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
import * as  fs from 'fs';

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

class Dane {
    static usersOfTheBank = [
        { name: 'Artur', lastName: 'Greziak', login: 'ArturG74', password: 'Ag!080774', bankAccountNumber: 12_1960_2292, accountBalance: 15000, },
        { name: 'Dorota', lastName: 'Stańczyk', login: 'DorotaS80', password: 'Ds!211080', bankAccountNumber: 25_8169_2202, accountBalance: 11000, },
        { name: 'Elżbieta', lastName: 'Nowak', login: 'ElaG49', password: 'En!300549', bankAccountNumber: 32_1669_0272, accountBalance: 1500, },
        { name: 'Tomek', lastName: 'Kolodziejski', login: 'TomekK80', password: 'Tk!110580', bankAccountNumber: 24_1960_5242, accountBalance: 17000, }
    ];
    static DATA_FILE = 'bankData.txt';
    static wczytaj() {
        if (fs.existsSync(this.DATA_FILE)) {
            this.usersOfTheBank = JSON.parse(fs.readFileSync(this.DATA_FILE));
        }
    }
    static zapisz() {
        fs.writeFileSync(this.DATA_FILE, JSON.stringify(this.usersOfTheBank));
    }
    static dajDane() {
        return this.usersOfTheBank;
    }

}

class Przywitanie {
    static async odpal() {
        const imie = await Konsola.spytaj("jak masz na imie?");
        console.log(`Witaj ${imie} co możemy zrobić dla ciebie w naszym banku?`);
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

function userProperties() {

}

await main();

async function main() {
    Dane.wczytaj();
    // console.log(JSON.stringify(Dane.dajDane()));
    Konsola.init();
    await Przywitanie.odpal();
    await GlownyStan.odpal();
    console.log(`Pa Pa`);
    Konsola.zamknij();
    Dane.zapisz()
}
