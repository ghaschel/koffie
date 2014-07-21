/*

  _____ ____  _____    _    ____  _   _ ____  _____       _ ____  
 |_   _|  _ \| ____|  / \  / ___|| | | |  _ \| ____|     | / ___| 
   | | | |_) |  _|   / _ \ \___ \| | | | |_) |  _|    _  | \___ \ 
   | | |  _ <| |___ / ___ \ ___) | |_| |  _ <| |___  | |_| |___) |
   |_| |_| \_\_____/_/   \_\____/ \___/|_| \_\_____|  \___/|____/ 
                                                                  

 */

jQuery.fn.scrollBottom = function() { 
  return $(document).height() - this.scrollTop() - this.height(); 
}; //Oposto de scrollTop

jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
}; //seletor para descelecionar um elemento cujo elemento pai tenha a classe determinada nos parenteses. Funciona com filter, e direto no seletor @Paolo Bergantino - http://stackoverflow.com/questions/965816/what-jquery-selector-excludes-items-with-a-parent-that-matches-a-given-selector

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
    	return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

	if (trident > 0) {
	    var rv = ua.indexOf('rv:');
	    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	return false;
} //detecta se o navegador atual é o IE

function detectFF() {
    var ua = window.navigator.userAgent;
    var firefox = ua.indexOf('Firefox ');
    var gecko = ua.indexOf('Gecko/');

    if (firefox > 0) {
    	return parseInt(ua.substring(firefox + 5, ua.indexOf('.', firefox)), 10);
    }

	if (gecko > 0) {
	    var rv = ua.indexOf('rv:');
	    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	return false;
} //detecta se o navegador atual é o firefox - testado em windows e mac

function detectOP() {
    var ua = window.navigator.userAgent;
    var opr = ua.indexOf('OPR/');

	if (opr > 0) {
	    return parseInt(ua.substring(opr + 4, ua.indexOf('.', opr)), 10);
	}

	return false;
} //detecta se o navegador atual é o opera - testado em windows e mac

function detectSF() {
    var ua = window.navigator.userAgent;
    var safari = ua.indexOf('Safari/');
    var version = ua.indexOf('Version/');

	if (safari > 0 && version > 0) {
	    return parseInt(ua.substring(version + 8, ua.indexOf('.', version)), 10);
	}

	return false;
} //detecta se o navegador atual é o safari - testado em windows

function detectCR() {
	var ua = window.navigator.userAgent;
    var safari = ua.indexOf('Safari/');
    var chrome = ua.indexOf('Chrome/');

	if (safari > 0 && chrome > 0) {
	    return parseInt(ua.substring(chrome + 7, ua.indexOf('.', chrome)), 10);
	}

	return false;
} //detecta se o navegador atual é o chrome - testado em windows

function isEmail(email) {
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
} //testa se a string inserida é um email

function between(minimum, value, maximum) {
	return value > minimum && value < maximum;
} //thanks to undefined (http://stackoverflow.com/questions/14718561/check-if-a-number-is-between-two-values)

function generateID() { 
	d = new Date();
	return date = "id-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds()  + "-" + d.getMilliseconds();
} //gera um id único

function magicCall(fnName) {
	fn = window[fnName];
	fnExists = typeof fn === 'function';
	if(fnExists) {
		fn();
	}
} //chama função sem retornar erro de função inexistente caso a mesma não esteja declarada

Array.prototype.clean = function(deleteValue) {
	for (var i = 0; i < this.length; i++) {
    	if (this[i] == deleteValue) {         
			this.splice(i, 1);
			i--;
		}
	}
	return this;
} //remove campos em branco da array - @CMS/@kapa - http://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
} // busca o valor de um parametro que foi passado pela url em uma variavel get @David - http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript
