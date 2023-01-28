'use strict'

const addBtn = document.querySelector ("#btn-add");
const input = document.getElementById('new-item');
const resultList = document.querySelector('#list');

const handleDelete=(e) =>{
    //idi na parenta koji je p i ukloni ga tako da sve nestane (i input i button, sve)
    const clickedBtn = e.target;
    console.log(clickedBtn);
    const paragraphforDeletion = clickedBtn.parentElement;
    console.log(paragraphforDeletion);
    paragraphforDeletion.remove(); 
}


const handleStrikeToggle=(e) =>{
const changeCheckbox=e.target;
const spanTextElement = changeCheckbox.nextElementSibling;
spanTextElement.classList.add('striked');
}


const handleItemAdd=() => {
// dohvati text iz inputa
//pazi 
// 1.- da nije prazan text 
// 2. -da nisu samo razmaci i slično
const newItemText = input.value.trim();
if (newItemText.length === 0){
    return;
}
//pravimo : <input type="checkbox"/>
const checkbox=document.createElement('input');
checkbox.setAttribute('type','checkbox');
checkbox.addEventListener('change',handleStrikeToggle);

//pravimo :<span>(TEXT) <span/>
const textSpan=document.createElement('span');
textSpan.innerText=newItemText;

//pravimo <button>X</button>
const deleteBtn=document.createElement('button');
deleteBtn.innerText='x';
deleteBtn.addEventListener('click', handleDelete);

const newParagraph=document.createElement('p');
newParagraph.appendChild(checkbox);
newParagraph.appendChild(textSpan);
newParagraph.appendChild(deleteBtn);

resultList.appendChild(newParagraph);

input.value='';

}

addBtn.addEventListener('click', handleItemAdd);