class Usuario{
    // # estão privados
    #email
    #senha
    #nome 

    constructor(email, senha, nome){
        
        this.#validarEmail(email)
        
        this.#email = email
        this.#senha = senha
        this.#nome = nome
    }

    //o que quer liberar para o usuário poder ver
    get email(){ 
        return this.#email
    } 

    get senha(){
        return this.#senha
    }

    get nome(){
        return this.#nome
    }

    set email(valor){ //pode alterar o valor
        this.#email = valor 
    }

    #validarEmail(email){
       const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //regex
       
       if(!pattern.test(email)){ // se o email não passar no teste
            throw new Error("Email fora do padrão") //lança um erro     
       }
    }
}


const usuario = new Usuario("a@b.com", "123", "zé")