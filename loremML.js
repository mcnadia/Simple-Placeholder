var langues = {   FR : 'français', 
  EN : 'english', 
  NL : 'nederlands', 
  DE : 'deutsch' 
}; 
var xhr ;
function showBox(n) { 
xhr = open('GET','lorem'+n, true );
xhr.onreadystatechange = trtResponse;
xhr.send();
}
 function trtResponse(){
 if (xhr.status == 200 && xhr.readyState == 4){
   document.getElementById('ipsum').innerHTML = xhr.responseText;
 }  
 }

function initPage(){
xhr = new XMLHttpRequest();
xhr.open('get', 'getLangues', true);
xhr.onload = makeSelect;
xhr.send();
}
function makeSelect(){
var lng = JSON.parse(xhr.responseText);
var liste = '';
for(var i in lng){
liste += '<option value=' + lng[i].id + '>'
+ lng[i].lib + '</option>';
}
setElem('lang', liste);
}