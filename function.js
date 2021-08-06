
var mymony =[15,45,78,457,5674,54,6689,75,54,7];
for (let i = 0; i < mymony.length; i++) {
    const element = mymony[i];
    if(element%2==0){
        console.log(element);
    }
    else{
        console.log(element*2);
    }
    
}


function output(x){
      var outnumber=x[0]
    for (let i = 0; i < x.length; i++) {
        const element = x[i];
        if(element%2 == 0){
            outnumber=element;
           console.log(outnumber,'this number is event number');

        
        }
        else{
            outnumber=element*2;
            console.log(outnumber,'this number is odd number');

        }
    }
}


let roll =[44,7,55,66,85,48,745,748,4,12,1,5,4554,4489,47];
let result =output(roll);
console.log(result);



































































