function sumOfOther(arr){
let arrN = [];
    for(let j = 0; j < arr.length; j++){
        arrN.push( arr.reduce( (s,i)=> s+i) - arr[j]);
    }
  
return arrN;
}
