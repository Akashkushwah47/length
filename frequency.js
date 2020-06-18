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
    if(d=="hertz"){
        switch(e)
        {
           
            case'hertz':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'kilohertz':
            var a=document.getElementById("boxone").value;
            var b=a/1000;
            document.getElementById("boxtwo").value=b;
            break;
            case'megahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=a/Math.pow(10,6);
            document.getElementById("boxtwo").value=b;
            break;
            case'gigahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=a/Math.pow(10,9);
            document.getElementById("boxtwo").value=b;
            break;
    
        }
    }
    else if (d=="kilohertz"){
        switch(e)
        {


            case'hertz':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'kilohertz':
            var a=document.getElementById("boxone").value;
            var b=(a*(9/5))+32;
            document.getElementById("boxtwo").value=b;
            break;
            case'megahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;
            case'gigahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;

        }
    }
    else if(d=="megahertz")
    {
        switch(e)
        {
            
            
            case'hertz':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'kilohertz':
            var a=document.getElementById("boxone").value;
            var b=(a*(9/5))+32;
            document.getElementById("boxtwo").value=b;
            break;
            case'megahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;
            case'gigahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;

        }
    }
    else if(d=="gigahertz")
    {
        switch(e)
        {
            
            
            case'hertz':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'kilohertz':
            var a=document.getElementById("boxone").value;
            var b=(a*(9/5))+32;
            document.getElementById("boxtwo").value=b;
            break;
            case'megahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;
            case'gigahertz':
            var a=parseInt(document.getElementById("boxone").value);
            var b=(a+273.15);
            document.getElementById("boxtwo").value=b;
            break;

        }
    }
}
/* new function hai reverse me change karne ke liye */

/* new line */
function ram()
{
    var p=document.getElementById("min").value;
   var q=document.getElementById("max").value; 
   
    document.getElementById("max").value=p;
    document.getElementById("min").value=q;
    convert();

}