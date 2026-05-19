import RealizarPagamento from "../src/servicoDePagamento.js";
import assert from 'node:assert';

describe('Testes para validações da classe RealizarPagamento', function(){

    it('Validar que ao registrar um pagamento maior que 100.00 a categoria tem o status de cara', function(){
        const realizarPagamento = new RealizarPagamento();
        realizarPagamento.registroDePagamento('12345312-123432-7', 'BancoMaster', 100.01);
        const retorno = realizarPagamento.consultarUltimoPagamento();
        assert.equal(retorno.categoria, 'cara'); 
    });
    it('Validar que ao registrar um pagamento menor que 100.00 a categoria tem o status de cara', function(){
        const realizarPagamento = new RealizarPagamento();
        realizarPagamento.registroDePagamento('12345312-123432-7-0001', 'Banco Bom Sucesso', 99.99);
        const retorno = realizarPagamento.consultarUltimoPagamento();
        assert.equal(retorno.categoria, 'padrao'); 
    });    
    it ('Validar o método de consulta do útimo pagamento', function(){
        const realizarPagamento = new RealizarPagamento();
        realizarPagamento.registroDePagamento('12345312-123432-7', 'BancoMaster', 100.01);
        realizarPagamento.registroDePagamento('12345312-123432-7-0001', 'Banco Bom Sucesso', 50.02);
        const retorno = realizarPagamento.consultarUltimoPagamento();
        assert.equal(retorno.codigoDeBarras, '12345312-123432-7-0001');
        assert.equal(retorno.empresa, 'Banco Bom Sucesso');
        assert.equal(retorno.valor, 50.02);
        assert.equal(retorno.categoria, 'padrao');
    });
    
});