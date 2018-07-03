function guestbook(){
	let slideIndex	= 1,
		imageBoxGuest = document.querySelectorAll('.image-box-guest div');
	console.log(imageBoxGuest)


	function showSlide(n) {
		for(let i = n; i < imageBoxGuest.length; i++){
			imageBoxGuest[i].style.display = 'none';
		}
	}
	showSlide(slideIndex)


			function showSlides(n) {
				if (n > imageBoxGuest.length) 	{
					slideIndex = 1;
				} else if (n < 1) {
					slideIndex = imageBoxGuest.length;
				}

				for (let i = 0; i < imageBoxGuest.length; i++) {
					imageBoxGuest[i].style.display = 'none';
				}
				imageBoxGuest[slideIndex - 1].style.display = 'block';
			}

	let arrow1 = document.querySelector('.builder7 .arrow1'),
		arrow2 = document.querySelector('.builder7 .arrow2');


	function plusSliders (n) {
		showSlides(slideIndex += n);
	}
	arrow2.onclick = function(){
		plusSliders (1)
	}
	arrow1.onclick = function(){
		plusSliders (-1)
	}





}
export default guestbook;




