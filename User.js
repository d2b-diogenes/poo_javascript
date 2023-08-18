// 5.2 Polimorfismo
    // Polimorfimo é a subclasse usarem o mesmo método da super classe, mas com um comportamente diferente. 

export default class User {

    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
        
    }

    get nome(){

        return this.#nome;
    }

    get email(){

        return this.#email;
    }

    get nascimento(){

        return this.#nascimento;
    }

    get role(){

        return this.#role;
    }

    get ativo(){

        return this.#ativo;
    }

    set nome(novoNome) {
        
        if (novoNome === '') {
            throw new Error ('O campo não pode ser alterado para um campo vazio.') 
        }

        this.#nome = novoNome;
        
    }

    exibirInfos() {
        // É um métod que é herdado pelas subclasses "Admin" e "Docente"
        
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
    }
}






/* // 4.7 Setters
    // 'set' é uma propriedade acessora, um método utilizado para acessar atributos de dentro da classe
    // Método 'set' definie propriedade privada de forma segura

export default class User {

    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
        
    }

    get nome(){
        // Método 'get' que faz apenas leitura da propriedade
        // O método 'get' nunca recebe argumento
        // Ele é escrita como sintaxe de função, mas a chamada dela é como de uma propriedade, sem os parênteses ()
        // Dentro do método assessor pode ter lógica condicional "if nome tal, faça isso"

        return this.#nome;
    }

    get email(){

        return this.#email;
    }

    get nascimento(){

        return this.#nascimento;
    }

    get role(){

        return this.#role;
    }

    get ativo(){

        return this.#ativo;
    }

    set nome(novoNome) {
        // O método 'set' defini novo valor para uma propriedade privada
        // 'set' aceita e recebe apenas um único parâmetro relativo ao dado que será alterado, "novoNome"

        // Setter são feitos para protefer contra uma alteração crítica
        // Podem ser criadas varificações e validações dentro do Setter
        if (novoNome === '') {
            throw new Error ('O campo não pode ser alterado para um campo vazio.') 
        }

        this.#nome = novoNome;
            // Definição de como será feita a substituição
    }

    exibirInfos() {

        // const objUser = this.#montaObjUSer();

        // return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
            // 'this.' agora var se referir aos getters
    }
}
 */






/* // 4.6 Getters
    // 'get' é uma propriedade acessora, um método utilizado para acessar atributos de dentro da classe 
    // Método 'get' que faz apenas leitura da propriedade

export default class User {

    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor (nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
        
    }

    get nome(){
        // Método 'get' que faz apenas leitura da propriedade
        // O método 'get' nunca recebe argumento
        // Ele é escrita como sintaxe de função, mas a chamada dela é como de uma propriedade, sem os parênteses ()
        // Dentro do método assessor pode ter lógica condicional "if nome tal, faça isso"

        return this.#nome;
    }

    get email(){

        return this.#email;
    }

    get nascimento(){

        return this.#nascimento;
    }

    get role(){

        return this.#role;
    }

    get ativo(){

        return this.#ativo;
    }

    exibirInfos() {

        const objUser = this.#montaObjUSer();

        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
    }
}
*/






/* // 4.5 Métodos privados

export default class User {

    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor (nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
        
    }

    // Criando um método privado
    #montaObjUSer () {
        // Método privado
        // O método "#montaObjUser" é um método privado e não pode ser chamado de fora da classe
        // Os métodos pricados são criados para proteger lógicas internas da classe 

        return ({
            // Criando e retornando um objeto

            nome: this.#nome,
                // chave/valor: chave:"nome" / valor: this.#nome  
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
             
        })
    }

    exibirInfos() {
        // O método "exibirInfos" é um método que não é pricado e pode ser chamado de fora da classe
        // Será usado o método "exibirInfos" para retornar o método que criar objeto
        // O método interno "exibirInfos" pode chamar o método privado e pode levar as informações para fora da classe devido não ser um método privado

        const objUser = this.#montaObjUSer();
            // A contante "objUser" irá receber o método "#montaObjUSer", pois ele pode ser chamado por um método interno da classe
            // Atenção: É necessário colocar os parênteses depois do nome do método que está sendo chamado

        //return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
        return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`
            // Agora não é mais necessário usar "this", pois agora será acessado por meio do objeto
            // O noms dos elementos do objeto, as chaves não tem # cerquilha, "nome", "email"  e assim vai.
    }
}
*/






/* // 4.2 Atributos privados

export default class User {
    // É usado o "export default" para exportar

    #nome
        // # indica que agora é privada
        // A cerquilha é colocada antes da declaração da variável ou função que se quer tornar privada 
        // A variável privada deve ser declarada no início da função e antes da função construtura
    #email
    #nascimento
    #role
    #ativo

    constructor (nome, email, nascimento, role, ativo = true) {

        this.#nome = nome;
            // É necessário fazer a alteração do nome onde essa propriedade é chamada, pois 'nome' é diferente de '#nome'
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
        
    }

    // Criando um método privado

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }
}
*/






/* // Aula 3.2 Estrutura de Classe

export default class User {
    // É usado o "export default" para exportar 

    constructor (nome, email, nascimento, role, ativo = true) {
        // A sintaxe que constroe uma classe
        // É um método

        this.nome = nome;
        this.email = email;
        this.nascimento = nascimento;
        this.role = role || 'estudante';
        this.ativo = ativo;
        
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

*/






// const novoUser = new User ('Juliana', 'j@j.com', '2023-01-01');
//     // Só é necessário passar esses parâmetros devido os outros dois terem valores padrões caso não seja passado algum deles

// console.log(novoUser);
//     // Retornou um objeto criado a partir da Classe "User"

// console.log(novoUser.exibirInfos())
//     // O objeto chamou o  método herdado da Classe "User" e 
//     // Retornou 2 strings, nome e email

// console.log(User.prototype.isPrototypeOf(novoUser));
//     // Retornou: true
//     // "novoUser" é um protótipo de "User", ele herda de propridades e métodos "User"