document.addEventListener("DOMContentLoaded", function() {
	var textWrapper = document.querySelector('.titulo');
	textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
	anime({
		targets: '.imagen_a',
		opacity: [0.5, 1],
		translateX: [250, -250],
		easing: "easeOutExpo",
		duration: 2700,
		complete: function() {
			anime({
				targets: '.imagen_a',
				rotateY: '180deg', 
				easing: "easeOutExpo",
				duration: 1000
			});
		}
	});
	anime({
		targets: '.letter',
		opacity: [0, 1],
		easing: "easeOutExpo",
		duration: 600,
		offset: '-=775',
		delay: (el, i) => 34 * (i + 1)
	});
});