var boton = document.getElementById("btn");
var ord = document.getElementById("ordenar");
boton.addEventListener("click", scribid);
ord.addEventListener("click", ordenar);

var lista = [];
lista[0] = 0;




function scribid()
{
    if(lista.length == 256)
    {
        console.log("Ya es toda wey");
        return 0;
    }
    var bandera = false;
    let i = 0;
    do{
        
        var z = aleatorio(0,255);
        bandera = buscar(z);
        if(bandera == false)
        {
            lista.push(z);
        }
        else{
            i = i +1;
            console.log("Está repetido" + " " + i);
        }
    }while(bandera == true);
    console.log(z);
}

function buscar(target)
{
    for(var numero in lista)
    {
        if(target == lista[numero])
        {
            return true;
        }
        else
        {
            var check = false;
        }
    }
    return check;
}

function ordenar()
{
    for(var i in lista)
    {
        for(var d in lista)
        {
            if(lista[i] < lista[d])
            {
                var aux = lista[d];
                lista[d] = lista[i];
                lista[i] = aux;
            }
        }
    }
    console.log(lista);
}



function aleatorio(min, max)
{
	var resultado;
	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
	return resultado;
}