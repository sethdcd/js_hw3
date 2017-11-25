/* 
Author:  Seth Barthen
Created: 11/22/17
Version: 0.0.1

	*Table of Contents*
		0. Variables and Functions
		1. Select Number
		2. Clear Button
		3. Addition
		4. Subtraction
		5. Multiplication
		6. Division
*********************************************************/


/* 0. Variables and Functions
*************************/
let number = '';
let total = 0;
let stageArr = [];
let firstNum = true;
let after = false;
let eh = '';
let equationSet = false;

function stageNumber() {
	stageArr.push(number);
	number = '';

	if ( stageArr.length > 1 ) {
		stageArr.shift();
		firstNum = false;
	}
}


/* 1. Select Number
*************************/
$('.numKey').click( function() {
	if ( after ) {
		number = '';
		stageArr = [];	
		total = 0;	
		firstNum = true;
		after = false;
		eh = '';
	}
	let numVal = $(this).val();	
	number += numVal;
	$('#display').val(number);
});


/* 2. Clear Button
*************************/
$('#clearButton').click( function() {
	number = '';
	stageArr = [];
	total = 0;
	firstNum = true;
	after = false;
	$('#display').val('');
});


/* 3. Addition
*************************/
$('#addButton').on('click', addition);

function addition() {	
	stageNumber();	
	eh = '+';
	equationSet = true;
	total += Number(stageArr[0]);
	$('#display').val(total);
	after = false;
}


/* 4. Subtraction
*************************/
$('#subtractButton').on('click', subtraction);

function subtraction() {	
	if ( !equationSet ) {
		eh = '-';
		equationSet = true; 
		if ( firstNum ) {
			total = Number(stageArr[0]);
		}
		else {
			total -= Number(stageArr[0]);
			$('#display').val(total);
		}	
	}
	else {
		equation(eh);
		eh = '-';
	}
	stageNumber();
}


/* 5. Multiplication
*************************/
$('#multiplyButton').on('click', multiply);

function multiply() {
	stageNumber();	
	eh = '*';
	if ( firstNum ) {
		total = Number(stageArr[0]); 
	}
	else {
		total *= Number(stageArr[0]);
		$('#display').val(total);
	}
	after = false;
}


/* 6. Division
*************************/
$('#divideButton').on('click', division);

function division() {
	stageNumber();
	eh = '/';
	if ( firstNum ) {
		total = Number(stageArr[0]);
	}
	else {
		total /= Number(stageArr[0]);
		$('#display').val(total);
	}
	after = false;
}


/* 7. Equation
*************************/
$('#equalsButton').on('click', equation);

function equation() {
	let equations = {
		'+': addition,
		'-': subtraction,
		'*': multiply,
		'/': division
	};
	let equals = equations[eh]();
	after = true;
	return equals;
}

