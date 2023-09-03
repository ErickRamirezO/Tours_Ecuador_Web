$(document).ready(function() {

  const languageSwitch = $('#language-switch');

  languageSwitch.on('change', function() {
    if (languageSwitch.is(':checked')) {
      traducirElementos('en');
    } else {
      traducirElementos('es');
    }
  });

  function traducirElementos(language) {
    $.ajax({
      url: `../traducciones/${language}.json`,
      dataType: 'json',
      success: function(data) {
        //Traduciendo la barra de navegación
        $('#inicio p').text(data['inicio']);
        $('#acerca p').html(`${data['acerca']} <i class="fa-solid fa-chevron-up"></i>`);
        $('#contacto p').text(data['contacto']);

        //Slogan
        $(".frase_tours_ecuador").text(data['frase']);
        //Traduciendo el footer
        $(".siguenos").text(data['siguenos']);
        $(".copyright p").text(data['copyright']);

        $('.viaja').text(data['viaja']);
        $('.explora').text(data['explora']);
        $('.descubre').text(data['descubre']);
      },
      error: function() {
        console.error('Error al cargar las traducciones de los elementos');
      }
    });
  }

});