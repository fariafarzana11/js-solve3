// 3. Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(array,size){
    let sum = 0;
    for(const arr of array){
        sum += arr;
    }

    if (arrayResult.length !== size) {
        return;
    }

    const avg = sum / size;
    return avg;
}

const arrayResult = [12,22,23];
const size = 3;
const result = make_avg(arrayResult,size);
console.log(result)