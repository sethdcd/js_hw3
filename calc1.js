var lastNum = 0;
var stageArr = [];
var total = 0;
var number = '';
var equationHistory = '';
var firstNum = true;
var clrDisplay = false;

/* 1. Select Number
*************************/
$('.numKey').click( function() {
	if ( clrDisplay ) {
		number = '';
		equationHistory = '';
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
	equationHistory = '';
	stageArr = [];
	total = 0;
	clrDisplay = false;
	firstNum = true;
	$('#display').val('');
});


/* 3. Addition
*************************/
$('#addButton').on('click', addition);

function addition() {
	clrDisplay = false;
	if ( number !== '' ) {
		stageNumber();
	}	
	if ( !firstNum ) {	
		calculation();
	}
	equationHistory = '+';	
}


/* 4. Subtraction
*************************/
$('#subtractButton').on('click', subtraction);

function subtraction() {	
	clrDisplay = false;
	
	if ( number !== '' ) {
		stageNumber();
	}	
	if ( !firstNum ) {	
		calculation();
	}
	equationHistory = '-';
	
}


/* 5. Multiplication
*************************/
$('#multiplyButton').on('click', multiply);

function multiply() {
	clrDisplay = false;
	if ( number !== '' ) {
		stageNumber();
	}	
	if ( !firstNum ) {	
		calculation();
	}
	equationHistory = '*';
}


/* 6. Division
*************************/
$('#divideButton').on('click', division);

function division() {
	clrDisplay = false;
	if ( number !== '' ) {
		stageNumber();
	}	
	if ( !firstNum ) {	
		calculation();
	}
	equationHistory = '/';
}


/* 7. Equals
*************************/
function calculation() {
	if ( number !== '' ) {
		stageNumber();		
	}
	var operators = {
		'+': function() { 
			total = stageArr[0] + stageArr[1];  
			return total;
		},
		'-': function() { 
			total = stageArr[0] - stageArr[1];  
			return total;
		},
		'*': function() { 
			total = stageArr[0] * stageArr[1];  
			return total;
		},
		'/': function() { 
			total = stageArr[0] / stageArr[1];  
			return total;
		}
	};

	if ( equationHistory !== '' ) {
		total = operators[equationHistory]();
		lastNum = stageArr[1];
		stageArr = [];
		firstNum = true;
		stageArr.push(total);
		$('#display').val(total);
		console.log(lastNum);
	}
}

$('#equalsButton').on('click', hardCalc);

function hardCalc() {
	if ( number !== '' ) {
		stageNumber();		
	}	
	if ( stageArr.length > 1 ) {
		calculation();
		clrDisplay = true;
	}	
	else {
		var operators = {
			'+': function() { 
				total = stageArr[0] + lastNum;  
				return total;
			},
			'-': function() { 
				total = stageArr[0] - lastNum;  
				return total;
			},
			'*': function() { 
				total = stageArr[0] * lastNum;  
				return total;
			},
			'/': function() { 
				total = stageArr[0] / lastNum;  
				return total;
			}
		};	

		if ( equationHistory !== '' ) {
			total = operators[equationHistory]();
			stageArr = [];
			firstNum = true;
			stageArr.push(total);
			$('#display').val(total);				
		}
	}

}