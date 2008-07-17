var UB_INIT_SHOW_TIMEOUT = 5000;
var UB_CLOSE_ON_OUT_TIMEOUT = 2000;

// Variavel de controle.
var mouseOverUpperBox = false;

$(document).ready(function(){
  
  // Cria uma div como primeiro item dentro do body para ser
  // o container do upper-box.
  $('body').prepend("<div id='upper-box-main'></div>");
  
  // Atribui os css basicos de estrutura ao container principal.
  var boxMain = $('#upper-box-main');
  boxMain.css('position', 'absolute');
  boxMain.css('top', '0px');
  boxMain.css('left', '0px');
  boxMain.css('width', '100%');
  
  // Colca os elementos com classe upper-box para dentro
  // do container principal.
  var box = $('.upper-box');
  boxMain.append(box);
  
  // Atribui os css basicos de estrutura ao upper-box.
  box.css('margin-left', 'auto');
  box.css('margin-right', 'auto');
  
  // Adiciona o knob (macaneta) ao upper-box.
  box.after("<div id='upper-box-knob'></div>");
  
  // Atribui os css basicos de estrutura ao knob.
  var knob = $('#upper-box-knob');
  knob.css('height', '15px');
  knob.css('margin-left', 'auto');
  knob.css('margin-right', 'auto');
	knob.css('width', box.width());
  
  // Esconde os upper-boxes.
  box.hide();
  
  // Adiciona o evento que dispara a abertura do upper-box.
  knob.mouseover(function(){ShowUpperBox();});
  
  // Eventos que controlam se o usuarios esta com o mouse sobre o upper-box.
  box.mouseover(function(){mouseOverUpperBox = true;});
  box.mouseout(function(){
    mouseOverUpperBox = false;
    setTimeout('overBoxVerify()', UB_CLOSE_ON_OUT_TIMEOUT);
  });

});

// Funcao que fecha o upper-box se o usuario nao esta com o mouse sobre ele.
function overBoxVerify()
{
  if(!mouseOverUpperBox)
    HideUpperBox();
}

// Funcao para mostrar o upper-box.
function ShowUpperBox()
{
  $('.upper-box').slideDown();
  
  // Dispara timeout para se o usuário não for até o upper_box,
  // este fecha-se para não atrapalhar a página.
  setTimeout('overBoxVerify()', UB_INIT_SHOW_TIMEOUT);
}

// Funcao para esconder o upper-box.
function HideUpperBox()
{
  $('.upper-box').slideUp();
}