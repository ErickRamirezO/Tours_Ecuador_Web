const primero = document.querySelector('.primero'),
  segundo = document.querySelector('.segundo'),
  tercero = document.querySelector('.tercero');
document.addEventListener('click', e => {
  if (e.target.matches('.paginacion-pri')) {
    primero.style.display = 'block';
    segundo.style.display = 'none';
    tercero.style.display = 'none';
  } else if (e.target.matches('.paginacion-seg')) {
    primero.style.display = 'none';
    segundo.style.display = 'block';
    tercero.style.display = 'none';
  } else if (e.target.matches('.paginacion-ter')) {
    primero.style.display = 'none';
    segundo.style.display = 'none';
    tercero.style.display = 'block';
  }


})