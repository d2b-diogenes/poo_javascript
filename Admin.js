// 4.2 Atributos privados

import User from "./User.js";

export default class Admin extends User {
    // É usado o "export default" para exportar 

    constructor (nome, email, nascimento, role = 'admin', ativo = true) {

        super(nome, email, nascimento, role, ativo);
    }

    exibirInfos() {
        // É um método herdado a Classe "User", mas que tem um comportamento diferente ao ser chamado
        
        return `${this.nome}, ${this.role}, ${this.ativo}`;
            // O Polimorfirmo é demonstrado com um retorno/comportamente diferente do método da Superclasse "User"
            // O método da Superclasse irá retornar: nome, email, nascimento, role e ativo
            // O método da subclasse irá retornar: nome, role e ativo
    }


    criarCurso (nomeDoCurso, vagas) {

        return `Cruso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}







/* // Aula 3.5 Adicionando Métodos

import User from "./User.js";

class Admin extends User {

    constructor (nome, email, nascimento, role = 'admin', ativo = true) {

        super(nome, email, nascimento, role, ativo);
    }

    criarCurso (nomeDoCurso, vagas) {
        // Criando um método para a Classe "Admin"

        return `Cruso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');

// console.log(novoAdmin);

// console.log(novoAdmin.exibirInfos());

console.log(novoAdmin.criarCurso('JS', 20));
    // O objeto está chamando o método "criarCurso( )" herdado da CLasse "Admin"
*/






/* // Aula 3.3 Herança de Classe

    // Para que fosse possível trabalhar com módulos, exportar e importar funções, foi necessário inicar o arquivo de configurações "package.json" e inserir lá dentro o termo "type": "module"
    // O termo "type": "module" no arquivo "package.json" informa do JS que será trabalhado com módulos.

import User from "./User.js";
    // Importanda a Classe "User"

class Admin extends User {
    // Informando ao Amin que ele tem que puxar, herdar, as propriedades e métodos do "User"

    constructor (nome, email, nascimento, role = 'admin', ativo = true) {

        super(nome, email, nascimento, role, ativo);
            // É usada a função especial "super" que representa a Classe "User" que fornece as propriedades para a CLasse "Admin" herdar.
    }
}

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');

console.log(novoAdmin);
    // Retornou um objeto criado a partir da Classe "Admin"

console.log(novoAdmin.exibirInfos());
    // A Classe "Admin" herdou as propriedades e também os métodos da Classe "User"
    // O objeto chamou o método que a Classe "Admin" herdou da Classe "User" e  
    // Retornou 2 strings, nome e email
*/