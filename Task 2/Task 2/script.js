let Hellobtn=document.querySelector('button');
Hellobtn.addEventListener('click',showMsg);


function showMsg(){
    let name=prompt('Enter your name:');
    Hellobtn.textContent='Hello '+ name;
}