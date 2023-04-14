//primeiro, pegar o json do site

let pegaArquivoUsuario = async () => {

    const url = 'https://jsonplaceholder.typicode.com/users'

    let response = await fetch(url)
    let jsonObj = await (response.json()) //obj json com nomes capturada e pode ser lida.

    listaUsuariosCompleta = []

    jsonObj.forEach(function(item) {
        listaUsuariosCompleta.push(item) //crio uma lista com todos os usuarios e suas informacoes dentro de listaUsuariosCompleta
    });

    let corpo = document.getElementById("CorpodaTabela") //pegar o local no html onde quero inserir o codigo que criarei.

    listaUsuariosCompleta.forEach(u => {  //foreach itera sobre cade objeto dentro da lista que criei

        var tr = document.createElement('tr'); 
        corpo.appendChild(tr);          //adicionar elemento criado a variavel contendo o html


        var th = document.createElement('th');
        tr.appendChild(th);
        th.textContent = u.id           //adicionar texto ao elemento criado, o objeto que esta sendo iterado(u), valor da tag (id)

        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = u.name

        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = u.username

        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = u.email

        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = u.address.street //valor da tag street dentro da tag address

        var td = document.createElement('td');
        tr.appendChild(td);
        td.textContent =  u.company.name

        
    })
}

let barraBusca = async () => {

    nome = document.getElementById("input").value;

    document.getElementById("CorpodaTabela").innerHTML = ''

    console.log(nome)

    const url = 'https://jsonplaceholder.typicode.com/users';

    let response = await fetch(url);
    let jsonObj = await (response.json()); //obj json com nomes capturada e pode ser lida.

    listaUsuariosCompleta = [];

    jsonObj.forEach(function(item) {
        listaUsuariosCompleta.push(item) //crio uma lista com todos os usuarios e suas informacoes dentro de listaUsuariosCompleta
    });

    let corpo = document.getElementById("CorpodaTabela") //pegar o local no html onde quero inserir o codigo que criarei.

    listaUsuariosCompleta.forEach(function(item) {

        if (nome == item.name) {

                var tr = document.createElement('tr'); 
                corpo.appendChild(tr);          //adicionar elemento criado a variavel contendo o html
        
        
                var th = document.createElement('th');
                tr.appendChild(th);
                th.textContent = item.id           //adicionar texto ao elemento criado, o objeto que esta sendo iterado(u), valor da tag (id)
        
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = item.name
        
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = item.username
        
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = item.email
        
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = item.address.street //valor da tag street dentro da tag address
        
                var td = document.createElement('td');
                tr.appendChild(td);
                td.textContent = item.company.name
        }else{
            console.log('erro')
        }
    })
}