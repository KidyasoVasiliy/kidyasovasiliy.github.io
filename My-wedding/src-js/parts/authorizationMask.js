function authorizationMask() {

	let popupFormBox = document.querySelectorAll('.popup-form-box input');

	popupFormBox[0].onkeyup = function(input) {  						// Проверка на ввод только Русских букв
		return this.value = this.value.replace(/[^а-я, А-Я]/g, '');
	};

	let input = popupFormBox[1]; 										// Проверка на ввод номера телефона
	input.addEventListener('input', mask, false)

		function mask(event) {
		    let matrix = this.defaultValue,
		        i = 0,
		        def = matrix.replace(/\D/g, ''),
		        val = this.value.replace(/\D/g, '');
		        def.length >= val.length && (val = def);
		    matrix = matrix.replace(/[_\d]/g, function(a) {
		        return val.charAt(i++) || '_'
		    });
		    this.value = matrix;
		    i = matrix.lastIndexOf(val.substr(-1));
		    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf('_');
		    setCursorPosition(i, this)
		}
		
			function setCursorPosition(pos, elem) {
			  elem.focus();
			  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
			  else if (elem.createTextRange) {
			      let range = elem.createTextRange();

			      range.collapse(true);
			      range.moveEnd('character', pos);
			      range.moveStart('character', pos);
			      range.select()
			  }
			}

}
export default authorizationMask;