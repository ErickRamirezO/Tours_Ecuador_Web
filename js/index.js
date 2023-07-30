document.addEventListener("DOMContentLoaded", function() {
	// Obtener el texto
	const textOverlay = document.querySelector('.text-overlay');
	const text = textOverlay.textContent;
	textOverlay.textContent = "";

	// Crear un span para cada letra del texto
	for (let i = 0; i < text.length; i++) {
		const letter = document.createElement('span');
		letter.textContent = text[i];
		textOverlay.appendChild(letter);
	}

	// Animación de cada letra del texto
	const letters = textOverlay.querySelectorAll('span');

	anime({
		targets: letters,
		opacity: [0, 1],
		top: "40%",
		duration: 200,
		easing: 'easeOutExpo',
		delay: function(el, i) {
			return i * 50;
		},
	});

	// Animación de los divs de "primera-portada", "segunda-portada" y "tercera-portada"
	anime({
		targets: '.indexportada > div',
		opacity: [0, 1],
		translateX: [20, 0],
		duration: 1000,
		easing: 'easeOutExpo',
		delay: anime.stagger(500),
	});
});