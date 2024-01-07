function prime(array1) {

    let a1=array1[0];
    let flag=0;

    if (a1===1){
        console.log("The number"+ a1 +"is neither prime nor composite");
        
    }
    else if (a1 > 1){
        for( let i = 2; i < a1; i++ ){
            if (a1 % i == 0){
                flag = flag + 1;
                break;

            }
        }
        if( flag ==0 ){
            console.log("The number "+ a1 +" is  prime");
        }
        else{
            console.log("The number "+ a1 +" is not prime");
        }
    }

    
    
}
let array=[7,3,4,5,8];
prime(array);