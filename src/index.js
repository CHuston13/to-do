

import './style.css';
import Icon from './paper.jpg'


function createBackground() {
 const element = document.createElement('div');
 element.id='first-born';
 const div2 = document.createElement('div');
 div2.id='second-born';

 const addButton = document.createElement('button');
 const homeButton = document.createTextNode('Home');
 const newButton = document.createElement('button');
 const input = document.createElement('input');
 input.id='first';
 input.setAttribute('type','text');
 const date = document.createElement('input');
 date.id='second';
 date.setAttribute('type','date');

 newButton.innerHTML='Add';
 const myIcon = new Image();
myIcon.src = Icon;
 
 
  






//appending

element.appendChild(div2);

element.appendChild(myIcon);
div2.appendChild(addButton);
addButton.appendChild(homeButton);
div2.appendChild(newButton);
div2.appendChild(input);
div2.appendChild(date);



//styling
element.classList.add('background','html','body');
div2.classList.add('innerSection','*');
addButton.classList.add('homebutton');

   
  
  
  
  
  
  
  return element;




 }

 




 



















 document.body.appendChild(createBackground());