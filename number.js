let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

check.addEventListener("click",()=>{
	if(number.value ==""){
		text.style.color = "black";
        text.innerText = "Please Enter Your Phone Number";
	}
	else if(number.value.match(regex)){
		text.style.color = "rgba(4,125,9,1)";
        text.innerText = "Congrats! You Entered A Valid Phone Number";
		
	}
	else
		{
		text.innerText = "Oops! Your Phone Number Is Invalid";
		text.style.color = "#da3400";
		}
});
