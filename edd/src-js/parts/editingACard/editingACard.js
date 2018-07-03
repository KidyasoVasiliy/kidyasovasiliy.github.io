function editingACard(){

	let editingACardBtn = document.querySelector('.choice .choice__btns .choice__btn-1'),
		invitationBlock = document.querySelector('.no-gutters .invitation-block'),
		invitationItem = document.querySelector('.no-gutters .invitation-block__item');




	let invitationBlockNEW = invitationBlock.cloneNode(false);
		invitationBlockNEW.style.display = 'none';

	let invitationItemNEW = invitationItem.cloneNode(false);

	let input1 = document.createElement('INPUT'); input1.setAttribute("type", "text"); input1.setAttribute("class", "inputInvitation"); input1.setAttribute("placeholder", "Ваше приглашение");
	let input2 = document.createElement('INPUT'); input2.setAttribute("type", "text"); input2.setAttribute("class", "inputInvitation"); input2.setAttribute("placeholder", "Ваши имена");
	let input3 = document.createElement('INPUT'); input3.setAttribute("type", "text"); input3.setAttribute("class", "inputInvitation"); input3.setAttribute("placeholder", "Ваша дата свадьбы");
	let input4 = document.createElement('INPUT'); input4.setAttribute("type", "text"); input4.setAttribute("class", "inputInvitation"); input4.setAttribute("placeholder", "Ваш адрес свадьбы");


		invitationItemNEW.insertBefore(input1, invitationItemNEW.children[1])
		invitationItemNEW.insertBefore(input2, invitationItemNEW.children[2])
		invitationItemNEW.insertBefore(input3, invitationItemNEW.children[3])
		invitationItemNEW.insertBefore(input4, invitationItemNEW.children[4])


	invitationBlockNEW.insertBefore(invitationItemNEW, invitationBlockNEW.children[0])


	let overlay = document.createElement('div');
		overlay.classList.add('overlayNew');
	overlay.insertBefore(invitationBlockNEW, overlay.children[0])
	document.body.insertBefore(overlay,document.body.children[0]);


	editingACardBtn.onclick = function() {
		openPopupFunc();
	};

	function createAnInvitation(){
		document.querySelector('.invitation-block__title').textContent = input1.value;
		document.querySelector('.invitation-block__pretitle').textContent = input2.value;
		document.querySelector('.invitation-block__subtitle').textContent = input3.value;
		document.querySelector('.invitation-block__adress').textContent = input4.value;
	}



	function openPopupFunc(){
		overlay.style.display = 'flex';
		invitationBlockNEW.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	}
	function closePopupFunc(){
		document.body.style.overflow = '';
		overlay.style.display = 'none';
	}
	overlay.onclick = (e) => {
		if (e.path.length===5) {  
			closePopupFunc()
			  createAnInvitation()
			  console.log(document.querySelector('.invitation-block__title').innerHTML)
		}
	}
	let clearCardBtn = document.querySelector('.choice .choice__btns .choice__btn-4')
		clearCardBtn.onclick = () => {
			document.querySelector('.invitation-block__pretitle').innerHTML = 'Приглашаем Вас на торжество по случаю нашего бракосочетания';
			document.querySelector('.invitation-block__title').innerHTML = 'Андрей и Марина';
			document.querySelector('.invitation-block__subtitle').innerHTML = '23 сентября в 13:00';
			document.querySelector('.invitation-block__adress').innerHTML = 'г. Москва, ул. Комсомольская, 37. Ресторан “Прага”';
		}
}
export default editingACard;



