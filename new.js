// 2.10 Object.create() vs New

    // "New" é usado para criar instâncias de objetos através de uma função construtora
    // As funções construtoras são equivalentes às classes para trabalhar com orientação a objetos
    // Ambas são formas para a criação de modelos de criação de um objetos

// function User (nome, email) {
//     // "User" é uma função construtora / Classe
//     // Os nomes das classes iniciam com letra maiuscula 

//     this.nome = nome;
//         // "this.nome" é uma propriedade e "nome" é parâmetro
//     this.email = email;
//     // "this.email" é uma propriedade e "email" é parâmetro

//     this.exibirInfos = function () {
//         // Um método do objeto, é um método que irá exibir informações

//         return `${this.nome}, ${this.email}`;
//             // Irá retornar o nome e o e-mail do contexto
//     }
// }

// Usando o Construtor para criar Objetos

// const novoUser = new User ('Juliana', 'j@j.com');
    // Foi criada uma nova instância da classe "User" usando o termo "new"
    // A contante "novoUser" vai receber esse novo objeto
    // Ao criar o objeto, o JS vai verificar no prototype o que ele tem que encaixar na cadeia de protótipo, que, no caso, são as propriedades e os métodos do "User"
    // "User" é o portótipo do objeto "novoUser"

// console.log(novoUser.exibirInfos());
    // Como o método "exibirInfos()" já retorna as informações, então foi necessário envolver entre o "console.log" para que fosse mostrado
    // "novoUser" passar a ter as proprieddes e os métodos do construtor
    // Quando o objeto "novoUser" chamado o método do construtor, o contexto passado é o do bjeto "novoUser"



// Usando o Object.create() para criar Objetos

// function Admin (role) {
//     // "Admin" é outra função construtora / Classe
//     // Esssa Classe irá receber 

//     User.call(this, 'Juliana', 'j@j.com')
//         // "User" chama a CLasse que se quer herdar
//         // ".call()" é o método que faz com que "Admin" receba as propriedades do "User" e, assim, possa invocar "User" passando propriedades para ele.
//         // 3 parâmetros são passado para a ".call()": 'this' que siginifica , 'Juliana' o 1º parãmetro que a Classe "User" espera receber e o 'j@j.com' 2º parâmetro que a classe "User" espera receber
    
//     this.role = role || 'estudante';
//         // "this.role" irá pegar o valor vindo parâmetro, mas se não for passado nenhum parâmetro, então o valor padrão serã "estudante"

// }

// Admin.prototype = Object.create(User.prototype);
//     // Criando um novo objeto a partir do Object.create()
//     // É passado como parâmetro para o "Object.create()" o protótipo "User"
//     // "Admin.prototype" recebeu por meio do "Object.create()" as propriedades do "User.prototype"

// const novoUser = new Admin('Admin');
//     // Depois que "Admin" recebeu as propriedades do protótipo "User"
//     // A constante "novoUser" irá receber o objeto "Admin" criado por meio do "new" e irá receber como parâmetro 'Admin'

// console.log(novoUser.exibirInfos());
//     // Retorno: Juliana, j@j.com
//     // O objeto "Admin" passa a ter como o "User" como protótipo.
//     // O objeto "novoUser" criado a partir de "Admin" consegue chamar o método "exibirInfos()" do protótipo "User"

// console.log(novoUser.role);
//     // Retorno: Admin
//     // "role" é uma propriedade do objeto "novoUser"



// Construindo um objeto Literal

// const User = {
//     // Criado um objeto literal
//     // Não foi criada uma função construtura para criar a partir dela um objeto

//     exibirInfos: function (nome) {
//         // Método criado para exibir informações "exibirInfos"

//         return nome;
//     }

// }

// const novoUser = Object.create(User);
    // "novoUser" receber o objeto criado a partir do "Object.create()" tendo como protótipo "User"

// console.log(novoUser.exibirInfos('Juliana'));
    // Chamando pelo objeto "novouser" o método do portóripo "User"
    // Retorno: "Juliana"

// console.log(User.isPrototypeOf(novoUser));
    // Testando para ver ser se "User" é protótipo de "novoUser"
    // Retorno "true"



const User = {
    
    init: function (nome, email) {
        // É uma forma de criar um método construtor na mão para objetos literais
        // "init:" substitu a função construtora
    
        this.nome = nome;
        this.email = email;
    },
    
    // exibirInfos: function (nome) {
    exibirInfos: function () {
        // A função "exibirInfos()" não precisa mais receber parâmetro, pois o método "init:" já recebeu 
    
        // return nome;
        return this.nome;
            // Agora é necessário colocar o "this" para dar o contexto para quando for chamado por outros objetos
    }
    
 }
    
const novoUser = Object.create(User);
 
novoUser.init('Juliana', 'j@j.com');
    // Chamando pelo objeto "novoUser" o método "init:" do protótipo "User"
    // Agora os dados serão passados por meio desse método para dentro do objeto "novoUser"

// console.log(novoUser.exibirInfos('Juliana'));
console.log(novoUser.exibirInfos());
    // Não é mais necessário passar o parâmetro, pois a função "init()" já recebeu
