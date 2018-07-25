function bookWishesSlider(){
	let slideIndex = 1,
		slides = document.querySelectorAll('.book-block .slider-book .a-slide-book');

	let dot = document.querySelectorAll('.wrap-book-slider .slider-book-dots .dot'),
		dotsWrap = document.querySelector('.wrap-book-slider .slider-book-dots');

	let prev = document.querySelector('.book-block .arrow-book-blok .arrow1'),
		next = document.querySelector('.book-block .arrow-book-blok .arrow2');


		showSlides(slideIndex);
		
			function showSlides(n) {
				if (n > slides.length) 	{
					slideIndex = 1;
				} else if (n < 1) {
					slideIndex = slides.length;
				}

				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none';
				}
				for (let i = 0; i < dot.length; i++) {
					dot[i].classList.remove('dot-active');
				}

				slides[slideIndex - 1].style.display = 'block';
				dot[slideIndex - 1].classList.add('dot-active');
			}

		function plusSliders (n) {
			showSlides(slideIndex += n);
		}

		function currentSlide(n) {
			showSlides(slideIndex = n);
		}

		prev.addEventListener('click', () => {
			plusSliders(-1);
		});

		next.addEventListener('click', () => {
			plusSliders(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dot.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dot[i-1]) currentSlide(i);
			}
		});


	function timeoutSlider(){
		plusSliders(1)
		setTimeout(timeoutSlider, 3000)
	}
	setTimeout(timeoutSlider, 1000)


}
export default bookWishesSlider;