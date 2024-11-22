function powitanie(tresc: string): void{
    console.log(`witaj, ${tresc}`);
}

powitanie('cezary');

function powitanie2(tresc2: string): string {
    return (`witaj, ${tresc2}`);
}

console.log(powitanie2('ada'));

function suma(a: number, b: number): number {
    return a+b;
}

console.log(`suma liczb 2 i 7 wynosi ${suma(2, 7)}`);

//zad1


function oblicz(a: number, b: number): void {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  if (b !== 0) {
    console.log(a / b);
  } else {
    console.log('Nie mozna dzielic przez 0');
  }
}

oblicz(10, 5);

//zad 2

let liczba: number = -235;

function obliczBezwzgledna(): void {
  let wynik: number = Math.abs(liczba);
  console.log(wynik);
}

obliczBezwzgledna();

//zad3

function obliczBMI(): void {
  let masa: number = 80;
  let wzrost: number = 1.83;
  let bmi: number = masa / (wzrost * wzrost);
  
  if (bmi < 18.5) {
    console.log(bmi + " - za malo");
  } else if (bmi > 25) {
    console.log(bmi + " - za duzo");
  } else {
    console.log(bmi + " - waga prawidlowa");
  }
}

obliczBMI();

//zad4

function podzielLiczby(): void {
  let numery: number[] = [2, 4, 7, 11, 14, 19, 21, 100];
  let parzyste: number[] = numery.filter(function(x) {
    return x % 2 == 0;
  });
  let nieparzyste: number[] = numery.filter(function(x) {
    return x % 2 !== 0;
  });
  console.log(`liczby parzyste ${parzyste}`);
  console.log(`liczby nie parzyste ${nieparzyste}`);
}

podzielLiczby();


