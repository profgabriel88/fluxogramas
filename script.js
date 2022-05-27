var id = 0;

function criaDiv(btn = 0) {
    //criando o elemento
    var div = document.createElement('div');
    div.id = 'txt'+id;
    div.className = 'box';
    div.innerHTML = '<textarea placeholder="seu texto aqui"></textarea><button style="border:none; border-radius:50%" onclick="criaDiv(1);">+</button>';
    document.body.appendChild(div);

    var x, y;
    //definindo sua posição
    if (btn == 0) {
        x = event.clientX+'px';
        y = event.clientY+'px';
    }
    else {
        let txtId = 'txt'+id-1;
        var xX = document.getElementById(txtId)
        x = xX.style.top.x;
        y = xX.style.top.y + 50;
    }
    console.log(x, y);
    div.style.position = 'absolute';
    div.style.top = y;
    div.style.left = x;

    id++;
}


