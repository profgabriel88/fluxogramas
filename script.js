var id = 0;
var minhasDivs = []
var corpo = document.getElementById('corpo');

function criaDiv(btn = undefined) {
    //criando o elemento
    var div = document.createElement('div');
    div.id = 'txt'+id;
    div.className = 'box';
    div.innerHTML = '<textarea placeholder="seu texto aqui"></textarea><button style="border:none; border-radius:50%" onclick="criaDiv(this);">+</button>';
    document.body.appendChild(div);

    var x, y;
    //definindo sua posição
    if (btn === undefined) {
        x = event.clientX+'px';
        y = event.clientY+'px';
    }
    else {
        let idNovo = btn.parentNode.id;
        var xX = document.getElementById(idNovo);
        x = xX.style.left.replace('px', '');
        x = parseInt(x) + 300 + 'px';
        y = xX.style.top;
    }
    console.log(x, y);
    div.style.position = 'absolute';
    div.style.top = y;
    div.style.left = x;

    id++;

    minhasDivs.push(div);
}

corpo.addEventListener('keydown', (CONTROL) => {
    alert("abacaxi");
})
