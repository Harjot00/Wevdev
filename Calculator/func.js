function result(){
 
    try{
        document.getElementById("output").innerText = eval(document.getElementById("operands").innerText);
    }
    catch(e){
     return ''
    }
}
function Addoperand(id){
    const res =  document.getElementById("operands");
    for(var i = 0; i <10;i++){
        
        if (i==id){
            
            res.innerText = res.innerText + id;
          
        }
    }
    if (id == "plus"){
            res.innerText = res.innerText +  document.getElementById(id).innerText;
        }
        else if (id == "minus"){
            res.innerText = res.innerText + document.getElementById(id).innerText;
        }
        else if (id == "multiply"){
            res.innerText = res.innerText + "*";
        }
        else if (id == "divide"){
            res.innerText = res.innerText +  "/";
        }
        else if (id == "percent"){
            res.innerText = res.innerText +  "%";
        }
        else if (id == "dot"){
            res.innerText = res.innerText +  document.getElementById(id).innerText;
        } 
        else if (id == "brackets"){
            if(click%2==0){
                res.innerText = res.innerText +  "(";
                
            }
            else{
                res.innerText = res.innerText +  ")";
            
            }
            click++;
            
        } 
        else if(id == "invert"){
            if(click%2==0){
                res.innerText = res.innerText +  "-";
                
            }
            else{
                res.innerText = res.innerText +  ")";
            
            }
            click++;

        }
    result();
    
    
}

function clear(){
    document.getElementById("operands").innerText = "";
    document.getElementById("output").innerText = "";

}

function remove(){
    document.getElementById("operands").innerText = document.getElementById("operands").innerText.slice(0,-1);
}
