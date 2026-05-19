export default class RealizarPagamento {
    #pagamentos
    constructor(){
        this.#pagamentos = [];
    }
    registroDePagamento(codigoDeBarras, empresa, valor){
        let categoria = 'padrao';
        
        if (valor > 100.00){
            categoria = 'cara';
        }
        this.#pagamentos.push({
            codigoDeBarras: codigoDeBarras,
            empresa: empresa,
            valor: valor,
            categoria: categoria
        })
    }
    consultarUltimoPagamento(){
        return this.#pagamentos.at(-1)
    }
}
