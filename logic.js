var n1 = null;
var n2 = null;
var op = '';
var result = null;
var ERROR = 0;

function reset(){
	n1 = null;
	n2 = null;
	op = '';
	result = null;
	ERROR = 0;
	document.getElementById("screen").innerHTML = '';
}

function imbedNumber(n){
	if ((result != null) || (ERROR == 1))
		reset();
	if ((document.getElementById("screen").innerHTML).length < 39)
		document.getElementById("screen").innerHTML += n;
}

function do_op(){
	n2 = parseInt(document.getElementById('screen').innerHTML);
	if ((n1 != null) && (!isNaN(n2))){
		if (op.localeCompare('+') == 0)
			result = n1 + n2;
		if (op.localeCompare('-') == 0)
			result = n1 - n2;
		if (op.localeCompare('*') == 0)
			result = n1 * n2;
		if (op.localeCompare('/') == 0)
			result = n1 / n2;
		document.getElementById('screen').innerHTML = '' + result;
	} else {
		ERROR += 1;
		document.getElementById('screen').innerHTML = 'error: n1 or n2 is undefined';
	}
}

function detect_op(o){
	n1 = parseInt(document.getElementById('screen').innerHTML);
	if (!isNaN(n1)){
		op = o;
		document.getElementById('screen').innerHTML = '';
	} else {
		ERROR += 1;
		document.getElementById('screen').innerHTML = 'error: type in number first';
	}
}
