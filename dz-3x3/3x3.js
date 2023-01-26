var showHideBtn=document.querySelectorAll('.btn');
var click=document.querySelectorAll('.btn');

function handleShowBtn(e) {
  var element=e.target;
  element.classList.toggle('btn');
}
function handleHideBtn(e){
  var element=e.target;
  element.classList.toggle('btn');
}
function handleClickBtn(e){
  var element=e.target;
  element.classList.toggle('click');
}

for (var i=0; i< showHideBtn.length; i++) {
  var btnHide= showHideBtn [i];
     btnHide.addEventListener('mouseover', handleHideBtn);
}

for (var i=0; i< showHideBtn.length; i++) {
  var btnShow= showHideBtn [i];
     btnShow.addEventListener('mouseout', handleShowBtn);
}

for (var i=0; i<showHideBtn.length; i++) {
  var btnClick= showHideBtn [i];
     btnClick.addEventListener('click', handleClickBtn);
}
