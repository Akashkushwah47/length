
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
if(d=="kilometer"){
    switch(e)
    {
        case'kilometer':
        var a=document.getElementById("boxone").value;
        
        document.getElementById("boxtwo").value=a;
        break;
        case'decimeter':
        var a=document.getElementById("boxone").value;
        var b=a*100;
        document.getElementById("boxtwo").value=b;
        break;
        case'meter':
        var a=document.getElementById("boxone").value;
        var b=a*1000;
        document.getElementById("boxtwo").value=b;
        break;
        case'centimeter':
        var a=document.getElementById("boxone").value;
        var b=a*100000;
        document.getElementById("boxtwo").value=b;
        break;
        case'millimeter':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,6);
        document.getElementById("boxtwo").value=b;
        break;
        case'micrometer':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,9);
        document.getElementById("boxtwo").value=b;
        break;
        case'nanometer':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,12);
        document.getElementById("boxtwo").value=b;
        break;
        case'picometer':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,15);
        document.getElementById("boxtwo").value=b;
        break;
        case'mile':
        var a=document.getElementById("boxone").value;
        var b=a*0.621371;
        document.getElementById("boxtwo").value=b;
        break;
        case'yard':
        var a=document.getElementById("boxone").value;
        var b=a*1093.61;
        document.getElementById("boxtwo").value=b;
        break;
        case'foot':
        var a=document.getElementById("boxone").value;
        var b=a*3280.84;
        document.getElementById("boxtwo").value=b;
        break;
        case'inch':
        var a=document.getElementById("boxone").value;
        var b=a*39370.1;
        document.getElementById("boxtwo").value=b;
        break;

    }
}

else if(d=='meter'){

switch(e)
{
    case'kilometer':
    var a=document.getElementById("boxone").value;
    var b=a/1000;
    document.getElementById("boxtwo").value=b;
    break;
    case'decimeter':
    var a=document.getElementById("boxone").value;
    var b=a*.1;
    document.getElementById("boxtwo").value=b;
    break;
    case'meter':
    var a=document.getElementById("boxone").value;
    var b=a;
    document.getElementById("boxtwo").value=b;
    break;
    case'centimeter':
    var a=document.getElementById("boxone").value;
    var b=a*100;
    document.getElementById("boxtwo").value=b;
    break;
    case'millimeter':
    var a=document.getElementById("boxone").value;
    var b=a*Math.pow(10,3);
    document.getElementById("boxtwo").value=b;
    break;
    case'micrometer':
    var a=document.getElementById("boxone").value;
    var b=a*Math.pow(10,6);
    document.getElementById("boxtwo").value=b;
    break;
    case'nanometer':
    var a=document.getElementById("boxone").value;
    var b=a*Math.pow(10,9);
    document.getElementById("boxtwo").value=b;
    break;
    case'picometer':
    var a=document.getElementById("boxone").value;
    var b=a*Math.pow(10,12);
    document.getElementById("boxtwo").value=b;
    break;
    case'mile':
    var a=document.getElementById("boxone").value;
    var b=a*0.000621371;
    document.getElementById("boxtwo").value=b;
    break;
    case'yard':
    var a=document.getElementById("boxone").value;
    var b=a*1.09361;
    document.getElementById("boxtwo").value=b;
    break;
    case'foot':
    var a=document.getElementById("boxone").value;
    var b=a*3.28084;
    document.getElementById("boxtwo").value=b;
    break;
    case'inch':
    var a=document.getElementById("boxone").value;
    var b=a*39.3701;
    document.getElementById("boxtwo").value=b;
    break;
    
} 
}
    
