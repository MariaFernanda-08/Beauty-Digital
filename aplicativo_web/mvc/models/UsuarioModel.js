class Usuario{
    // # estão privados
    #id
    #nome
    #email
    #senha 

    constructor(nome, email, senha){
        
        this.#validarEmail(email)
        
        this.#nome = nome
        this.#email = email
        this.#senha = senha
    }

    //o que quer liberar para o usuário poder ver
    get id(){
        return this.#id
    }
    
    get email(){ 
        return this.#email
    } 

    get senha(){
        return this.#senha
    }

    get nome(){
        return this.#nome
    }
    
    //o programador pode alterar o valor
    set email(valor){ 
        this.#email = valor 
    }

    set id(valor){
        this.#id = valor
    }

    #validarEmail(email){
       const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ //regex
       
       if(!pattern.test(email)){ // se o email não passar no teste
            throw new Error("Email fora do padrão") //lança um erro     
       }
    }
}

module.exports = Usuario