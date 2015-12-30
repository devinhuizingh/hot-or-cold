
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
		
				
	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  		
  	});

	makeNumber();
	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}
  	 /*make a random number*/
	function makeNumber (){
		theNumber = Math.floor((Math.random() * 100) + 1);
		
	}

	/* make submit do many things */
	
		$("#form").submit(function(e){
		e.preventDefault();
		userGuess = $("#userGuess").val();
		/*put number in list*/
		if(!isNumber(userGuess)) {
				alert("Enter a number, Silly!")
			}
		else {
			$('#guessList').append('<li>' + $('#userGuess').val() + '</li>');
			$('#userGuess').val('');
			/*increase counter*/
			$('#count').html(parseInt($('#count').html(), 10)+1);
			
			/*validate input*/
			if (userGuess>=101) {
				alert("Please enter a number between 1 and 100");
			}
			else if (userGuess == theNumber){
				$('#feedback').html("You Win!");
			}
			else if (Math.abs((userGuess - theNumber))<=1) {
				$('#feedback').html("ON FIRE!!!");
			}
			else if (Math.abs((userGuess - theNumber))<=5) {
				$('#feedback').html("Really Hot");
			}
			else if (Math.abs((userGuess - theNumber))<=10) {
				$('#feedback').html("Hot");
			}
			else if (Math.abs((userGuess - theNumber))<=20) {
				$('#feedback').html("Warm");
			}
			else if (Math.abs((userGuess - theNumber))<=50) {
				$('#feedback').html("Cold");
			}
			else if (Math.abs((userGuess - theNumber))<=70) {
				$('#feedback').html("Really Cold");
			}
			else if (Math.abs((userGuess - theNumber))<=100) {
				$('#feedback').html("Ice Cold");
			}
		}

	});

	$('#new').click(reset)
	function reset() {
		$('#feedback').html("Make your Guess");
		$('#count').html('0');
		$('#guessList').html('');
	}


});


