
const text = document.querySelector('.text');
const color = document.querySelector('.color-in');
const textArea = document.getElementById('textarea');

const btn = document.getElementById('btn');

const data = document.querySelector('.data');

textArea.style.backgroundColor = color.value;

const changeColor = () => {
    textArea.style.backgroundColor = color.value;
}
color.addEventListener('change', changeColor);

const noteAdded = () => {   

    event.preventDefault();

    if(text.value === ''){
        alert("Enter yor title");
        return;
    }

    if(textArea.value === ''){
        alert("Enter yor note data");
        return;
    }
    
    const div = document.createElement("div");    
    const span = document.createElement('span');
    const p = document.createElement('textarea')
    const divCross = document.createElement('button');
    
    divCross.innerText = 'X';       
    divCross.style.float = 'right'


    span.innerText = text.value;
    span.style.display = 'block'
    

    p.style.padding = '10px 0px'
    
    p.innerText = textArea.value;   
        
    p.style.backgroundColor = color.value;
    p.style.width = '200px'
    p.style.height = '89%';
    p.style.padding = '3px';

    divCross.addEventListener('click', function(){
        div.style.display = 'none';
    })
  
    div.style.width = '200px'
    div.style.height = '150px'
    div.style.marginBottom = '5px'

    span.appendChild(divCross); 

    div.appendChild(span);
    div.appendChild(p);
       

    data.appendChild(div);

}
btn.addEventListener("click", noteAdded);

