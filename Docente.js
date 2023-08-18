// 4.2 Atributos privados

import User from "./User.js";

export default class Docente extends User {
    // É usado o "export default" para exportar 

    constructor (nome, email, nascimento, role = 'admin', ativo = true) {

        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante (estudante, curso) {

        return `Estudante ${estudante} passou no curso de ${curso}.`

    }
}





/* // 3.5 Adicionando Métodos

import User from "./User.js";

class Docente extends User {
        // "extends" é o termo usado para mostrar que a Classe "Docente" irá herdar as propriedades e métodos da Classe "User"

    constructor (nome, email, nascimento, role = 'admin', ativo = true) {

        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante (estudante, curso) {

        return `Estudante ${estudante} passou no curso de ${curso}.`

    }
}

const novoDocente = new Docente('Mariana', 'm@m.com', '2001-01-01');

console.log(novoDocente);
    // Retornou o objeto "novoDocente"

console.log(novoDocente.exibirInfos());
    // Retornou o resultado do método que foi herdaddo da Classe "User"

console.log(novoDocente.aprovaEstudante('Julia', 'Java'));
    // Retornou o resultado do método herdado da Classe "Docente"
    // Estudante Julia passou no curso de Java.
 */