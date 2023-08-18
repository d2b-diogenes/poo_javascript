// 4.8 Faça como eu fiz: outro exemplo de setter

class User {

    #nome
    #sobrenome
    #email
    #nascimento
    constructor (nome, sobrenome, email, nascimento) {

        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento; 
    }

    get nome() {

        return `${this.#nome} ${this.#sobrenome}`;
    }

    set nome(novoNome) {
        // Irá receber um nome completo com nome e sobre nome e irá dividir em 2 para settar as duas propriedades, #nome e #sobrenome
        
        if (novoNome === '') {
            throw new Error ('Formado não válido.')
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
            // Separa o primeiro nome e atribui em "nome"
            // ... é o Spread Operator.
            // Ele irá pegar os demais sobrenomes e irá espalhá-los no objeto "sobrenome"

        // console.log([nome, sobrenome]); // Vendo o comportamento desse objeto
        //     // [ 'Maria', [ 'Fernanda', 'Vaz' ] ]
            // Retorna um objeto com 2 elementos, 1 nome e 1 objeto contendo o(s) sobrenome(s) 

        sobrenome = sobrenome.join(" ");
            // ".join()" é um método que junta todos os elementos de um Array e retorna uma string
            // ".join(" ")" Ele irá retornar uma string com os elementos do objeto com um espaço entre eles

        // console.log(sobrenome);
        //     // Fernanda Vaz

        this.#nome = nome
        this.#sobrenome = sobrenome;

    }

}

const novoUser = new User ('Carla', 'Silva', 's@s.com', '2020-01-01');
    // Criou o objeto por meio da classe "User"

console.log(novoUser.nome);

novoUser.nome = 'Maria Fernanda Vaz'

console.log(novoUser.nome);