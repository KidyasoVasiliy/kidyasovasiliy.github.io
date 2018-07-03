function mainSlider() {

	//Слайдер
	let slideIndex	= 1,
		slides 		= document.querySelectorAll('.a-slide'),
		dotsWrap 	= document.querySelector('.slider-dots'),
		dot 		= document.getElementsByClassName('dot');
		
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

		let timer;
		function autoSlide(){
			plusSliders(1)
			timer = setTimeout(autoSlide, 3000);
			console.log(1)
		}
		setTimeout(autoSlide, 3000);

		dotsWrap.addEventListener('click', function(event) {
			for (let i = 0; i < dot.length + 1; i++) {
				if (event.target.classList.contains('dot') && event.target == dot[i-1]) currentSlide(i);
			}
		});	

		
		//для хрома
		window.onresize = function(event) {
	        if(screen.width < 1000){
				clearTimeout(timer)
				document.querySelector('.wrap-dots').style.display = 'none';
			} else {
				// setTimeout(autoSlide, 3000);
				document.querySelector('.wrap-dots').style.display = 'block';
			}
	    }
	    // для остальных браузеров
	    if (window.innerWidth<1000) {
	    	clearTimeout(timer)
			document.querySelector('.wrap-dots').style.display = 'none';
	    } else {
	    	document.querySelector('.wrap-dots').style.display = 'block';
	    }




}
export default mainSlider;