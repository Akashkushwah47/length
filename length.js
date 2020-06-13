
var s=document.getElementById("boxone");
s.addEventListener("keyup",convert);
var i=document.getElementById("boxtwo");
i.addEventListener("keyup",convert);
var w=document.getElementById("max");
 w.addEventListener("change",convert);
 var r=document.getElementById("min");
 r.addEventListener("change",convert);
function convert(){
    /* var a=document.getElementById("boxone").value;
    var b=a*100; 
    document.getElementById("boxtwo").value=b; */
    



var d=document.getElementById("min").value;
var e=document.getElementById("max").value;

if(e=='meter'){

switch(d)
{
    case 'meter':

    var a=document.getElementById("boxone").value;
     
    document.getElementById("boxtwo").value=a; 
    break;
    case 'decimeter':
    var a=document.getElementById("boxone").value;
    var b=a*1000; 
    document.getElementById("boxtwo").value=b; 
    break;
    case 'centimeter':
    var a=document.getElementById("boxone").value;
    var b=a*100; 
    document.getElementById("boxtwo").value=b; 
    break;
   /*  case defalut:
    document.getElementById("para").innerHTML="akash"; */
    
} 
}
    else if(e=='centimeter')
    {
        
        switch(d)
{
    case 'meter':

    var a=document.getElementById("boxone").value;
     var b=(a/100);
    document.getElementById("boxtwo").value=b; 
    break;
    case 'decimeter':
    var a=document.getElementById("boxone").value;
    var b=a*100; 
    document.getElementById("boxtwo").value=b; 
    break;
    case 'centimeter':
    var a=document.getElementById("boxone").value;
    
    document.getElementById("boxtwo").value=a; 
    break;
   /*  case defalut:
    document.getElementById("para").innerHTML="akash"; */
    
} 
          
    }


}

    function ram()
    {
        var p=document.getElementById("min").value;
       var q=document.getElementById("max").value; 
       
        document.getElementById("max").value=p;
        document.getElementById("min").value=q;
        convert();

    }

    
