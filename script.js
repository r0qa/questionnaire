let buttons=document.getElementsByTagName('button');
let question=[];
let div1=document.querySelector('#div1');
let div2=document.querySelector('#div2');
let submit=document.querySelector('#submit');
let submitForm=document.querySelector('#submitForm');
function addHidden(event){
	event.classList.add('hidden');
}
function removeHidden(event){
	event.classList.remove('hidden');
}

for (let i=0;i<buttons.length;i++){
	buttons[i].addEventListener('click',
		function clickbutton(event){
			event.preventDefault();
			if (buttons[i].classlist== ' '+i+' '){
				if(i==1||i==2){
					addHidden(div1);
					question.push(i);
					removeHidden(div2);
				}
				else if(i==3||i==4){
					addHidden(div2);
					removeHidden(submit);
					question.push(i);
				}
			}
		});
}
submitForm.addEventListener('submit',function(event){
	event.preventDefault();
	addHidden(submit);
	alert("Вы нажали на "+question[0]+" и "+question[1]+"кнопки");
});
 
