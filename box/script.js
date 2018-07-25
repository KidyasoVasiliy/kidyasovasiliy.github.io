let box = document.querySelector('.box-animated'),
		topBtn = document.getElementById('btn-top'),
		bottomBtn = document.getElementById('btn-bottom'),
		leftBtn = document.getElementById('btn-left'),
		rightBtn = document.getElementById('btn-right'),
		warning = document.getElementById('blink'),
		topKey = 0,
		leftKey = 0;
		boxStyle = {
			topSt:'',
			leftSt: ''
		};
document.onkeydown = function(event){

	if(event.key == 'ArrowUp'){
		++topKey;
		box.style.top = -topKey + 'px';
		topBtn.classList.add('down_key')
	}
	if(event.key == 'ArrowDown'){
		--topKey;
		box.style.top = -topKey + 'px';
		bottomBtn.classList.add('down_key')
	}	
	boxStyle.topSt = parseInt(box.style.top);
	if(event.key == 'ArrowLeft'){
		++leftKey;
		box.style.left = -leftKey + 'px';
		leftBtn.classList.add('down_key')
	}
	if(event.key == 'ArrowRight'){
		--leftKey;
		box.style.left = -leftKey + 'px';
		rightBtn.classList.add('down_key')
	}	
	boxStyle.leftSt = parseInt(box.style.left);
			if(boxStyle.leftSt <= -1 || boxStyle.leftSt >= 271 || boxStyle.topSt <= -1 || boxStyle.topSt >= 271){
				warning.textContent = 'WARNING';
			} else if (boxStyle.leftSt > -1 || boxStyle.topSt >= 0){
				warning.textContent = '';
			}
};

document.onkeyup = function(event){
			topBtn.classList.remove('down_key')
			bottomBtn.classList.remove('down_key')
			leftBtn.classList.remove('down_key')
			rightBtn.classList.remove('down_key')
};


