var paleta = document.querySelector('#paleta');
var grillaPixeles = document.querySelector('#grilla-pixeles');

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

recorrerColores();
crearGrilla();

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorCuadricula = document.getElementsByClassName('color-paleta');
var indicadorColor = document.getElementById('indicador-de-color');
var pixeles = document.querySelectorAll('#grilla-pixeles div');
var mouseApretado = false;

grillaPixeles.addEventListener('mousedown', function(e){
  mouseApretado = true;
  bgColor(e);
});

grillaPixeles.addEventListener('mouseup', function(){
  mouseApretado = false;
});

for (let i = 0; i < pixeles.length; i++) {
  pixeles[i].addEventListener('click', pintarPixel);
  pixeles[i].addEventListener('mouseover', function(e){
    if (mouseApretado) {
      pixeles[i].style.backgroundColor = indicadorColor.style.backgroundColor;
    }
  });
}

for (let i = 0; i < colorCuadricula.length; i++) {
  colorCuadricula[i].addEventListener('click', cambiarColor);
}

function bgColor(e){
  e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
}

function pintarPixel(e){
  bgColor(e);
}

function cambiarColor(event){
  var nuevoColor = event.target.style.backgroundColor;
  indicadorColor.style.backgroundColor = nuevoColor;
}

colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
  })
);

function recorrerColores(){
  for (let i = 0; i < nombreColores.length; i++) {
    var nuevoDiv = document.createElement('div');
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = 'color-paleta';
    paleta.appendChild(nuevoDiv);
  }
}

function crearGrilla(){
  for (let i = 0; i < 1750; i++) {
    var pixel = document.createElement('div');
    grillaPixeles.appendChild(pixel);
  }
}

