var counter=0;
function btnClickPlus()
{
   
    counter=counter+1;
   var inputText= document.getElementById('inputBox')
   inputText.value=counter;
   
}
function btnClickMinus()
{
   
    counter=counter-1;
   var inputText= document.getElementById('inputBox')
   inputText.value=counter;
   
}