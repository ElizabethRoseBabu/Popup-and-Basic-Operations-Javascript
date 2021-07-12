/*alert("checking");
confirm("are you ready");
var name=prompt("enter your name");
document.write("<h1>hello "+name+"</h1>");*/

/*var number1=parseInt(prompt("enter the first number"));
var number2=parseInt(prompt("enter the second number"));
var sum;
sum=number1+number2;
alert(sum);*/

/*var a=10;
document.write("<h1>"+a+"</h1>");
function names()
{
	var a="orisys";
	document.write("<h1>"+a+"</h1>");
}
names();
document.write("<h1>"+a+"</h1>");*/

/*document.getElementById("demo").innerHTML="orisys";

var sub=prompt("your name");
document.getElementById("demo").innerHTML=sub;*/

/*function subject()
{
document.getElementById("demo").innerHTML="eliza";	
}*/


/*function subject()
{
	var a=document.getElementById("fname").value;
	alert("Your name is "+a);
	
}*/


/*var arr=['a','b','c'];
alert(arr);*/


/*var fruit=['apple','orange','mango'];//array
document.write("<h1>"+fruit+"</h1>");
document.write("<h1>"+fruit[1]+"</h1>")

fruit.push('banana');//for add element into array
for(var i=0;i<fruit.length;i++)
{
	document.write("<h1>"+fruit[i]+"</h1>");
}

fruit.pop();//remove element into array
for(var i=0;i<fruit.length;i++)
{
	document.write("<h1>"+fruit[i]+"</h1>");
}

fruit.unshift('apple');//add element in first position
for(var i=0;i<fruit.length;i++)
{
	document.write("<h1>"+fruit[i]+"</h1>");
}

fruit.shift('apple');//remove element from first position
for(var i=0;i<fruit.length;i++)
{
	document.write("<h1>"+fruit[i]+"</h1>");
}*/


/*function subject()
{
	var a=document.getElementById("fname").value;
	var b=document.getElementById("sname").value;
	document.getElementById("demo").innerHTML=a+" "+b;
	
}*/

/*
function subject()
{
var rd1=document.getElementById("rd1");
var rd2=document.getElementById("rd2");
if (rd1.checked==true)
 {
	alert("selected "+rd1.value);
} 
else if(rd2.checked==true)
 {
	alert("selected "+rd2.value);
	}
	else
	{
		alert("not checking");
	}
}*/

/*function subject()
{
var select=document.getElementById("selectbox");
alert(select.options[select.selectedIndex].value);
}*/
function subject()
{
	var para=document.getElementsByTagName("p");
	for(var i=0;i<para.length; i++)
	{
		para[i].style.color="red";
		para[i].style.backgroundColor="yellow";
		para[i].style.fontSize="40px";
	}
}
