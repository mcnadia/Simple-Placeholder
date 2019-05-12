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
