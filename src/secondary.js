



export default function createPrompt(){
    const div3 = document.createElement('div');
    div3.id='container';
    const input = document.createElement('input');
    input.id='first';
    input.setAttribute('type','text');
    const date = document.createElement('input');
    date.id='second';
    date.setAttribute('type','date');
    const pull = document.getElementById('second-born');
    const newBut = document.createElement('button');
    newBut.innerHTML='submit';
    newBut.onclick=combined;





    //appending
    pull.appendChild(div3);
    div3.appendChild(input);
    div3.appendChild(date);
    div3.appendChild(newBut);

    return input, date, newBut;
   }


   function submitButton(){
    const remove = document.getElementById('container');
    remove.innerHTML='';
   }


   function domAppend(){
    var con = document.getElementById('container');
    var pulling = document.getElementById('first').value;
    var pulled = document.getElementById('second').value;
    con.appendChild(pulling);
    con.appendChild(pulled);


    return con;
   }


   function combined(){
   
    domAppend();
    submitButton();
   }

   