function criaDiv() {
    //criando o elemento
    var div = document.createElement('div');
    div.className = 'box';
    div.innerHTML = '<input placeholder="seu texto aqui"/>'
    document.body.appendChild(div);

    //definindo sua posição
    var x = event.clientX+'px';
    var y = event.clientY+'px';
    console.log(x, y);
    div.style.position = 'absolute';
    div.style.top = y;
    div.style.left = x;
}