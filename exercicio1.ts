//Importar biblioteca
import readlinesync from 'readline-sync';

//Array vazio, tipagem da constante
const cores: string[] = new Array<string>();

//for: laço de repetição
for (let i = 0; i < 5; i++) {
  let cor: string = readlinesync.question(`Informe a cor ${i + 1}: `);
  cores.push(cor);
}

console.log('Listar todas as cores:');
   for (let cor of cores) {
   console.log(cor);
   }  

cores.sort();
console.log('Ordenar as cores:');
for (let cor of cores) {
  console.log(cor);
  
}
