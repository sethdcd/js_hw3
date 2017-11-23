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
let check = false;
let after = false;
let eh = '';

function stageNumber() {
	stageArr.push(number);
	number = '';

	if ( stageArr.length > 1 ) {
		stageArr.shift();
		check = true;
	}
}




/* 1. Select Number
*************************/
$('.numKey').click( function() {	
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
	check = false;
	after = false;
	$('#display').val('');
});


/* 3. Addition
*************************/
$('#addButton').on('click', addition);

function addition() {
	stageNumber();	
	eh = '+';
	total += Number(stageArr[0]);
	$('#display').val(total);
}


/* 4. Subtraction
*************************/
$('#subtractButton').on('click', subtraction);

function subtraction() {
	stageNumber();
	eh = '-';
	if ( !check ) {
		total = Number(stageArr[0]);
	}
	else {
		total -= Number(stageArr[0]);
		$('#display').val(total);
	}	
}


/* 5. Multiplication
*************************/
$('#multiplyButton').on('click', multiply);

function multiply() {
	stageNumber();	
	eh = '*';
	if ( !check ) {
		total = Number(stageArr[0]); 
	}
	else {
		total *= Number(stageArr[0]);
		$('#display').val(total);
	}
}


/* 6. Division
*************************/
$('#divideButton').on('click', division);

function division() {
	stageNumber();
	eh = '/';
	if ( !check ) {
		total = Number(stageArr[0]);
	}
	else {
		total /= Number(stageArr[0]);
		$('#display').val(total);
	}
}


/*7 Equation
*************************/
$('#equalsButton').on('click', equation);

function equation() {
	after = true;
	let equations = {
		'+': addition,
		'-': subtraction,
		'*': multiply,
		'/': division
	};
	return equations[eh]();
}

while ( after ) {
	$('#equalsButton').on('click', silly);

	function silly() {
		console.log('you are a silly bitch!!');
		after = false;
	}

}