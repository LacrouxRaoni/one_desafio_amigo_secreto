//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function cleanField()
{
    let field = document.getElementById('amigo');
    field.value = '';
}

function showListFriends()
{
    if (friendList.length > 0)
    {   
        let query = document.getElementById('listaAmigos');
        query.innerHTML = friendList;
    }
}

function adicionarAmigo()
{
    let friend;

    friend = document.getElementById('amigo').value;
    if (!friend)
        return alert("Favor informar um nome valido");
    friendList.push(friend);
    cleanField();
    showListFriends();
}

function getSpecialNumber(len)
{
    let n = parseInt((Math.random() * len) + 1)
    return n;
}

function sortearAmigo()
{
    let len = friendList.length;
    if (len > 1)
    {
        let number = getSpecialNumber(len);
        let secretFriend = document.getElementById('resultado')
        secretFriend.innerHTML = friendList.at(number - 1);    
    }
    else
        return alert("Não existe número suficiente de amigos para ser sorteado")
}

let friendList = [];


