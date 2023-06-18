
function sumAll(start,end){
    let sum=0;
     for (var i=start; i <= end; i++){
        sum = sum + i;
        }
        console.log(sum);    
        return sum;
}

let Total = sumAll(1,100);

console.log("Total sum is "+Total);
