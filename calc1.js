
let clrDisplay = false;
let stageArr = [];
let total = 0;
let number = '';
let eh = '';
let n = 0;
let firstNum = true;
let afterEquation = false;


/* 1. Select Number
*************************/
$('.numKey').click( function() {
	if ( clrDisplay ) {
		number = '';
		eh = '';
		stageArr = [];	
		total = 0;	
		clrDisplay = false;		
	}
	let numVal = $(this).val();	
	number += numVal;
	$('#display').val(number);
});

function stageNumber() {
	stageArr.push(Number(number));
	number = '';

	if ( stageArr.length > 1 ) {
		firstNum = false;
	}
}


/* 2. Clear Button
*************************/
$('#clearButton').click( function() {
	number = '';
	stageArr = [];
	n = 0;
	total = 0;
	clrDisplay = false;
	firstNum = true;
	afterEquation = false;
	$('#display').val('');
});


/* 3. Addition
*************************/
$('#addButton').on('click', addition);

function addition() {
	eh = '+';
	if ( !afterEquation ) {
		if ( number !== '' ) {
			stageNumber();
		}	
		if ( !firstNum ) {	
			calculation();
		}
	}
	else {
		stageArr.push(total);
		afterEquation = false;
	}
}



/* 2. Clear Button
*************************/


/* 2. Clear Button
*************************/


/* 2. Clear Button
*************************/


/* 7. Equals
*************************/
$('#equalsButton').on('click', calculation);

function calculation() {
	if ( number !== '' ) {
		stageNumber();
	}
	let operators = {
		'+': function() { 
			total = stageArr[0] + stageArr[1];  
			stageArr = [];
			stageArr[0] = total;
			return total;
		},
		'-': function() { return a - b },
		'*': function() { return a * b },
		'/': function() { return a / b }
	};

	if ( eh !== '') {
		console.log('before  ' + stageArr);
		total = operators[eh]();
		console.log('after  ' + stageArr);
		$('#display').val(total);	
	}
	n++;
	//afterEquation = true;
}