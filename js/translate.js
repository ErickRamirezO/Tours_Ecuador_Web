function traducirElementos(language) {
  $.ajax({
    url: `../traducciones/${language}.json`,
    dataType: 'json',
    success: function(data) {
      $('.viaja').text(data['viaja']);
      $('.explora').text(data['explora']);
      $('.descubre').text(data['descubre']);
    },
    error: function() {
      console.error('Error al cargar las traducciones de los elementos');
    }
  });
}

function traducirElementosComunes(language) {
  $.ajax({
    url: `../traducciones/${language}_common.json`,
    dataType: 'json',
    success: function(data) {
      //Traduciendo la barra de navegación
      $('#inicio p').text(data['inicio']);
      $('#acerca p').html(`${data['acerca']} <i class="fa-solid fa-chevron-up"></i>`);

      //Slogan
      $(".frase_tours_ecuador").text(data['frase']);
      //Traduciendo el footer
      $(".siguenos").text(data['siguenos']);
      $(".copyright p").text(data['copyright']);
    },
    error: function() {
      console.error('Error al cargar las traducciones comunes');
    }
  });
}

// Cambiar al idioma inglés
$('#ingles_btn').click(function() {
  console.log('Cambiando a inglés');
  traducirElementos('en');
  traducirElementosComunes("en");
});

// Cambiar al idioma español
$('#español_btn').click(function() {
  console.log('Cambiando a español');
  traducirElementos('es');
  traducirElementosComunes("es");
});