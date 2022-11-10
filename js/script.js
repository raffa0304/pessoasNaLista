class Funcionarios {

    constructor() {

        this.id = 1;
        this.arrayFuncionarios = [];

    }

    incluir() {

        let funcionarios = this.lerDados();

        if (this.validarFuncionario(funcionarios)) {

            alert('Pessoa incluida com sucesso!');
            this.adicionarFuncionario(funcionarios);
        }

        this.tabelaFuncionarios();
        this.limparDados();

    }

    tabelaFuncionarios() {

        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for (let i = 0; i < this.arrayFuncionarios.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_idade = tr.insertCell();
            let td_acoes = tr.insertCell();

            td_id.innerText = this.arrayFuncionarios[i].id;
            td_nome.innerText = this.arrayFuncionarios[i].nomeFuncionario;
            td_idade.innerText = this.arrayFuncionarios[i].idadeFuncionario;

            let botaoExcluir = document.createElement('button');
            let textoBotaoExcluir = document.createTextNode("Excluir");

            botaoExcluir.setAttribute("onclick", "funcionarios.excluir(" + this.arrayFuncionarios[i].id + ")");

            botaoExcluir.appendChild(textoBotaoExcluir);
            td_acoes.appendChild(botaoExcluir);



        }
    }

    adicionarFuncionario(funcionarios) {

        this.arrayFuncionarios.push(funcionarios);
        this.id++;
    }

    lerDados() {

        let funcionarios = {}

        funcionarios.id = this.id;
        funcionarios.nomeFuncionario = document.getElementById('nome').value;
        funcionarios.idadeFuncionario = document.getElementById('idade').value;

        return funcionarios;
    }

    validarFuncionario(funcionarios) {


        if (funcionarios.nomeFuncionario == '' || funcionarios.idadeFuncionario == '') {
            alert('Informe o nome e a idade da Pessoa!');
            return false;

        }

        return true;

    }

    limparDados() {

        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
    }

    excluir(id) {
        if (confirm('Deseja excluir a Pessoa? ')) {
            let tbody = document.getElementById('tbody');

            for (let i = 0; i < this.arrayFuncionarios.length; i++) {
                if (this.arrayFuncionarios[i].id == id) {
                    this.arrayFuncionarios.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }

        }

    }



}


var funcionarios = new Funcionarios();
