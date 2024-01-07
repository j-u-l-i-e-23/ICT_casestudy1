let array=[2,4,6,5,7];
let sum=0;
let sq=0;
for( let i = 0; i < array.length; i++){

    sq = array[i] * array[i];
    sum = sum + sq;

}

console.log("The sum of squares of the elements of array : " + sum);