function youtube(){

	let youtube = document.querySelector('#q_th_D4VHC0'),
		youtubeAppStyle = document.querySelectorAll('#q_th_D4VHC0')[0],
		frameVideo = document.querySelector('.d-flex iframe');


	youtube.addEventListener('click', function(){
		youtubeAppStyle.classList.add('fadeOut');
		setTimeout(() => {
			youtube.style.display = 'none';
			frameVideo.style.display = 'block';
		}, 400);
	})

	
}
export default youtube;

