
var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var assignment= document.getElementsByTagName("li");
var assignmentLength=assignment.length;
//console.log(assignmentLength);



// this function add button id's and classes for every element 
//
function addButton() {
	//console.log("we are here")
		var assignment= document.getElementsByTagName("li");
        var assignmentLength=assignment.length;


	for (var i = 0; i < assignmentLength; i++) {
		var checkifexist=assignment[i].getAttribute("class");
		//console.log(checkifexist);
		
		if(!checkifexist){
			assignment[i].classList.add("list"+[i]);
			// create a button

				var btn=document.createElement("button");
				var btnText=document.createTextNode("delete");
				btn.appendChild(btnText);
				assignment[i].appendChild(btn);
				//sbtn.classList.add("delete");
				btn.setAttribute('id',i);

		}
	
	}

}



// to add line through the text as well as deleting it
function delete_and_crossletter(event){
	var lifound=event.target;
	var todelete=lifound.getAttribute("id");
	//alert(todelete);
	if(lifound.tagName==="LI" && !lifound.classList.contains("done")){
	lifound.classList.add("done");
		//console.log(lifound);
	}
	else if (lifound.tagName==="LI" ){
		lifound.classList.remove("done");
	}
	else{
		document.getElementById(todelete).parentNode.remove();
	}
	
}


// add element into the list after cliking the button or press enter
function createList(){
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";

		addButton();
}

// when you press click button the function will add element into the list

function addClick(){
	if(input.value.length> 0){
	createList();
	}
}


// when you press enter the function will add element into the list
 function addkeypress (event){

  if(input.value.length> 0 && event.keyCode===13){
		createList();
	}
}



addButton();

ul.addEventListener("click",delete_and_crossletter);
button.addEventListener("click",addClick);

input.addEventListener("keypress", addkeypress);