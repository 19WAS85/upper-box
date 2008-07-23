// Constantes de controle de tempo.
var UB_CLOSE_ON_OUT_TIMEOUT = 1500;
var UB_INIT_SHOW_TIMEOUT = 3000;

// Variaveis de controle.
var timers = [];

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
  
  // Colca o upper-box para dentro do container principal.
  var box = $('.upper-box');
  boxMain.append(box);
  
  // Atribui os css basicos de estrutura ao upper-box.
  box.css('margin-left', 'auto');
  box.css('margin-right', 'auto');
  
  // Adiciona o knob (macaneta/puxador) ao upper-box.
  box.after("<div id='upper-box-knob'></div>");
  
  // Atribui os css basicos de estrutura ao knob.
  var knob = $('#upper-box-knob');
  knob.css('height', '15px');
  knob.css('margin-left', 'auto');
  knob.css('margin-right', 'auto');
	knob.css('width', box.width());
  
  // Esconde o upper-box.
  box.hide();
  
  // Adiciona o evento que dispara a abertura do upper-box.
  knob.mouseover(function(){showUpperBox();});
  
  // Evento que apaga os eventos "esperando" para fechar o upper-box.
  box.mouseover(function(){
    clearTimers();
  });
  
  // Dispara o evento que fecha o upper-box.
  box.mouseout(function(){
    timers.push(setTimeout('hideUpperBox()', UB_CLOSE_ON_OUT_TIMEOUT));
  });

});

// Funcao para mostrar o upper-box.
function showUpperBox()
{
  $('.upper-box').slideDown();
  
  // Dispara timeout para servir como um "timeout".
  timers.push(setTimeout('hideUpperBox()', UB_INIT_SHOW_TIMEOUT));
}

// Funcao para esconder o upper-box.
function hideUpperBox()
{
  $('.upper-box').slideUp();
}

// 
function clearTimers()
{
  for(var i=0; i<timers.length; i++) clearTimeout(timers[i]);
  timers = [];
}