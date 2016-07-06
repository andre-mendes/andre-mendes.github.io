(function(){

	var headerScroll = getId('header-main'),
		scrollHeight = 200,
		menuIcon 	 = getId('menu-icon'),
		menuMain 	 = getId('menu-main'),
		classMenu    = 'menu-active',
		classHeader	 = 'active';

	//SCROLL
	window.addEventListener("scroll", scrollOn);



	function scrollOn() {
		animatedScroll(headerScroll,classHeader,scrollHeight);

		var scrollBarPosition = window.pageYOffset | document.body.scrollTop;

   		if (headerScroll.classList) {
		   headerScroll.classList.add('transformScroll');

		} else if (headerScroll.classList.contains('active')) {
		    headerScroll.classList.remove('transformScroll');
		}

		if (scrollBarPosition == 0) {
			headerScroll.classList.remove('transformScroll');
		}
	}

	//MENU RESPONSIVE
	/*menuIcon.onclick = function(){
	 	toggle(menuMain,classMenu);
	}*/

	//Função que on scroll muda o comportamento do elemento
	function animatedScroll(element,classN,height) {
		y = pageYOffset; //resgata do objeto window o valor pageYOffset e guarda na variável
		if (y > height) {
			element.className = classN;
		} else {
			element.className = '';
		}
	}

	// Função toggle adiciona ou tira a class do elemento
	function toggle(element,classe) {
		element.className = element.className ? '' : classe;
	}

	//Função que retorna o id do elemento
	function getId(id) {
		return document.getElementById(id);
	}


})();
