export default function createPrompt(){
    const input = document.createElement('input');
    input.setAttribute('type','text');
    const pull = document.getElementById('second-born');
    pull.appendChild(input);
    

    return input
   }
   