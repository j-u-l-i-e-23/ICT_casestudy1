let array=[3,4,5,3,4,6,7,3,8,3,9,1,4,3];
let count = 1, 
    max = 0, 
    element; 

for (let i = 0; i < array.length; ++i) { 
    if (array[i] === array[i - 1]) { 
        count++; 
    } else { 
        count = 1; 
    } 
    if (count > max) { 
        max = count; 
        element = array[i]; 
    } 
} 

console.log("The most frequent item in the array is " + element);