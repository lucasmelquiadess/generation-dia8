import readlinesync from 'readline-sync';

const numeros: Set<number> = new Set();

while (numeros.size < 10) {
  const valor = Number(readlinesync.question('Digite um numero inteiro (sem repetir): '));
  numeros.add(valor);
}
console.log('Os numeros informados foram:', [...numeros]);
