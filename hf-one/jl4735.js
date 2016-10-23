var firstname;
var lastname;
var div;

// create a function to greet user and change background color
function greeting(firstname,lastname){
	// ask for users' firstname and lastname
	firstname = prompt("What is your first name?");
	lastname = prompt("What is your last name?");
	//create new div
	div = document.createElement("DIV");
	//append div to HTML body
	document.body.appendChild(div);
	// set div height
	div.style.height = "100vh";
	// add div content
	div.textContent = "Hi "+ firstname +" " + lastname + " !";


	//add mouseover event to change the background color 
	div.addEventListener('mousemove',function(event){
		//retrive x and y coordinate of the cursor
		var x = event.clientX;
		var y = event.clientY;
		// set div background color based the coordinate of the cursor
		div.style.backgroundColor ="rgb("+ x +", "+ y+", 100)"
	});
};
 
//funcion call                      
greeting();                  