const array = [23, 74, 0, 99, 45, 5, 9, -42, 77, 88, -1, 33];
let positiveNumber = [];
for(let i = 0; i < array.length; i++){

    let number = array[i];
    if(number >= 0){
        positiveNumber.push(number);
    } else{
        break;
    }
}
console.log(positiveNumber);