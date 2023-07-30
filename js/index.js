document.addEventListener("DOMContentLoaded", function() {
	// Animación del título "text-overlay"
	anime({
		targets: '.text-overlay',
		opacity: [0, 1],
		top: "40%",
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 500,
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