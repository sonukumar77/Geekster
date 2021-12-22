function armstr()
{
var sum=0,val,num;
num=Number(document.getElementById("input").value);

temp=num;

var pRef =document.getElementById("para");
while(temp>0)
{
val=temp%10;
temp=parseInt(temp/10); 
sum=sum+val*val*val;
}
if(sum=="")
{
alert("Pleas Enter the number !");

}
else if(sum==num)
{

pRef.innerText = "This is Armstrong number";
pRef.style.color="green";
}
else 
{
pRef.innerText = "This is Not Armstrong number";
pRef.style.color="red";
}
}