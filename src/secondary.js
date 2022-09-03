



export default function createPrompt(){
    const div3 = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type','text');
    const date = document.createElement('input');
    date.setAttribute('type','date');
    const pull = document.getElementById('second-born');
    const newBut = document.createElement('button');
    newBut.innerHTML='submit';
    newBut.onclick=submitButton;





    //appending
    pull.appendChild(div3);
    div3.appendChild(input);
    div3.appendChild(date);
    div3.appendChild(newBut);

    return input, date, newBut;
   }


   function submitButton(){
    const remove = document.getElementById('second-born');
    remove.removeAttribute;
   }


   