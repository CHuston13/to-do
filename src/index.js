import _ from 'lodash';

import './style.css';
import Icon from './paper.jpg'


 function createBackground() {
 const element = document.createElement('div');
 const div2 = document.createElement('div');
 const addButton = document.createElement('button');
 const myIcon = new Image();
myIcon.src = Icon;
 
 
  






//appending

element.appendChild(div2);

element.appendChild(myIcon);
div2.appendChild(addButton);



//styling
element.classList.add('background','html','body');
div2.classList.add('innerSection','*');
   
  
  
  
  
  
  
  
  
  return element;




 
 }

 document.body.appendChild(createBackground());