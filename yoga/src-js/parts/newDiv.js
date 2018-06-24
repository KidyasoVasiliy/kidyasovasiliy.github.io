function newDiv() {

	//!!ES6!! Вставляем tag+text+cssText
	class Options {																							// создаем класс 
		constructor(height = '30', width = '100%', bg = '#373737', fontSize = '22', textAlign = 'center'){	// конструктор с css стилями, значения по дефолту стоят
			this.height 			= height + 'px',
			this.width 				= width + 'px',
			this.backgroundColor 	= bg,
			this.fontSize 			= fontSize + 'px',
			this.textAlign 			= textAlign;
		}

		createNewDiv(tagName, text) { 											// метод создания нового элемента 
			let div =  document.createElement(tagName);							// создаем элемент
			div.textContent = text;												// добавляем к эементу текст

			div.style.cssText = `height: 			${this.height};
								 width: 			${this.width};
								 background-color: 	${this.backgroundColor};
								 font-size: 		${this.fontSize};
								 text-align: 		${this.textAlign};`;		// задаем стили для элемента, с помощью конструктора
			document.body.appendChild(div);										// добавляем элемент в конец страницы
		}
	}

	let newElementObj = new Options();                                          								// создаем новый объект
	newElementObj.createNewDiv(
								'div', 
								'Кидясов Василий [Академия верстки] JavaScript для верстальщика 2.0'
								);  	// задаем какой элемент, и текст внутри него
}
export default newDiv;