window.onscroll = function showHeader() {

	var header =  document.querySelector('.header-bottom');
	if(window.pageYOffset > 145){
		header.classList.add('header-fixed');
	}
	else{
		header.classList.remove('header-fixed');
	}
}