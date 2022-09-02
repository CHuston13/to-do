import _, { add } from 'lodash';

import './style.css';
import Icon from './paper.jpg'


 function createBackground() {
 const element = document.createElement('div');
 const div2 = document.createElement('div');
 const addButton = document.createElement('button');
 const homeButton = document.createTextNode('Home');
 const myIcon = new Image();
myIcon.src = Icon;
 
 
  






//appending

element.appendChild(div2);

element.appendChild(myIcon);
div2.appendChild(addButton);
addButton.appendChild(homeButton);



//styling
element.classList.add('background','html','body');
div2.classList.add('innerSection','*');
addButton.classList.add('homebutton');
   
  
  
  
  
  
  
  
  
  return element;




 
 }

 document.body.appendChild(createBackground());