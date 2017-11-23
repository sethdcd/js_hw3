/* 
Author:  Seth Barthen
Created: 11/22/17
Version: 0.0.1

	*Table of Contents*
		1. Number Key
		2. Clear Button
		3. Addition
*********************************************************/
// Placeholder
let number = '';
let total = 0;
let stageArr = [];
let check = 0;

/* 1. Create a number
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
	check = 0;
	$('#display').val('');

});

/* 3. Addition
*************************/
$('#addButton').on('click', addition);

function addition() {
	stageArr.push(number);
	number = '';

	if ( stageArr.length > 1 ) {
		stageArr.shift();
	}
	
	total += Number(stageArr[0]);
	$('#display').val(total);
}

/* 4. Subtraction
*************************/
$('#subtractButton').on('click', subtraction);

function subtraction() {
	stageArr.push(number);
	number = '';

	if ( stageArr.length > 1 ) {
		stageArr.shift();
		check = 1;
	}

	if ( check === 0 ) {
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
	stageArr.push(number);
	number = '';

	if ( stageArr.length > 1 ) {
		stageArr.shift();
		check = 1;
	}

	if ( check === 0 ) {
		total = Number(stageArr[0]); 
	}
	else {
		total *= Number(stageArr[0]);
		$('#display').val(total);
	}
}


/* 6. Division
*************************/