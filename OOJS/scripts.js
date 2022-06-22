class contaBancaria{
    constructor(agencia, conta, tipo, saldo){
        this.agencia = agencia;
        this.conta = conta;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        return this._saldo = valor;
    }

    sacar (valor){
        if(valor > this._saldo){
            return 'Operação negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, conta, cartaoDeCredito){
        super(agencia, conta,);
        this.tipo = 'corrente';
        this._cartaoDeCredito = cartaoDeCredito;
    }

    get cartaoDeCredito(){
        return this._cartaoDeCredito;
    }

    set cartaoDeCredito(valor){
        this._cartaoDeCredito = valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, conta,){
        super(agencia, conta,);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, conta,){
        super(agencia, conta,);
        this.tipo = 'universitária';
    }

    sacar(valor){
        if(valor > 500){
            return 'Operação negada';
        }

         this._saldo = this._saldo - valor;

         return this._saldo;
    }
}