else if(d=='decimeter'){

    switch(e)
    {
        case'kilometer':
        var a=document.getElementById("boxone").value;
        var b=a*0.01;
        document.getElementById("boxtwo").value=b;
        break;
        case'decimeter':
        var a=document.getElementById("boxone").value;
        var b=a;
        document.getElementById("boxtwo").value=b;
        break;
        case'meter':
        var a=document.getElementById("boxone").value;
        var b=a*10;
        document.getElementById("boxtwo").value=b;
        break;
        case'centimeter':
        var a=document.getElementById("boxone").value;
        var b=a*1000;
        document.getElementById("boxtwo").value=b;
        break;
        case'millimeter':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,4);
        document.getElementById("boxtwo").value=b;
        break;
        case'micrometer':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,7);
        document.getElementById("boxtwo").value=b;
        break;
        case'nanometer':
        var a=document.getElementById("boxone").value;
        var b=a*Math.pow(10,10);
        document.getElementById("boxtwo").value=b;
        break;
        case'picometer':
        var a=document.getElementById("boxone").value;
        
        document.getElementById("boxtwo").value=a;
        break;
        case'mile':
        var a=document.getElementById("boxone").value;
        var b=a*0.00621371;
        document.getElementById("boxtwo").value=b;
        break;
        case'yard':
        var a=document.getElementById("boxone").value;
        var b=a*10.9361;
        document.getElementById("boxtwo").value=b;
        break;
        case'foot':
        var a=document.getElementById("boxone").value;
        var b=a*32.8084;
        document.getElementById("boxtwo").value=b;
        break;
        case'inch':
        var a=document.getElementById("boxone").value;
        var b=a*393.701;
        document.getElementById("boxtwo").value=b;
        break;
        
    } 
    }
    else if(d=='centimeter'){

        switch(e)
        {
            case'kilometer':
            var a=document.getElementById("boxone").value;
            var b=a*Math.pow(10,-5);
            document.getElementById("boxtwo").value=b;
            break;
            case'decimeter':
            var a=document.getElementById("boxone").value;
            var b=a*.001;
            document.getElementById("boxtwo").value=b;
            break;
            case'meter':
            var a=document.getElementById("boxone").value;
            var b=a*.01;
            document.getElementById("boxtwo").value=b;
            break;
            case'centimeter':
            var a=document.getElementById("boxone").value;
            var b=a;
            document.getElementById("boxtwo").value=b;
            break;
            case'millimeter':
            var a=document.getElementById("boxone").value;
            var b=a*Math.pow(10,1);
            document.getElementById("boxtwo").value=b;
            break;
            case'micrometer':
            var a=document.getElementById("boxone").value;
            var b=a*Math.pow(10,4);
            document.getElementById("boxtwo").value=b;
            break;
            case'nanometer':
            var a=document.getElementById("boxone").value;
            var b=a*Math.pow(10,7);
            document.getElementById("boxtwo").value=b;
            break;
            case'picometer':
            var a=document.getElementById("boxone").value;
            var b=a*Math.pow(10,10);
            document.getElementById("boxtwo").value=b;
            break;
            case'mile':
            var a=document.getElementById("boxone").value;
            var b=a*6.2137*Math.pow(10,-6);
            document.getElementById("boxtwo").value=b;
            break;
            case'yard':
            var a=document.getElementById("boxone").value;
            var b=a*.0109361;
            document.getElementById("boxtwo").value=b;
            break;
            case'foot':
            var a=document.getElementById("boxone").value;
            var b=a*.0328084;
            document.getElementById("boxtwo").value=b;
            break;
            case'inch':
            var a=document.getElementById("boxone").value;
            var b=a*.393701;
            document.getElementById("boxtwo").value=b;
            break;
            
        } 
        }

        else if(d=='millimeter'){

            switch(e)
            {
                case'kilometer':
                var a=document.getElementById("boxone").value;
                var b=a*Math.pow(10,6);
                document.getElementById("boxtwo").value=b;
                break;
                case'decimeter':
                var a=document.getElementById("boxone").value;
                var b=a*.01;
                document.getElementById("boxtwo").value=b;
                break;
                case'meter':
                var a=document.getElementById("boxone").value;
                var b=a*.001;
                document.getElementById("boxtwo").value=b;
                break;
                case'centimeter':
                var a=document.getElementById("boxone").value;
                var b=a*.1;
                document.getElementById("boxtwo").value=b;
                break;
                case'millimeter':
                var a=document.getElementById("boxone").value;
                var b=a;
                document.getElementById("boxtwo").value=b;
                break;
                case'micrometer':
                var a=document.getElementById("boxone").value;
                var b=a*Math.pow(10,3);
                document.getElementById("boxtwo").value=b;
                break;
                case'nanometer':
                var a=document.getElementById("boxone").value;
                var b=a*Math.pow(10,6);
                document.getElementById("boxtwo").value=b;
                break;
                case'picometer':
                var a=document.getElementById("boxone").value;
                var b=a*Math.pow(10,9);
                document.getElementById("boxtwo").value=b;
                break;
                case'mile':
                var a=document.getElementById("boxone").value;
                var b=a*6.2137*Math.pow(10,-7);
                document.getElementById("boxtwo").value=b;
                break;
                case'yard':
                var a=document.getElementById("boxone").value;
                var b=a*.00109361;
                document.getElementById("boxtwo").value=b;
                break;
                case'foot':
                var a=document.getElementById("boxone").value;
                var b=a*.00328084;
                document.getElementById("boxtwo").value=b;
                break;
                case'inch':
                var a=document.getElementById("boxone").value;
                var b=a*.0393701;
                document.getElementById("boxtwo").value=b;
                break;
                
            } 
            }
            
            else if(d=='micrometer'){

                switch(e)
                {
                    case'kilometer':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,-9);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'decimeter':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,-5);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'meter':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,-6);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'centimeter':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,-4);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'millimeter':
                    var a=document.getElementById("boxone").value;
                    var b=a*.001;
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'micrometer':
                    var a=document.getElementById("boxone").value;
                    var b=a;
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'nanometer':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,3);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'picometer':
                    var a=document.getElementById("boxone").value;
                    var b=a*Math.pow(10,6);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'mile':
                    var a=document.getElementById("boxone").value;
                    var b=a*6.2137*Math.pow(10,-10);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'yard':
                    var a=document.getElementById("boxone").value;
                    var b=a*1.09361*Math.pow(10,-6);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'foot':
                    var a=document.getElementById("boxone").value;
                    var b=a*3.28084*Math.pow(10,-6);
                    document.getElementById("boxtwo").value=b;
                    break;
                    case'inch':
                    var a=document.getElementById("boxone").value;
                    var b=a*3.93701*Math.pow(10,-5);
                    document.getElementById("boxtwo").value=b;
                    break;
                    
                } 
                }
                
                else if(d=='nanometer'){

                    switch(e)
                    {
                        case'kilometer':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,-12);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'decimeter':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,-8);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'meter':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,-9);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'centimeter':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,-7)
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'millimeter':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,-6);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'micrometer':
                        var a=document.getElementById("boxone").value;
                        var b=a*.001;
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'nanometer':
                        var a=document.getElementById("boxone").value;
                        var b=a;
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'picometer':
                        var a=document.getElementById("boxone").value;
                        var b=a*Math.pow(10,3);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'mile':
                        var a=document.getElementById("boxone").value;
                        var b=a*6.2137*Math.pow(10,-13);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'yard':
                        var a=document.getElementById("boxone").value;
                        var b=a*1.09361*Math.pow(10,-9);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'foot':
                        var a=document.getElementById("boxone").value;
                        var b=a*3.28084*Math.pow(10,-9);
                        document.getElementById("boxtwo").value=b;
                        break;
                        case'inch':
                        var a=document.getElementById("boxone").value;
                        var b=a*3.93701*Math.pow(10,-8);
                        document.getElementById("boxtwo").value=b;
                        break;
                        
                    } 
                    }
                    
                    else if(d=='picometer'){

                        switch(e)
                        {
                            case'kilometer':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-15);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'decimeter':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-13);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'meter':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-12);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'centimeter':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-10);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'millimeter':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-9);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'micrometer':
                            var a=document.getElementById("boxone").value;
                            var b=a*Math.pow(10,-6);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'nanometer':
                            var a=document.getElementById("boxone").value;
                            var b=a*0.001;
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'picometer':
                            var a=document.getElementById("boxone").value;
                            var b=a;
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'mile':
                            var a=document.getElementById("boxone").value;
                            var b=a*6.2137*Math.pow(10,-16);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'yard':
                            var a=document.getElementById("boxone").value;
                            var b=a*1.09361*Math.pow(10,-12);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'foot':
                            var a=document.getElementById("boxone").value;
                            var b=a*3.28084*Math.pow(10,-12);
                            document.getElementById("boxtwo").value=b;
                            break;
                            case'inch':
                            var a=document.getElementById("boxone").value;
                            var b=a*3.93701*Math.pow(10,-11);
                            document.getElementById("boxtwo").value=b;
                            break;
                            
                        } 
                        }
                        
                        else if(d=='mile'){

                            switch(e)
                            {
                                case'kilometer':
                                var a=document.getElementById("boxone").value;
                                var b=a*1.60934;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'decimeter':
                                var a=document.getElementById("boxone").value;
                                var b=a*16093.4;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'meter':
                                var a=document.getElementById("boxone").value;
                                var b=a*1609.34;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'centimeter':
                                var a=document.getElementById("boxone").value;
                                var b=a*160934;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'millimeter':
                                var a=document.getElementById("boxone").value;
                                var b=a*1.609*Math.pow(10,6);
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'micrometer':
                                var a=document.getElementById("boxone").value;
                                var b=a*1.609*Math.pow(10,9);
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'nanometer':
                                var a=document.getElementById("boxone").value;
                                var b=a*1.609*Math.pow(10,12);
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'picometer':
                                var a=document.getElementById("boxone").value;
                                var b=a*1.609*Math.pow(10,15);
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'mile':
                                var a=document.getElementById("boxone").value;
                                var b=a;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'yard':
                                var a=document.getElementById("boxone").value;
                                var b=a*1760;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'foot':
                                var a=document.getElementById("boxone").value;
                                var b=a*5280;
                                document.getElementById("boxtwo").value=b;
                                break;
                                case'inch':
                                var a=document.getElementById("boxone").value;
                                var b=a*63360;
                                document.getElementById("boxtwo").value=b;
                                break;
                                
                            } 
                            }
                            
                            else if(d=='yard'){

                                switch(e)
                                {
                                    case'kilometer':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*0.0009144;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'decimeter':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*9.144;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'meter':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*0.9144;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'centimeter':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*91.44;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'millimeter':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*914.4;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'micrometer':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*914400;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'nanometer':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*9.144*Math.pow(10,8);
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'picometer':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*9.144*Math.pow(10,11);
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'mile':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*0.000568182;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'yard':
                                    var a=document.getElementById("boxone").value;
                                    var b=a;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'foot':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*3;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    case'inch':
                                    var a=document.getElementById("boxone").value;
                                    var b=a*36;
                                    document.getElementById("boxtwo").value=b;
                                    break;
                                    
                                } 
                                }
                                
                                else if(d=='foot'){

                                    switch(e)
                                    {
                                        case'kilometer':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*0.0003048;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'decimeter':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*3.048;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'meter':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*.3048;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'centimeter':
                                        var a=document.getElementById("boxone").value;
                                        var b=30.48;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'millimeter':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*304.8;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'micrometer':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*304800;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'nanometer':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*3.048*Math.pow(10,8);
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'picometer':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*3.048*Math.pow(10,11);
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'mile':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*0.000189394;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'yard':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*.333333;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'foot':
                                        var a=document.getElementById("boxone").value;
                                        var b=a;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        case'inch':
                                        var a=document.getElementById("boxone").value;
                                        var b=a*12;
                                        document.getElementById("boxtwo").value=b;
                                        break;
                                        
                                    } 
                                    }
                                    
                                    else if(d=='inch'){

                                        switch(e)
                                        {
                                            case'kilometer':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*2.54*Math.pow(10,5);
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'decimeter':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*.254;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'meter':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*.0254;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'centimeter':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*2.54;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'millimeter':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*25.4;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'micrometer':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*25400;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'nanometer':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*2.54*Math.pow(10,7);
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'picometer':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*2.54*Math.pow(10,10);
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'mile':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*1.5783*Math.pow(10,5);
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'yard':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*0.0277778;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'foot':
                                            var a=document.getElementById("boxone").value;
                                            var b=a*0.0833333;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            case'inch':
                                            var a=document.getElementById("boxone").value;
                                            var b=a;
                                            document.getElementById("boxtwo").value=b;
                                            break;
                                            
                                        } 
                                        }
                                        
                                                                                                                                                

}
/* new function */
/* yaha se second box means max box me se ulta convert karne ka function hai */
                    function second(){
                    
                        var e=document.getElementById("min").value;
                        
                        var d=document.getElementById("max").value;
                        
                        if(d=="kilometer"){
                            switch(e)
                            {
                                case'kilometer':
                                var a=document.getElementById("boxtwo").value;
                                
                                document.getElementById("boxone").value=a;
                                break;
                                case'decimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*100;
                                document.getElementById("boxone").value=b;
                                break;
                                case'meter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*1000;
                                document.getElementById("boxone").value=b;
                                break;
                                case'centimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*100000;
                                document.getElementById("boxone").value=b;
                                break;
                                case'millimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,6);
                                document.getElementById("boxone").value=b;
                                break;
                                case'micrometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,9);
                                document.getElementById("boxone").value=b;
                                break;
                                case'nanometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,12);
                                document.getElementById("boxone").value=b;
                                break;
                                case'picometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,15);
                                document.getElementById("boxone").value=b;
                                break;
                                case'mile':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*0.621371;
                                document.getElementById("boxone").value=b;
                                break;
                                case'yard':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*1093.61;
                                document.getElementById("boxone").value=b;
                                break;
                                case'foot':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*3280.84;
                                document.getElementById("boxone").value=b;
                                break;
                                case'inch':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*39370.1;
                                document.getElementById("boxone").value=b;
                                break;
                        
                            }
                        }
                        
                        else if(d=='meter'){
                        
                        switch(e)
                        {
                            case'kilometer':
                            var a=document.getElementById("boxtwo").value;
                            var b=a/1000;
                            document.getElementById("boxone").value=b;
                            break;
                            case'decimeter':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*.1;
                            document.getElementById("boxone").value=b;
                            break;
                            case'meter':
                            var a=document.getElementById("boxtwo").value;
                            var b=a;
                            document.getElementById("boxone").value=b;
                            break;
                            case'centimeter':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*100;
                            document.getElementById("boxone").value=b;
                            break;
                            case'millimeter':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*Math.pow(10,3);
                            document.getElementById("boxone").value=b;
                            break;
                            case'micrometer':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*Math.pow(10,6);
                            document.getElementById("boxone").value=b;
                            break;
                            case'nanometer':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*Math.pow(10,9);
                            document.getElementById("boxone").value=b;
                            break;
                            case'picometer':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*Math.pow(10,12);
                            document.getElementById("boxone").value=b;
                            break;
                            case'mile':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*0.000621371;
                            document.getElementById("boxone").value=b;
                            break;
                            case'yard':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*1.09361;
                            document.getElementById("boxone").value=b;
                            break;
                            case'foot':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*3.28084;
                            document.getElementById("boxone").value=b;
                            break;
                            case'inch':
                            var a=document.getElementById("boxtwo").value;
                            var b=a*39.3701;
                            document.getElementById("boxone").value=b;
                            break;
                            
                        } 
                        }
                            
                        else if(d=='decimeter'){
                        
                            switch(e)
                            {
                                case'kilometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*0.01;
                                document.getElementById("boxone").value=b;
                                break;
                                case'decimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a;
                                document.getElementById("boxone").value=b;
                                break;
                                case'meter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*10;
                                document.getElementById("boxone").value=b;
                                break;
                                case'centimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*1000;
                                document.getElementById("boxone").value=b;
                                break;
                                case'millimeter':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,4);
                                document.getElementById("boxone").value=b;
                                break;
                                case'micrometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,7);
                                document.getElementById("boxone").value=b;
                                break;
                                case'nanometer':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*Math.pow(10,10);
                                document.getElementById("boxone").value=b;
                                break;
                                case'picometer':
                                var a=document.getElementById("boxtwo").value;
                                
                                document.getElementById("boxone").value=a;
                                break;
                                case'mile':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*0.00621371;
                                document.getElementById("boxone").value=b;
                                break;
                                case'yard':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*10.9361;
                                document.getElementById("boxone").value=b;
                                break;
                                case'foot':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*32.8084;
                                document.getElementById("boxone").value=b;
                                break;
                                case'inch':
                                var a=document.getElementById("boxtwo").value;
                                var b=a*393.701;
                                document.getElementById("boxone").value=b;
                                break;
                                
                            } 
                            }
                            else if(d=='centimeter'){
                        
                                switch(e)
                                {
                                    case'kilometer':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*Math.pow(10,-5);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'decimeter':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*.001;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'meter':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*.01;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'centimeter':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'millimeter':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*Math.pow(10,1);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'micrometer':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*Math.pow(10,4);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'nanometer':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*Math.pow(10,7);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'picometer':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*Math.pow(10,10);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'mile':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*6.2137*Math.pow(10,-6);
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'yard':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*.0109361;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'foot':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*.0328084;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    case'inch':
                                    var a=document.getElementById("boxtwo").value;
                                    var b=a*.393701;
                                    document.getElementById("boxone").value=b;
                                    break;
                                    
                                } 
                                }
                        
                                else if(d=='millimeter'){
                        
                                    switch(e)
                                    {
                                        case'kilometer':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*Math.pow(10,6);
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'decimeter':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.01;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'meter':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.001;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'centimeter':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.1;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'millimeter':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'micrometer':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*Math.pow(10,3);
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'nanometer':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*Math.pow(10,6);
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'picometer':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*Math.pow(10,9);
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'mile':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*6.2137*Math.pow(10,-7);
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'yard':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.00109361;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'foot':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.00328084;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        case'inch':
                                        var a=document.getElementById("boxtwo").value;
                                        var b=a*.0393701;
                                        document.getElementById("boxone").value=b;
                                        break;
                                        
                                    } 
                                    }
                                    
                                    else if(d=='micrometer'){
                        
                                        switch(e)
                                        {
                                            case'kilometer':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,-9);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'decimeter':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,-5);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'meter':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,-6);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'centimeter':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,-4);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'millimeter':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*.001;
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'micrometer':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a;
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'nanometer':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,3);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'picometer':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*Math.pow(10,6);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'mile':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*6.2137*Math.pow(10,-10);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'yard':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*1.09361*Math.pow(10,-6);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'foot':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*3.28084*Math.pow(10,-6);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            case'inch':
                                            var a=document.getElementById("boxtwo").value;
                                            var b=a*3.93701*Math.pow(10,-5);
                                            document.getElementById("boxone").value=b;
                                            break;
                                            
                                        } 
                                        }
                                        
                                        else if(d=='nanometer'){
                        
                                            switch(e)
                                            {
                                                case'kilometer':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,-12);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'decimeter':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,-8);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'meter':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,-9);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'centimeter':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,-7)
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'millimeter':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,-6);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'micrometer':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*.001;
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'nanometer':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a;
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'picometer':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*Math.pow(10,3);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'mile':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*6.2137*Math.pow(10,-13);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'yard':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*1.09361*Math.pow(10,-9);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'foot':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*3.28084*Math.pow(10,-9);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                case'inch':
                                                var a=document.getElementById("boxtwo").value;
                                                var b=a*3.93701*Math.pow(10,-8);
                                                document.getElementById("boxone").value=b;
                                                break;
                                                
                                            } 
                                            }
                                            
                                            else if(d=='picometer'){
                        
                                                switch(e)
                                                {
                                                    case'kilometer':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-15);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'decimeter':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-13);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'meter':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-12);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'centimeter':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-10);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'millimeter':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-9);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'micrometer':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*Math.pow(10,-6);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'nanometer':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*0.001;
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'picometer':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a;
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'mile':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*6.2137*Math.pow(10,-16);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'yard':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*1.09361*Math.pow(10,-12);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'foot':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*3.28084*Math.pow(10,-12);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    case'inch':
                                                    var a=document.getElementById("boxtwo").value;
                                                    var b=a*3.93701*Math.pow(10,-11);
                                                    document.getElementById("boxone").value=b;
                                                    break;
                                                    
                                                } 
                                                }
                                                
                                                else if(d=='mile'){
                        
                                                    switch(e)
                                                    {
                                                        case'kilometer':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1.60934;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'decimeter':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*16093.4;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'meter':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1609.34;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'centimeter':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*160934;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'millimeter':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1.609*Math.pow(10,6);
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'micrometer':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1.609*Math.pow(10,9);
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'nanometer':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1.609*Math.pow(10,12);
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'picometer':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1.609*Math.pow(10,15);
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'mile':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'yard':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*1760;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'foot':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*5280;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        case'inch':
                                                        var a=document.getElementById("boxtwo").value;
                                                        var b=a*63360;
                                                        document.getElementById("boxone").value=b;
                                                        break;
                                                        
                                                    } 
                                                    }
                                                    
                                                    else if(d=='yard'){
                        
                                                        switch(e)
                                                        {
                                                            case'kilometer':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*0.0009144;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'decimeter':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*9.144;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'meter':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*0.9144;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'centimeter':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*91.44;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'millimeter':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*914.4;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'micrometer':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*914400;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'nanometer':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*9.144*Math.pow(10,8);
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'picometer':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*9.144*Math.pow(10,11);
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'mile':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*0.000568182;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'yard':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'foot':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*3;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            case'inch':
                                                            var a=document.getElementById("boxtwo").value;
                                                            var b=a*36;
                                                            document.getElementById("boxone").value=b;
                                                            break;
                                                            
                                                        } 
                                                        }
                                                        
                                                        else if(d=='foot'){
                        
                                                            switch(e)
                                                            {
                                                                case'kilometer':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*0.0003048;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'decimeter':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*3.048;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'meter':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*.3048;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'centimeter':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=30.48;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'millimeter':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*304.8;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'micrometer':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*304800;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'nanometer':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*3.048*Math.pow(10,8);
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'picometer':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*3.048*Math.pow(10,11);
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'mile':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*0.000189394;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'yard':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*.333333;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'foot':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                case'inch':
                                                                var a=document.getElementById("boxtwo").value;
                                                                var b=a*12;
                                                                document.getElementById("boxone").value=b;
                                                                break;
                                                                
                                                            } 
                                                            }
                                                            
                                                            else if(d=='inch'){
                        
                                                                switch(e)
                                                                {
                                                                    case'kilometer':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*2.54*Math.pow(10,5);
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'decimeter':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*.254;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'meter':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*.0254;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'centimeter':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*2.54;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'millimeter':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*25.4;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'micrometer':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*25400;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'nanometer':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*2.54*Math.pow(10,7);
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'picometer':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*2.54*Math.pow(10,10);
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'mile':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*1.5783*Math.pow(10,5);
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'yard':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*0.0277778;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'foot':
                                                                    var a=document.getElementById("boxtwo").value;
                                                                    var b=a*0.0833333;
                                                                    document.getElementById("boxone").value=b;
                                                                    break;
                                                                    case'inch':
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

    
