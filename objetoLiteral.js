// Aula 2.6 Herança de Protótipo

const user = { 

    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () { 
        
        console.log(this.nome, this.email)
    }
}

const admin = { 

    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();

admin.exibirInfos();




/*// Aula 2.6 Herança de Protótipo

const user = { 

    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () { 
        // Método que é pertinente com o objeto a qualquer usuário
        
        console.log(this.nome, this.email)
    }
}

const admin = { 

    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        // Método que é pertinente com o objeto "admin"
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);
    // O método do Object. O 'setPrototypeOf' vai definir um protótipo.
    // Ele leva 2 parâmetros, o 1º é o objeto que vai herdar as propriedades e o 2º é o objeto que irá ceder as propriedades

admin.criarCurso(); // Chamando a função que é pertinente ao objeto 'admin'
    // Retorna o esperado, o resultado da função que pertence ao próprio objeto, "curso criado"

admin.exibirInfos(); // Chamando a função que está no objeto 'user'
    // Retorna o esperado, o resultado da função que pertence a outro objeto, ao objeto 'user'
    // Isso é possível devido objeto 'admin' está usando como protótipo o objeto 'user'. 
    // O 'setPrototypeOf' faz com que um objeto herde propriedade um dos outros. No caso, o objeto 'admin' está herdando as propriedades do objeto 'user'.

    // Cadeia de protótipo: A busca de objeto em objeto procurando o método ou propriedade para acessar
    // É possível fazer com que os objetos herdam recursos um dos outros até que cheguem no final do processo, onde o JS vai encontrar o próprio protótipo do objeto Object
    // O objeto Object é a base que define que todos os objetos criados com o JS tem dentro deles o protótipo de objetct, onde estão definidos todos os métodos que são comuns a todos os objetos
*/





/* // Aula 2.3 Entendendo o This

const user = { 

    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "admin",
    ativo: true,
    exibirInfos: function () { 
        
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos();
    // Retorna:
    // Juliana j@j.com

// const exibir = user.exibirInfos;
    // Foi atribuida para a constante a função do objeto "user"

// const exibir = user.exibirInfos;

// exibir();
    // Retorno:
    // Undefined Undefined
    // Isso aconteceu porque foi atribuida para a contante apenas a função, um pedaço do objeto, e
    // quando essa função foi executada, a função foi chamada só e sem contexto para buscar "this,nome" e "this.email"
    // Seria o mesmo que:

const exibir = function() {
    console.log(this.nome, this.email)
}

const exibirNome = exibir.bind(user);

//exibirNome();
    // Retorno
    // Juliana j@j.com
    // ".bind()" fez uma conexão entre a função "exibir" e o contexto do objeto "user"
    // Agora a função "exibir()" pegar o contexto do "user"

//exibir();
    // Retorno:
    // Undefined Undefined
    // Continuou sem exibi o resultado por não ter um contexto

const exibirDados = user.exibirInfos.bind(user);
    // Foi dado um contexto
    // Agora a função "exibirDados" irá imprimir as informações da função "exibirInfos", pois agora ele está conectado pelo .bind()
exibirDados();
*/