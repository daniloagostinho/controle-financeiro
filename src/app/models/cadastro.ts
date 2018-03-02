export class Cadastro {
    nome: string;
    email: string;
    login: string;
    senha: string

    constructor(
        _nome: string,
        _email: string,
        _login: string,
        _senha: string) {

        this.nome = _nome;
        this.email = _email;
        this.login = _login;
        this.senha = _senha;
    }
}