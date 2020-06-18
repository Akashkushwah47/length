var s=document.getElementById("boxone");
s.addEventListener("keyup",convert);

var i=document.getElementById("boxtwo");
i.addEventListener("keyup",second);

var w=document.getElementById("max");
 w.addEventListener("change",convert);

 var r=document.getElementById("min");
 r.addEventListener("change",convert);


 

function convert(){
  
    var d=document.getElementById("min").value;
    
    var e=document.getElementById("max").value;
    if(d=="celsius"){
        switch(e)
        {
           
            case'celsius':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'fahrenheit':
            var a=document.getElementById("boxone").value;
            var b=(a*(9/5))+32;
            document.getElementById("boxtwo").value=b;
            break;
            case'kelvin':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;
           
    
        }
    }
    else if (d=="fahrenheit"){
        switch(e)
        {


            case'celsius':
            var a=document.getElementById("boxone").value;
            var b=(a-32)*(5/9);
            document.getElementById("boxtwo").value=b;
            break;
            case'fahrenheit':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'kelvin':
            var a=document.getElementById("boxone").value;
            var b=(a-32)*(5/9)+273.15;
            document.getElementById("boxtwo").value=b;
            break;

        }
    }
    else if(d=="kelvin")
    {
        switch(e)
        {
            
            case'celsius':
            var a=document.getElementById("boxone").value;
            var b=a-273.15;
            document.getElementById("boxtwo").value=b;
            break;
            case'fahrenheit':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a-273.15)*(9/5)+32;
            document.getElementById("boxtwo").value=b;
            break;
            case'kelvin':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;


        }
    }
}
/* new function hai reverse me change karne ke liye */
function second(){
  
    var d=document.getElementById("min").value;
    
    var e=document.getElementById("max").value;
    if(d=="celsius"){
        switch(e)
        {
           
            case'celsius':
            var a=document.getElementById("boxtwo").value;
            var b=a;
            document.getElementById("boxone").value=b;
            break;
            case'fahrenheit':
            var a=document.getElementById("boxtwo").value;
            var b=(a*(9/5))+32;
            document.getElementById("boxone").value=b;
            break;
            case'kelvin':
            var a=parseInt(document.getElementById("boxtwo").value);
            var b=(a+273.15);
            document.getElementById("boxone").value=b;
            break;
           
    
        }
    }
    else if (d=="fahrenheit"){
        switch(e)
        {


            case'celsius':
            var a=document.getElementById("boxtwo").value;
            var b=(a-32)*(5/9);
            document.getElementById("boxone").value=b;
            break;
            case'fahrenheit':
            var a=document.getElementById("boxtwo").value;
            var b=a;
            document.getElementById("boxone").value=b;
            break;
            case'kelvin':
            var a=document.getElementById("boxtwo").value;
            var b=(a-32)*(5/9)+273.15;
            document.getElementById("boxone").value=b;
            break;

        }
    }
    else if(d=="kelvin")
    {
        switch(e)
        {
            
            case'celsius':
            var a=document.getElementById("boxtwo").value;
            var b=a-273.15;
            document.getElementById("boxone").value=b;
            break;
            case'fahrenheit':
            var a=parseInt(document.getElementById("boxtwo").value);
            var b=(a-273.15)*(9/5)+32;
            document.getElementById("boxone").value=b;
            break;
            case'kelvin':
            var a=document.getElementById("boxtwo").value;
            var b=a;
            document.getElementById("boxone").value=b;
            break;


        }
    }
}
/* new line */
function ram()
{
    var p=document.getElementById("min").value;
   var q=document.getElementById("max").value; 
   
    document.getElementById("max").value=p;
    document.getElementById("min").value=q;
    convert();

}