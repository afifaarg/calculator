const operators = document.querySelectorAll('.num');
const operator =document.querySelectorAll('.operator');
const exp= document.querySelector('.expression');
const eval = document.querySelector('.egale');
const resultat = document.querySelector('.result');
const clearBtn = document.querySelector('.clear');


let expressionArray=[];

operator.forEach(op =>{
  op.addEventListener('click',SauvOperator)
});

operators.forEach(num =>{
   num.addEventListener('click', SauvNumber);
});

eval.addEventListener('click', evaluateExpression)
clearBtn.addEventListener('click',clearDisplay);


function SauvNumber(event){
  const number =  event.target.innerHTML;
  addToArray(number);
}

function SauvOperator (event){
   const operator =event.target.innerHTML;
   addToArray(operator);
}

function addToArray(item){
  let l = expressionArray.length;
  console.log(l);
  if(l==0){
    
    if(item.trim()=== '+'.trim() || item.trim()=== '/'.trim()|| item.trim()=== '-'.trim()||item.trim()=== '*'.trim()){
        alert("you can't start an arithmetique formula with an operator !!");
    }else{
      
        expressionArray.push(item);
        exp.innerHTML=expressionArray.join("");
    }
  }
         if(l>0){
               if(item.trim()=== '0'.trim() || item.trim()=== '1'.trim() || item.trim()=== '2'.trim()|| item.trim()=== '3'.trim()||item.trim()=== '4'.trim()  ||item.trim()=== '5'.trim() ||item.trim()=== '6'.trim() ||item.trim()=== '7'.trim() ||item.trim()=== '8'.trim() ||item.trim()=== '9'.trim()){
                    if(expressionArray[l-1].trim()==='+'.trim() || expressionArray[l-1].trim()==='/'.trim() || expressionArray[l-1].trim()==='*'.trim() || expressionArray[l-1].trim()==='-'.trim()){
                        expressionArray.push(item);
                        exp.innerHTML=expressionArray.join("");
                    }else{ alert(" You sould repect the arithmetique Formula 3"); }
            }else{
               
                if(item.trim()=== '+'.trim() || item.trim()=== '/'.trim()|| item.trim()=== '-'.trim()||item.trim()=== '*'.trim())   {                
                 if(expressionArray[l-1].trim()=== '0'.trim() ||expressionArray[l-1].trim()=== '1'.trim() || expressionArray[l-1].trim()=== '2'.trim()|| expressionArray[l-1].trim()=== '3'.trim()||expressionArray[l-1].trim()=== '4'.trim()  ||expressionArray[l-1].trim()=== '5'.trim() ||expressionArray[l-1].trim()=== '6'.trim() ||expressionArray[l-1].trim()=== '7'.trim() ||expressionArray[l-1].trim()=== '8'.trim() ||expressionArray[l-1].trim()=== '9'.trim())
                  {
                    expressionArray.push(item);
                    exp.innerHTML=expressionArray.join("");
                 }else
                 {  
                    alert(" You sould repect the arithmetique Formula ");
                }
          }
        }
}
}


function evaluateExpression(){

  let l=expressionArray.length;
  if(expressionArray[0].trim()!= '+'.trim() && expressionArray[0].trim()!= '/'.trim() && expressionArray[0].trim()!= '-'.trim() && expressionArray[0].trim() != '*'.trim() ){
  
   let solution =Number(expressionArray[0]);
  for(var i=1 ; i<l;i++){
   
    switch (expressionArray[i].trim()){
      case '+' :{
       solution+= Number(expressionArray[i+1]);
        
        break; 
      }
      case '-':{
         solution -= Number(expressionArray[i+1]);
        break; 
      }

      case '*':{
         solution *= Number(expressionArray[i+1]);
        break; 
      }

      case '/':{
         solution /= Number(expressionArray[i+1]);
        break; 
      }

      default:continue;
    }
     resultat.innerHTML=solution;
  }
}else{
   alert("Invalid formula : cannot finish with an operator");
}
}

function clearDisplay(){
   resultat.innerHTML="";
   exp.innerHTML="";
   expressionArray=[];
   console.log(expressionArray);
}