var shopping = [];


shopping[0] = "Sandwich";
shopping[1] = "Jitomates";
shopping[2] = "Cebolla";
shopping[3] = "Cereal";
shopping[4] = "Leche";
shopping[5] = "Huevo";


// $('#agregar on.('click', function(){})') con jQuery

function escribeLista(){
  var elemento = prompt("Ingresa el nuevo producto");
  if(elemento){
    shopping.push( elemento );
  }
  renderizaLista();
}
function renderizaLista(){
  var indice = 0;
  var indice_maximo = shopping.length;

  document.getElementById('lista').innerHTML ='';
  while (indice < indice_maximo){

    //escribir en la lista_compras
    //document.getElementById('lista').innerHTML =
    //document.getElementById('lista').innerHTML +
    //'<li>' + shopping [ indice ] + '</li>';

    //jQuery
    $('#lista').append( '<li class="list-group-item">' +
    shopping [ indice ] +
    "<button class = 'btn btn-danger btn-sm float-right eliminar'><i class='far fa-times-circle'></i></button>" +
    '</li>' );

    //Sin jQuery
    //var li = document.createElement('li');
    //var text = document.createTextNode(items[counter]);
    //li.appendChild(text);
    //document.getElementById('lista').appendChild(li);

    indice++;
  }
}
$(document).ready(function(){


$('#lista')
.delegate('li', 'mouseenter', function( event ){
  event.preventDefault();
  //var indice = $(this).parent().index();
  $(this).addClass('resaltado');
  });

  $('#lista')
  .delegate('li', 'mouseleave', function( event ){
    event.preventDefault();
    //var indice = $(this).parent().index();
    $(this).removeClass('resaltado');
    });

      $('#lista')
      .delegate('button.eliminar', 'mouseenter', function( event ){
        event.preventDefault();
        //var indice = $(this).parent().index();
        $(this).parent().addClass('bg-warning');
        });

      $('#lista')
      .delegate('button.eliminar', 'mouseleave', function( event ){
        event.preventDefault();
        //var indice = $(this).parent().index();
        $(this).parent().removeClass('bg-warning');
        });


    $('#lista')
    .delegate('button.eliminar', 'click', function( event ){
      event.preventDefault();
      var indice = $(this).parent().index();

      shopping = shopping.slice( indice, 1);
      renderizaLista();

      });

})
document.getElementById('agregar').addEventListener('click', escribeLista);
renderizaLista();
//sin jQuery, puro Js
