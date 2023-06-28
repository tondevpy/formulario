let btnAction = document.getElementById('btnAction')
let valor = 0

btnAction.addEventListener('click', function (event) {
    if (valor === 0) {

        let retorno = document.getElementById('retorno').innerText = 'Esse script é escrito em JavaScript e contém funcionalidades de manipulação do DOM (Document Object Model) para criar um formulário de cadastro em uma página HTML.\n\nEm resumo, esse script cria um formulário de cadastro dinamicamente quando o botão de ação é clicado e realiza validações simples ao enviar o formulário. '
        let section = document.getElementById('containerSection')

        let tituloCadastro = document.createElement('h1')
        tituloCadastro.innerText = 'Cadastro'
        tituloCadastro.style.textAlign = 'center'

        let label1 = document.createElement('label')
        label1.innerText = 'Nome'
        label1.style.display = 'block'

        let nome = document.createElement('input')
        nome.placeholder = 'Informe seu nome'
        nome.id = 'nome'
        nome.style.display = 'block'

        let label2 = document.createElement('label')
        label2.innerText = 'Sobrenome'
        label2.style.display = 'block'

        let sobrenome = document.createElement('input')
        sobrenome.placeholder = 'Informe seu sobrenome'
        sobrenome.id = 'sobrenome'
        sobrenome.style.display = 'block'

        let label3 = document.createElement('label')
        label3.innerText = 'Data de Nascimento'
        label3.style.display = 'block'

        let nascimentoDia = document.createElement('input')
        nascimentoDia.id = 'nascimento'
        nascimentoDia.type = 'number'
        nascimentoDia.max = '31'
        nascimentoDia.min = '1'
        nascimentoDia.placeholder = 'Dia'
        nascimentoDia.style.width = '35px'

        let nascimentoMes = document.createElement('input')
        nascimentoMes.id = 'nascimento'
        nascimentoMes.type = 'number'
        nascimentoMes.max = '12'
        nascimentoMes.min = '1'
        nascimentoMes.placeholder = 'Mês'
        nascimentoMes.style.width = '40px'

        let nascimentoAno = document.createElement('input')
        nascimentoAno.id = 'nascimento'
        nascimentoAno.type = 'number'
        nascimentoAno.max = '1900'
        nascimentoAno.min = '2023'
        nascimentoAno.placeholder = 'Ano'
        nascimentoAno.style.width = '45px'

        let btnEnviar = document.createElement('button')
        btnEnviar.innerText = 'Enviar'
        btnEnviar.style.display = 'block'
        btnEnviar.id = 'btnEnviar'

        // aplicar o background de fundo
        document.getElementById('containerSection').style.background = 'lightgray'
        document.getElementById('containerSection').style.boxShadow = '5px 5px 20px black';

        section.appendChild(tituloCadastro)

        section.appendChild(label1)
        section.appendChild(nome)

        section.appendChild(label2)
        section.appendChild(sobrenome)

        section.appendChild(label3)
        section.appendChild(nascimentoDia)
        section.appendChild(nascimentoMes)
        section.appendChild(nascimentoAno)

        section.appendChild(btnEnviar)

        valor = 1

    } else {
        alert('O formulário ja foi aberto, não é possível abrir outro formulário')
    }


});



document.addEventListener('click', function (evento) {
    let btnEnviar = document.getElementById('btnEnviar')
    if (evento.target === btnEnviar) {
        let nome = document.getElementById('nome').value
        let sobrenome = document.getElementById('sobrenome').value
        let nascimentoDia = document.getElementById('nascimento').value
        let nascimentoMes = document.getElementById('nascimento').value
        let nascimentoAno = document.getElementById('nascimento').value

        if (nome && sobrenome && nascimentoDia && nascimentoMes && nascimentoAno) {
            alert('Formulário enviado com sucesso!')
            document.getElementById('nome').value = '';
            document.getElementById('sobrenome').value = '';
            document.getElementById('nascimentoDia').value = '';
            document.getElementById('nascimentoMes').value = '';
            document.getElementById('nascimentoAno').value = '';
        } else {
            alert('Preencha todos os campos para realizar o cadastro')
        }
    }

})