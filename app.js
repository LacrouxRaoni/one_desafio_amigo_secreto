//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function cleanField()
{
    let field = document.getElementById('amigo');
    field.value = '';
}

function showListFriends()
{
        let query = document.getElementById('listaAmigos');

        let li = document.createElement('li');
        li.textContent = friendList.at(friendList.length - 1);
        query.append(li);
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
    return (parseInt((Math.random() * len) + 1));
}

function sortearAmigo()
{
    if (friendList.length > 1)
    {
        let number = getSpecialNumber(friendList.length);
        let secretFriend = document.getElementById('resultado')
        secretFriend.innerHTML = friendList.at(number - 1);    
    }
    else
        return alert("Não existe número de amigos suficiente para ser sorteado")
}

let friendList = [];


