//Slider
document.addEventListener('DOMContentLoaded', function() {
	var splide = new Splide('.splide', {
		perPage: 3,
		focus: 0,
		omitEnd: true,
	});

	splide.mount();
});