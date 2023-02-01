function fizzBuzz() {  
	// Your code here
	for (let i = 1; i < 101; i++) {
		if (i % 15 == 0) console.log("FizzBuzz");
		else if (i % 3 == 0) console.log("Fizz");
		else if (i % 5 == 0) console.log("Buzz");
		else console.log(i);
	}
}

fizzBuzz();

/** SULUCION PROPUESTA NO ES ACEPTADA POR EL VALIDADOR
function fizzBuzz() {
	for(let i = 1; i <= 100; i++){
		if(i % 3 == 0 && i % 5 == 0){
			console.log("FizzBuzz")
		}
        else if(i % 3 == 0){
			console.log("Fizz")
		}
		else if(i % 5 == 0){
			console.log("Buzz")
		}
		else{
			console.log(i)
		}
	}  
	// Your code here
}

fizzBuzz();
*/