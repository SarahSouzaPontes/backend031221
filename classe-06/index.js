const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];


//Organize o array na ordem inversa e transforme em uma única string separada por vírgulas de forma q seja impresso:
//Uva, Pêra, Abacaxi, Maçã, Banana
//b)** Remova o primeiro e último item do array original e adicione a fruta `Melão` ao novo array da seguinte forma:
//['Maçã', 'Abacaxi', 'Pêra', 'Melão']

const resultado = frutas.reverse();
//console.log(resultado);

frutas.splice(0, 1, "Melão");
//console.log(resultado)
resultado.pop()
//console.log(resultado)

const resultado1 = resultado.reverse();
console.log(resultado1)
