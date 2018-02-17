var shopping = [];


shopping[0] = "Sandwich";
shopping[1] = "Jitomates";
shopping[2] = "Cebolla";
shopping[3] = "Cereal";
shopping[4] = "Leche";
shopping[5] = "Huevo";
shopping[6] = "Limones";
shopping[7] = "Jamon";
shopping[8] = "Cafe";
shopping[9] = "Pan";
shopping[10] = "Azucar";
shopping[11] = "Galletas";
shopping[12] = "Shampoo";
shopping[13] = "Pasta";
shopping[14] = "Yogurt";
shopping[15] = "Aguacate";

// $('#agregar on.('click', function(){})') con jQuery

function escribeLista(){
  var elemento = prompt("Ingresa el nuevo producto");
  if(elemento){
    shopping.push( elemento );
  }
  var indice = 0;
  var indice_maximo = shopping.length;

  document.getElementById('lista').innerHTML ='';
  while (indice < indice_maximo){

    //escribir en la lista_compras
document.getElementById('lista').innerHTML =
document.getElementById('lista').innerHTML +
'<li>' + shopping [ indice ] + '</li>'
    indice++;
  }
}

document.getElementById('agregar').addEventListener('click', escribeLista);
escribeLista();
//sin jQuery, puro Js
