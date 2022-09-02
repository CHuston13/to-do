

import './style.css';
import Icon from './paper.jpg'



 function createBackground() {
 const element = document.createElement('div');
 const div2 = document.createElement('div');
 const addButton = document.createElement('button');
 const homeButton = document.createTextNode('Home');
 const newButton = document.createElement('button');
 newButton.innerHTML='Add';
 const myIcon = new Image();
myIcon.src = Icon;
 
 
  






//appending

element.appendChild(div2);

element.appendChild(myIcon);
div2.appendChild(addButton);
addButton.appendChild(homeButton);
div2.appendChild(newButton);



//styling
element.classList.add('background','html','body');
div2.classList.add('innerSection','*');
addButton.classList.add('homebutton');

   
  
  
  //onclick
  newButton.onclick=createTasks;
  
  
  
  
  
  return element;




 
 }

 




 function createTasks(){
  const person = prompt("enter");
 }




















 document.body.appendChild(createBackground());