/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/


class Carro {
    marca;
    cor;
    gastomedio;

    constructor(marca, cor, gastomedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastomedio = gastomedio;
    }
  
  calcularGastorPorPercurso(distanciaEmKm,precoCombustivel){
    return distanciaEmKm * this.gastomedio * precoCombustivel;
  }

}

const uno = new Carro ('fiat','prata',1/12);
uno.calcularGastorPorPercurso(70, 5);
console.log(uno.calcularGastorPorPercurso(70, 5));

const palio = new Carro ('fiat','preto',1/10);
palio.calcularGastorPorPercurso(70, 5);
console.log(uno.calcularGastorPorPercurso(70, 5));