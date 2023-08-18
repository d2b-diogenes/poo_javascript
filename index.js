// 5.2 Polimorfismo

import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2020-01-01');

console.log(novoAdmin.exibirInfos());
    // Retornou: Rodrigo, admin, true
    // Retornou apenas o nome, role e ativo
    // Chamando o método da superclasse com a mesma assinatura, o retorno terá um comportamento diferente, terá o comportamento que foi definido na classe "Admin"





/* // 4.7 Setters


import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2020-01-01');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2020-01-01');

console.log(novoAdmin.nome);
    // Acessado através do método 'get' a propriedade "nome"

novoAdmin.nome = '';
    // O objeto "novoAdmin" herdou o método "set" da classe "User"
    // Por meio do método assessor "set" é possível atribuir um novo valor para a propriedade privada da classe.
    // A atribuição do novo valor é feita igual uma atribuição feita para uma propriedade
    // o método 'set' é escrito como sintaxe de função, mas a atribuição dele é feita igual uma atribuição feita para uma propriedade "novoAdmin.nome = 'André'"

console.log(novoAdmin.nome);
    // Acessado através do método 'get' a propriedade "nome" depois de ter sido alterado o valor por meio do método 'set'
*/





/* // 4.6 Getters


import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm@m.com', '2020-01-01');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2020-01-01');

console.log(novoAdmin.nome);
    // Retornou: Rodrigo
    // O objeto "novoAdmin" herdou o método "get" da classe "User"
    // Por meio do método assessor "get" foi possível retornar a propriedade privada da classe.
    // "nome" é chamado como uma propriedade de "novoAdmin"
    // o método 'get' é escrito como sintaxe de função, mas a chamada dele é como de uma propriedade, sem os parênteses ()
*/





/* // 4.5 Métodos privados


import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Mariana', 'm@m.com', '2020-01-01');

//console.log(novoUser.#montaObjUser());
    // Apresentará ERRO devido ter sido declarado como um método privado
    // Não é possível executar essse método fora da classe


console.log(novoUser.exibirInfos());
    // Retornou todos os dados
    // Por meio do método exibirInfos() é público é possível acessar um método privado de dentro da classes

const novoAdmin = new Admin('ROdrigo', 'r@r.com', '2020-01-01');
console.log(novoAdmin.exibirInfos());
    // Retornou todos os dados
*/





/* // 4.2 Atributos privados
    
    // Atributos privados só podem ser acessados por dentro da classe, não conseguem ser acessadas por fora da classe
    // Isso é devido por não querer se propriedades de uma classe seja alterada de outras partes do código

import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

const novoUser = new User('Marta', 'm@m.com', '2020-01-01');

// novoUser.#email = 'x@x.com';
    // Não permite fazer modificações por fora da classe
    // Dá mensagem de erro devido uma variável privada
*/